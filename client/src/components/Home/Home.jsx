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
        
        </>
    )
}

export default Home;