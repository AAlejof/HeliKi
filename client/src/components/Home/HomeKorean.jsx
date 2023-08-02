import style from './Home.module.css';
import image from '../../assets/heliki.gif';
import { Link } from 'react-router-dom';
import FormKorean from '../Form/FormKorean';

const Home = () => {
    return (
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
                <h2 className={style.h2Div}>SHARE <br />LOVE</h2>
                <p className={style.pWellcomeDiv}>안녕하세요!
                    <br />우리 두 사람의 한 인연으로
                    소중한 분들 앞에 부에노스아이레스에서 새로운 약속을 하고자 합니다.
                    <br />오셔서 자리 빛내 주시면 감사하겠습니다.
                    <br />Heli & Kiki :)
                </p>
            </div>
            <div className={style.eventsDiv}>
                <h3 className={style.h3Div}>장소</h3>
                <p className={style.pEventsDiv}>토요일 <br /> 18.11.2023 <br /><br />17:00 h <br /><br />소망교회 <br />(Morón 3744, Flores, CABA)</p>
                <Link to='https://goo.gl/maps/BXHWCvkLRu8VpnDf9' target="_blank">
                    <button className={style.smallButton}><i class="fa-solid fa-map-location-dot fa-xl"></i></button>
                </Link>
            </div>
            <div className={style.eventsDiv}>
                <h3 className={style.h3Div}>파티</h3>
                <p className={style.pEventsDiv}>토요일 <br /> 18.11.2023 <br /><br />19:00 h <br /><br />Lowlands <br />(Blanco Encalada 1201,<br /> Belgrano, CABA)</p>
                <Link to='https://goo.gl/maps/XbMraPt6wvK125gz8' target="_blank">
                    <button className={style.smallButton}><i class="fa-solid fa-map-location-dot fa-xl"></i></button>
                </Link>
            </div>
            <div className={style.eventsDiv}>
                <FormKorean/>
            </div>
        </>
    )
}

export default Home;