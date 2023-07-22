import React, { useState } from 'react';
import style from './Form.module.css';
import image from '../../assets/spinningWorld.gif';
import swal from "sweetalert";

export default function FormDeutsch() {
    const [input, setInput] = useState({
        guest: {
            name: '',
            rsvp: false,
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
    }



    return (
        <>
            <div>
                <div className={style.rsvpDiv}>
                    <h3 className={style.h3Div}>RSVP</h3>
                    <p className={style.pPlease} >Für unsere Planung möchten wir euch bitten, die folgenden Felder auszufüllen und auf Senden zu klicken. <br /><br />
                    Bitte gebt uns bis zum 18. September Bescheid, ob ihr kommen könnt.</p>
                    <form className={style.rsvpForm} onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder="Name" className={style.inputPill} value={input.guest.name}
                                onChange={(e) => setInput({
                                    ...input,
                                    guest: {
                                        ...input.guest,
                                        name: e.target.value,
                                    },
                                })}
                            />
                        </div>
                        <h4 className={style.h4Div}>ICH BIN DABEI!</h4>
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
                                <span className={style.formSpan}> Ja, na klar! </span>
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
                                <span className={style.formSpan}> Leider nein </span>
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
                                <div>
                                    <h5 className={style.h5Div}>ICH BIN ...</h5>
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
                                        <span className={style.formSpan}> Veganer:in</span>
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
                                        <span className={style.formSpan}> Vegetarier:in</span>
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
                                        <span className={style.formSpan}> Pescetarier:in</span>

                                    </div>
                                </div>
                            </div>
                            <div className={style.plus1Div}>
                                <h5 className={style.h5Div}>Plus 1</h5>
                                {
                                    (input.plusOne?.rsvp) ? (
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
                                <span className={style.formSpan}> Veganer:in</span>
                                <br />
                                {
                                    (input.plusOne?.rsvp) ? (
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
                                <span className={style.formSpan}> Vegetarier:in</span>
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
                                <span className={style.formSpan}> Pescetarier:in</span>
                            </div>
                        </div>
                        <div>
                            <h4 className={style.h4Div}>ALLERGIEN</h4>
                            <input
                                type="text"
                                placeholder="Ich bin / plus 1 ist allergisch auf..."
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
                                SENDEN
                            </button> :
                            <button type="submit" className={style.smallButton} onClick={handleNoName}>
                                SENDEN
                            </button>
                    }
                    <span className={style.formSpan}>Bitte vor dem Senden ausfüllen</span>
                    <img src={image} alt="spinningWorld" className={style.imgWorld} />
                </div>
            </div>
        </>
    );
}