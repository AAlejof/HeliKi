import React, { useState } from 'react';
import style from './Form.module.css';
import image from '../../assets/spinningWorld.gif';

export default function FormDeutsch() {
    const [name, setName] = useState('');
    const [plusOne, setPlusOne] = useState(false);
    const [rsvp, setRsvp] = useState(true);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [pescetarian, setPescetarian] = useState(false);
    const [alergies, setAlergies] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const guestData = {
            name: name,
            plusOne: plusOne,
            rsvp: rsvp,
            vegan: vegan,
            vegetarian: vegetarian,
            pescetarian: pescetarian,
            alergies: alergies
        };

        try {
            const response = await fetch('http://localhost:5050/guests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(guestData),
            });

            if (response.ok) {
                // Handle success
                console.log('Guest created successfully');
                // You can perform any additional actions here, like showing a success message or redirecting to another page
            } else {
                // Handle error
                console.log('Failed to create guest');
                // You can perform any additional actions here, like showing an error message
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <>
            <div>
                <div className={style.rsvpDiv}>
                    <h3 className={style.h3Div}>RSVP</h3>
                    <p className={style.pPlease} >Für unsere Planung möchten wir euch bitte, die folgenden Felder auszufüllen und abzusenden.
                        Bitte gebt uns bis zum …. 18. September Bescheid, ob ihr kommen könnt.</p>
                    <form className={style.rsvpForm} onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className={style.inputPill}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <h4 className={style.h4Div}>ICH BIN DABEI!</h4>
                        <div className={style.formDiv}>
                            <div>
                                <input
                                    type="checkbox"
                                    className={style.cbRound}
                                    checked={rsvp}
                                    onChange={(e) => setRsvp(e.target.checked)}
                                />
                                <span className={style.formSpan}> Ja, na klar! </span>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    className={style.cbRound}
                                    checked={!rsvp}
                                    onChange={(e) => setRsvp(!e.target.checked)}
                                />
                                <span className={style.formSpan}> Leider nein </span>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    className={style.cbRound}
                                    checked={plusOne}
                                    onChange={(e) => setPlusOne(e.target.checked)}
                                />
                                <span className={style.formSpan}> Plus 1</span>
                            </div>
                        </div>
                          <div className={style.formMenuDiv}>
                            <div className={style.soyPlusDiv}>
                                <div>
                                    <h5 className={style.h5Div}>ICH BIN ...</h5>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className={style.cbRound}
                                            checked={vegan}
                                            onChange={(e) => setVegan(e.target.checked)}
                                        />
                                        <span className={style.formSpan}> Vegan</span>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className={style.cbRound}
                                            checked={vegetarian}
                                            onChange={(e) => setVegetarian(e.target.checked)}
                                        />
                                        <span className={style.formSpan}> Vegetarisch</span>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className={style.cbRound}
                                            checked={vegetarian}
                                            onChange={(e) => setVegetarian(e.target.checked)}
                                        />
                                        <span className={style.formSpan}> Pesquetarier</span>

                                    </div>
                                </div>
                            </div>
                            <div className={style.plus1Div}>
                                <h5 className={style.h5Div}>Plus 1</h5>
                                <input
                                    type="checkbox"
                                    className={style.cbRound}
                                    checked={vegan}
                                    onChange={(e) => setVegan(e.target.checked)}
                                />
                                <span className={style.formSpan}> Vegan</span>
                                <br />
                                <input
                                    type="checkbox"
                                    className={style.cbRound}
                                    checked={vegetarian}
                                    onChange={(e) => setVegetarian(e.target.checked)}
                                />
                                <span className={style.formSpan}> Vegetarisch</span>
                                <br />
                                <input
                                    type="checkbox"
                                    className={style.cbRound}
                                    checked={vegetarian}
                                    onChange={(e) => setPescetarian(e.target.checked)}
                                />
                                <span className={style.formSpan}> Pesquetarier</span>
                            </div>
                        </div>
                        <div>
                            <h4 className={style.h4Div}>ALLERGIE</h4>
                            <input
                                type="text"
                                placeholder="Ich/plus 1 bin allergisch auf…"
                                className={style.inputPill}
                                value={alergies}
                                onChange={(e) => setAlergies(e.target.value)}
                            />
                        </div>
                    </form>
                    <button type="submit" className={style.smallButton} onClick={handleSubmit}>
                        SENDEN
                    </button>
                    <span className={style.formSpan}>Bitte vor dem Senden ausfüllen</span>
                    <img src={image} alt="spinningWorld" className={style.imgWorld} />
                </div>
            </div>
        </>
    );
}