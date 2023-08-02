import style from './Home.module.css';
import image from '../../assets/heliki.gif';
import { Link } from 'react-router-dom';
import FormDeutsch from '../Form/FormDeutsch';

const HomeDeutsch = () => {
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
            <p className={style.pWellcomeDiv}>Hola! <br /> Hiermit laden wir euch ganz herzlich zu unserer Hochzeit in Buenos Aires ein.
                <br/>Wir freuen uns auf euch!
                <br/>Heli & Kiki
            </p>
        </div>
        <div className={style.eventsDiv}>
            <h3 className={style.h3Div}>TRAUUNG</h3>
            <p  className={style.pEventsDiv}>Samstag <br/> 18.11.2023 <br/><br/>17:00 Uhr <br/><br/>Iglesia So-Mang <br/>(Adresse: Morón 3744, Floresta, CABA)</p>
            <Link to='https://goo.gl/maps/BXHWCvkLRu8VpnDf9' target="_blank">
                <button className={style.smallButton}><i class="fa-solid fa-map-location-dot fa-xl"></i></button>
            </Link>
        </div>
        <div className={style.eventsDiv}>
            <h3 className={style.h3Div}>FEIER</h3>
            <p  className={style.pEventsDiv}>Samstag <br/> 18.11.2023 <br/><br/>19:00 Uhr <br/><br/>Lowlands <br/>(Adresse: Blanco Encalada 1201,<br/> Belgrano, CABA)</p>
            <Link to='https://goo.gl/maps/XbMraPt6wvK125gz8' target="_blank">
                <button className={style.smallButton}><i class="fa-solid fa-map-location-dot fa-xl"></i></button>
            </Link>
        </div>
        <div className={style.eventsDiv}>
            <FormDeutsch/>
        </div>
        <div className={style.tipsDiv} >
            <Link to='/tips'>
                <button className={style.tipsButton}>UNSERE TIPPS <br /> FÜR ARGENTINIEN</button>
            </Link>
        </div>
        </>
    )
}

export default HomeDeutsch;