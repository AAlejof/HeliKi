import React, { useState } from 'react';
import style from './Form.module.css';
import image from '../../assets/spinningWorld.gif';
import swal from "sweetalert";

export default function Form() {

    const [input, setInput] = useState({
        guest: {
          name: '',
          rsvp: true,
          vegan: false,
          vegetarian: false,
          pescetarian: false,
          alergies: '',
          plusOne: {
            rsvp: false,
            vegan: false,
            vegetarian: false,
            pescetarian: false,
          },
        },
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const guestData = input.guest;
        if (input.plusOne) {
          guestData.plusOne = input.plusOne;
        }
        try {
          const response = await fetch('https://heli-ki-api.vercel.app/guests', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(guestData),
          });
          if (response.ok) {
            console.log('Guest created successfully');
            swal({
              icon: 'success',
            });
            setInput(initialState);
          } else {
            console.log('Failed to create guest');
            swal({
              icon: 'warning',
            });
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      const handleNoName = (e) => {
        swal({
          icon: 'warning',
        });
      };
    
      const initialState = {
        guest: {
          name: '',
          rsvp: true,
          vegan: false,
          vegetarian: false,
          pescetarian: false,
          alergies: '',
          plusOne: {
            rsvp: false,
            vegan: false,
            vegetarian: false,
            pescetarian: false,
          },
        },
      };

    return (
        <>
            <div>
                <div className={style.rsvpDiv}>
                    <h3 className={style.h3Div}>RSVP</h3>
                    <p className={style.pPlease} >혹시 채식을 원하시는 분이 계시면 <br />
                        아래 폼을 작성하여 참석여부와 함께<br />
                        표시해 주시면 감사하겠습니다.</p>
                    <form className={style.rsvpForm} onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder="이름" className={style.inputPill} value={input.guest.name}
                                onChange={(e) => setInput({
                                    ...input,
                                    guest: {
                                        ...input.guest,
                                        name: e.target.value,
                                    },
                                })}
                            />
                        </div>
                        <h4 className={style.h4Div}>출석</h4>
                        <div className={style.formDiv}>
                            <div>
                                <input type="checkbox" className={style.cbRound} checked={input.guest.rsvp}
                                    onChange={(e) => setInput({
                                        ...input,
                                        guest: {
                                            ...input.guest,
                                            rsvp: e.target.checked,
                                        },
                                    })}
                                />
                                <span className={style.formSpan}> 참석 </span>
                            </div>
                            <div>
                                <input type="checkbox" className={style.cbRound} checked={!input.guest.rsvp}
                                    onChange={(e) => setInput({
                                        ...input,
                                        guest: {
                                            ...input.guest,
                                            rsvp: !e.target.checked,
                                        },
                                    })}
                                />
                                <span className={style.formSpan}> 참석 안함 </span>
                            </div>
                            <div>
                                {(input.guest.rsvp) ?
                                    (<input type="checkbox" className={style.cbRound} checked={input.plusOne?.rsvp}
                                        onChange={(e) => setInput({
                                            ...input,
                                            plusOne: {
                                                ...input.plusOne,
                                                rsvp: e.target.checked,
                                            },
                                        })} />) : (
                                        <input type="checkbox" className={style.cbRound} checked={input.plusOne?.rsvp}
                                            onChange={(e) => setInput({
                                                ...input,
                                                plusOne: {
                                                    ...input.plusOne,
                                                    rsvp: e.target.checked,
                                                },
                                            })}
                                            disabled
                                        />)}
                                <span className={style.formSpan}> Plus 1</span>
                            </div>
                        </div>
                        <div className={style.formMenuDiv}>
                            <div className={style.soyPlusDiv}>
                                <div >
                                    <h5 className={style.h5Div}>나는 ...</h5>
                                    <div>
                                        {(input.guest.rsvp) ? (
                                            <input type="checkbox" className={style.cbRound} checked={input.guest.vegan}
                                                onChange={(e) => setInput({
                                                    ...input,
                                                    guest: {
                                                        ...input.guest,
                                                        vegan: e.target.checked,
                                                    },
                                                })}
                                            />
                                        ) : (
                                            <input type="checkbox" className={style.cbRound} checked={input.guest.vegan}
                                                onChange={(e) => setInput({
                                                    ...input,
                                                    guest: {
                                                        ...input.guest,
                                                        vegan: e.target.checked,
                                                    },
                                                })}
                                                disabled
                                            />
                                        )}
                                        <span className={style.formSpan}> 비건</span>
                                    </div>
                                    <div>
                                        {(input.guest.rsvp) ? (
                                            <input type="checkbox" className={style.cbRound} checked={input.guest.vegetarian}
                                                onChange={(e) => setInput({
                                                    ...input,
                                                    guest: {
                                                        ...input.guest,
                                                        vegetarian: e.target.checked,
                                                    },
                                                })}
                                            />
                                        ) : (
                                            <input type="checkbox" className={style.cbRound} checked={input.guest.vegetarian}
                                                onChange={(e) => setInput({
                                                    ...input,
                                                    guest: {
                                                        ...input.guest,
                                                        vegetarian: e.target.checked,
                                                    },
                                                })}
                                                disabled
                                            />
                                        )}
                                        <span className={style.formSpan}> 채식주의자</span>
                                    </div>
                                    <div>
                                        {(input.guest.rsvp) ? (
                                            <input type="checkbox" className={style.cbRound} checked={input.guest.pescetarian}
                                                onChange={(e) => setInput({
                                                    ...input,
                                                    guest: {
                                                        ...input.guest,
                                                        pescetarian: e.target.checked,
                                                    },
                                                })}

                                            />) : (
                                            <input type="checkbox" className={style.cbRound} checked={input.guest.pescetarian}
                                                onChange={(e) => setInput({
                                                    ...input,
                                                    guest: {
                                                        ...input.guest,
                                                        pescetarian: e.target.checked,
                                                    },
                                                })}
                                                disabled
                                            />
                                        )}
                                        <span className={style.formSpan}> 페스케테리안</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.plus1Div}>
                                <h5 className={style.h5Div}>Plus 1</h5>
                                {(input.plusOne?.rsvp) ? (
                                    <input type="checkbox" className={style.cbRound} checked={input.plusOne?.vegan}
                                        onChange={(e) => setInput({
                                            ...input,
                                            plusOne: {
                                                ...input.plusOne,
                                                vegan: e.target.checked,
                                            },
                                        })}
                                    />) : (
                                    <input type="checkbox" className={style.cbRound} checked={input.plusOne?.vegan}
                                        onChange={(e) => setInput({
                                            ...input,
                                            plusOne: {
                                                ...input.plusOne,
                                                vegan: e.target.checked,
                                            },
                                        })}
                                        disabled
                                    />
                                )
                                }
                                <span className={style.formSpan}> 비건</span>
                                <br />
                                {(input.plusOne?.rsvp) ? (
                                    <input type="checkbox" className={style.cbRound} checked={input.plusOne?.vegetarian}
                                        onChange={(e) => setInput({
                                            ...input,
                                            plusOne: {
                                                ...input.plusOne,
                                                vegetarian: e.target.checked,
                                            },
                                        })}
                                    />) : (
                                    <input type="checkbox" className={style.cbRound} checked={input.plusOne?.vegetarian}
                                        onChange={(e) => setInput({
                                            ...input,
                                            plusOne: {
                                                ...input.plusOne,
                                                vegetarian: e.target.checked,
                                            },
                                        })}
                                        disabled
                                    />
                                )
                                }
                                <span className={style.formSpan}> 채식주의자</span>
                                <br />
                                {
                                    (input.plusOne?.rsvp) ? (
                                        <input type="checkbox" className={style.cbRound} checked={input.plusOne?.pescetarian}
                                            onChange={(e) => setInput({
                                                ...input,
                                                plusOne: {
                                                    ...input.plusOne,
                                                    pescetarian: e.target.checked,
                                                },
                                            })}
                                        />) : (
                                        <input type="checkbox" className={style.cbRound} checked={input.plusOne?.pescetarian}
                                            onChange={(e) => setInput({
                                                ...input,
                                                plusOne: {
                                                    ...input.plusOne,
                                                    pescetarian: e.target.checked,
                                                },
                                            })}
                                            disabled
                                        />
                                    )
                                }
                                <span className={style.formSpan}> 페스케테리안</span>
                            </div>
                        </div>
                        <div>
                            <h4 className={style.h4Div}>알레르기</h4>
                            <input
                                type="text"
                                placeholder="저/저희는알레르기가 있습니다"
                                className={style.inputPill}
                                value={input.guest.alergies}
                                onChange={(e) => setInput({
                                    ...input,
                                    guest: {
                                        ...input.guest,
                                        alergies: e.target.value,
                                    },
                                })}
                            />
                        </div>
                    </form>
                    {
                        (input.guest.name) ?
                            <button type="submit" className={style.smallButton} onClick={handleSubmit}>
                                보내기
                            </button> :
                            <button type="submit" className={style.smallButton} onClick={handleNoName}>
                                보내기
                            </button>
                    }
                    <span className={style.formSpan}>보내기 전에 완료하십시오.</span>
                    <img src={image} alt="spinningWorld" className={style.imgWorld} />
                </div>
            </div>
        </>
    );
}