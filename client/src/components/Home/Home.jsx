import style from './Home.module.css';
import image from '../../assets/heliki.gif';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

const Home = () => {
    return(
        <>
        <div className={style.imgDiv}>
            <p className={style.pImgDiv} >BS.AS</p>
            <img className={style.imgHeliki} src={image} alt='heliki gif' />
            <p className={style.pImgDiv}>KÖLN</p>
        </div>
        <div>
            <p className={style.pDownDiv}>
                <i class="fa-solid fa-caret-down"></i>
                <i class="fa-solid fa-caret-down"></i>
                <i class="fa-solid fa-caret-down"></i>
            </p>
        </div>
        <div className={style.wellcomeDiv}>
            <h2 className={style.h2Div}>SHARE <br/>LOVE</h2>
            <p className={style.pWellcomeDiv}>Hola! Estamos muy felices de encontrarnos en Buenos Aires para festejar nuestro casamiento.
                <br/>¡Gracias por venir!
                <br/>Heli & Kiki
            </p>
        </div>
        <div className={style.eventsDiv}>
            <h3 className={style.h3Div}>CEREMONIA</h3>
            <p  className={style.pEventsDiv}>Sábado <br/> 18.11.2023 <br/><br/>19:00 h <br/><br/>Iglesia So-Mang <br/>(Morón 3744, Flores, CABA)</p>
            <Link to='https://goo.gl/maps/BXHWCvkLRu8VpnDf9'>
                <button className={style.smallButton}>GOOGLE MAPS</button>
            </Link>
        </div>
        <div className={style.eventsDiv}>
            <h3 className={style.h3Div}>FIESTA</h3>
            <p  className={style.pEventsDiv}>Sábado <br/> 18.11.2023 <br/><br/>21:00 h <br/><br/>Lowlands <br/>(Blanco Encalada 1201,<br/> Belgrano, CABA)</p>
            <Link to='https://goo.gl/maps/XbMraPt6wvK125gz8'>
                <button className={style.smallButton}><i class="fa-solid fa-map-location-dot fa-xl"></i></button>
            </Link>
        </div>
        <div>
            <Form/>
        </div>
        </>
    )
}

export default Home;