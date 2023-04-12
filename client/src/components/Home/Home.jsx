import style from './Home.module.css';
import image from '../../assets/heliki.gif';

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
        <div className={style.ceremonyDiv}>
            <h3 className={style.h3Div}>CEREMONIA</h3>
            <p  className={style.pCeremonyDiv}>Sábado <br/> 18.11.2023 <br/><br/>19:00 h <br/><br/>Iglesia So-Mang <br/>(Morón 3744, Flores. CABA)</p>
            <button className={style.smallButton}>GOOGLE MAPS</button>
        </div>
        </>
    )
}

export default Home;