import React, { useState } from 'react';
import style from './Form.module.css';
import image from '../../assets/spinningWorld.gif';
import swal from "sweetalert";

export default function Form() {
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
      const response = await fetch('http://localhost:5050/guests', {
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
          <p className={style.pPlease} >Por favor, <br /> completar y enviar.</p>
          <form className={style.rsvpForm} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Nombre/s"
                className={style.inputPill}
                value={input.guest.name}
                onChange={(e) => setInput({
                  ...input,
                  guest: {
                    ...input.guest,
                    name: e.target.value,
                  },
                })}
              />
            </div>
            <h4 className={style.h4Div}>ASISTENCIA</h4>
            <div className={style.formDiv}>
              <div>
                <input
                  type="checkbox"
                  className={style.cbRound}
                  checked={input.guest.rsvp}
                  onChange={(e) => setInput({
                    ...input,
                    guest: {
                      ...input.guest,
                      rsvp: e.target.checked,
                    },
                  })}

                />
                <span className={style.formSpan}> Sí, obvio! </span>
              </div>
              <div>
                <input
                  type="checkbox"
                  className={style.cbRound}
                  checked={!input.guest.rsvp}
                  onChange={(e) => setInput({
                    ...input,
                    guest: {
                      ...input.guest,
                      rsvp: !e.target.checked,
                    },
                  })}
                />
                <span className={style.formSpan}> No, perdón! </span>
              </div>
              <div>
                <input
                  type="checkbox"
                  className={style.cbRound}
                  checked={input.plusOne?.rsvp}
                  onChange={(e) => setInput({
                    ...input,
                    plusOne: {
                      ...input.plusOne,
                      rsvp: e.target.checked,
                    },
                  })}

                />
                <span className={style.formSpan}> Plus 1</span>
              </div>
            </div>
            <div className={style.formMenuDiv}>
              <div className={style.soyPlusDiv}>
                <div >
                  <h5 className={style.h5Div}>Soy...</h5>
                  <div>
                    <input
                      type="checkbox"
                      className={style.cbRound}
                      checked={input.guest.vegan}
                      onChange={(e) => setInput({
                        ...input,
                        guest: {
                          ...input.guest,
                          vegan: e.target.checked,
                        },
                      })}
                    />
                    <span className={style.formSpan}> Veganx</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className={style.cbRound}
                      checked={input.guest.vegetarian}
                      onChange={(e) => setInput({
                        ...input,
                        guest: {
                          ...input.guest,
                          vegetarian: e.target.checked,
                        },
                      })}

                    />
                    <span className={style.formSpan}> Vegetarianx</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className={style.cbRound}
                      checked={input.guest.pescetarian}
                      onChange={(e) => setInput({
                        ...input,
                        guest: {
                          ...input.guest,
                          pescetarian: e.target.checked,
                        },
                      })}

                    />
                    <span className={style.formSpan}> Pesquetarianx</span>

                  </div>
                </div>
              </div>
              <div className={style.plus1Div}>
                <h5 className={style.h5Div}>Plus 1</h5>
                <input
                  type="checkbox"
                  className={style.cbRound}
                  checked={input.plusOne?.vegan}
                  onChange={(e) => setInput({
                    ...input,
                    plusOne: {
                      ...input.plusOne,
                      vegan: e.target.checked,
                    },
                  })}

                />
                <span className={style.formSpan}> Veganx</span>
                <br />
                <input
                  type="checkbox"
                  className={style.cbRound}
                  checked={input.plusOne?.vegetarian}
                  onChange={(e) => setInput({
                    ...input,
                    plusOne: {
                      ...input.plusOne,
                      vegetarian: e.target.checked,
                    },
                  })}

                />
                <span className={style.formSpan}> Vegetarianx</span>
                <br />
                <input
                  type="checkbox"
                  className={style.cbRound}
                  checked={input.plusOne?.pescetarian}
                  onChange={(e) => setInput({
                    ...input,
                    plusOne: {
                      ...input.plusOne,
                      pescetarian: e.target.checked,
                    },
                  })}

                />
                <span className={style.formSpan}> Pesquetarianx</span>
              </div>
            </div>
            <div>
              <h4 className={style.h4Div}>ALERGIAS</h4>
              <input
                type="text"
                placeholder="Tengo/tenemos alergia a..."
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
                ENVIAR
              </button> :
              <button type="submit" className={style.smallButton} onClick={handleNoName}>
                ENVIAR
              </button>
          }
          <img src={image} alt="spinningWorld" className={style.imgWorld} />
        </div>
      </div>
    </>
  );
}