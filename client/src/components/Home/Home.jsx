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
        </>
    )
}

export default Home;