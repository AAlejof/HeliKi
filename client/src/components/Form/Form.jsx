// import style from './Form.module.css';
// import image from '../../assets/spinningWorld.gif';
// import React, { useState } from 'react';
// //import { useDispatch, useSelector } from 'react-redux';
// //import {} from '../../redux/actions/actions';
// //import Validate from './Validations';
// //import swal from 'sweetalert';
// //import { useNavigate, Link } from 'react-router-dom';


// export default function Form() {

//     const handleSubmit = async () => {

//     }

//     return(
//         <>
//             <div>
//                 <div className={style.rsvpDiv}>
//                     <h3 className={style.h3Div}>RSVP</h3>
//                     <form className={style.rsvpForm} onSubmit={(e) => handleSubmit(e)}>
//                         <div>
//                             <input type="text" Placeholder='Nombre/s' className={style.inputPill}/>
//                         </div>
//                             <h4  className={style.h4Div}>ASISTENCIA</h4>
//                         <div className={style.formDiv}>
//                             <input type="checkbox" className={style.cbRound}/><span className={style.formSpan}> Sí, obvio! </span>
//                             <input type="checkbox" className={style.cbRound}/> <span className={style.formSpan}> Plus 1</span>
//                             <br/>
//                             <input type="checkbox" className={style.cbRound}/><span className={style.formSpan}> No, perdón! </span>
//                         </div>
//                             <h4  className={style.h4Div}>MENÚ</h4>
//                         <div className={style.formDiv}>
//                             <input type="checkbox" className={style.cbRound}/> <span className={style.formSpan}> Veganx</span>
//                             <br/>
//                             <input type="checkbox" className={style.cbRound}/><span className={style.formSpan}> Vegetarianx</span>
//                         </div>
//                     </form>
//                     <button className={style.smallButton}>ENVIAR</button>
//                     <img src={image} alt="spinningWorld" className={style.imgWorld}/>
//                 </div>
//             </div>
//         </>
//     )

// };

import React, { useState } from 'react';
import style from './Form.module.css';
import image from '../../assets/spinningWorld.gif';

export default function Form() {
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
          <p className={style.pPlease} >Por favor, <br /> completar y enviar.</p>
          <form className={style.rsvpForm} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Nombre/s"
                className={style.inputPill}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <h4 className={style.h4Div}>ASISTENCIA</h4>
            <div className={style.formDiv}>
              <div>
                <input
                  type="checkbox"
                  className={style.cbRound}
                  checked={rsvp}
                  onChange={(e) => setRsvp(e.target.checked)}
                />
                <span className={style.formSpan}> Sí, obvio! </span>
              </div>
              <div>
              <input
                type="checkbox"
                className={style.cbRound}
                checked={!rsvp}
                onChange={(e) => setRsvp(!e.target.checked)}
              />
              <span className={style.formSpan}> No, perdón! </span>
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
            <h4 className={style.h4Div}>MENÚ</h4>
            <div className={style.formMenuDiv}>
              <div className={style.soyPlusDiv}>
                <div>
                  <h5 className={style.h5Div}>Soy...</h5>
                  <div>
                    <input
                      type="checkbox"
                      className={style.cbRound}
                      checked={vegan}
                      onChange={(e) => setVegan(e.target.checked)}
                    />
                    <span className={style.formSpan}> Veganx</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className={style.cbRound}
                      checked={vegetarian}
                      onChange={(e) => setVegetarian(e.target.checked)}
                    />
                    <span className={style.formSpan}> Vegetarianx</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className={style.cbRound}
                      checked={vegetarian}
                      onChange={(e) => setVegetarian(e.target.checked)}
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
                  checked={vegan}
                  onChange={(e) => setVegan(e.target.checked)}
                />
                <span className={style.formSpan}> Veganx</span>
                <br />
                <input
                  type="checkbox"
                  className={style.cbRound}
                  checked={vegetarian}
                  onChange={(e) => setVegetarian(e.target.checked)}
                />
                <span className={style.formSpan}> Vegetarianx</span>
                <br />
                <input
                  type="checkbox"
                  className={style.cbRound}
                  checked={vegetarian}
                  onChange={(e) => setVegetarian(e.target.checked)}
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
                value={alergies}
                onChange={(e) => setAlergies(e.target.value)}
              />
            </div>
          </form>
          <button type="submit" className={style.smallButton} onClick={handleSubmit}>
            ENVIAR
          </button>
          <img src={image} alt="spinningWorld" className={style.imgWorld} />
        </div>
      </div>
    </>
  );
}