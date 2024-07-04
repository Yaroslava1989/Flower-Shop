import React, {useState} from "react";
import s from "./Sale.module.css";


const Sale= React.memo(props => {
    console.log("Sale props:", props);
    const [saleItem, setSaleItem] = useState(null)

    let cardsElements = [...props.cards] // обязательно! делаем копию массива исходных данных
        .map(p => <SaleCard id={p.id} status={p.status} title={p.title} imgSrc={p.imgSrc}
                            datePublication={p.datePublication} promotionEndDate={p.promotionEndDate}
                            promotionStartDate={p.promotionStartDate}
                            setSaleItemOnClick={setSaleItemOnClick}
                             />)

    function setSaleItemOnClick (id, status, title, imgSrc, datePublication, promotionEndDate, description) {
        setSaleItem(<SaleItem id={id} status={status} title={title} imgSrc={imgSrc} datePublication={datePublication}
                              promotionEndDate={promotionEndDate}/>)
    }

    if (saleItem) {
        return (
            <div>
                {saleItem}
            </div>
        )
    } else {
    return (<div className={s.saleContent}>
            <div className={s.background}></div>
            <h1>АКЦІЇ</h1>
            <div className={s.cardContent}>
                {cardsElements}
            </div>
            <h6>-</h6>
        </div>
    )
    }
})

export default Sale;



const SaleCard = (props) => {
    console.log("SaleCard:", props);
    function handleClick (id, status, title, imgSrc, datePublication, promotionEndDate, description){
        return props.setSaleItemOnClick(id, status, title, imgSrc, datePublication, promotionEndDate, description)
    }

    return (
        <div className={s.saleCard}>
            <div className={s.cardImg}>
                <img src={props.imgSrc} alt="квіти"/>
            </div>
            <span className="s.cardNotice" onClick={() => handleClick(props.id, props.status, props.title, props.imgSrc,
                props.datePublication, props.promotionEndDate, props.description)}>{props.title}</span>
            <h6 className={s.cardNoticeDate}>{props.datePublication}</h6>
            <p className={s.cardStatus}>{props.status}</p>
        </div>
    )
}

const SaleItem = (props) => {
    console.log("SaleItem: ", props)
    const [descriptionItem, setDescriptionItem] = useState(null)

    if (!descriptionItem) {
    switch (props.id) {
        case 1: setDescriptionItem(
            <div className={s.description}>
                <p>Акції на троянди власного вирощування Гран Прі, Марічка і Сноу Ворлд* з 9 до 22 квітня 2024 р.</p>
                <p>Червона троянда Марічка:<br/>висота 80 см - 45 грн,<br/>висота 90 см - 52 грн</p>
                <p>Ціни на букети із троянд Марічка з оформленням атласною стрічкою:</p>
                <p>19 троянд:<br/>
                    висота 80 см - 969 грн,<br/>
                    висота 90 см - 1109 грн.<br/>
                    25 троянд:<br/>
                    висота 80 см - 1275 грн,<br/>
                    висота 90 см - 1469 грн.<br/>
                    51 троянда:<br/>
                    висота 80 см - 2569 грн,<br/>
                    висота 90 см - 2959 грн</p>
                <p>Оксамитова троянда Гран Прі:</p>
                <p> висота 70 см - 43 грн,<br/>
                    висота 80 см - 46 грн.</p>
                <p>Ціни на букети із троянд Гран Прі з оформленням атласною стрічкою:</p>
                    <p>19 троянд:<br/>
                    висота 70 см - 929 грн,<br/>
                    висота 80 см - 989 грн.<br/>
                    25 троянд:<br/>
                    висота 70 см - 1219 грн,<br/>
                    висота 80 см - 1305 грн.<br/>
                    51 троянда:<br/>
                    висота 70 см - 2459 грн,<br/>
                    висота 80 см - 2629 грн.</p>
                <p>Білі піоноподібні троянди Сноу Ворлд:</p>
                <p> висота 60 см - 95 грн,<br/>
                    висота 70 см - 105 грн,<br/>
                    висота 60 см - 110 грн.<br/>
                    Ціни на букети із троянд Сноу Ворлд з оформленням в обгортку:<br/>
                    9 троянд<br/>
                    висота 60 см - 1029 грн, висота 70 см - 1129 грн, висота 80 см - 1179 грн.<br/>
                    15 троянд<br/>
                    висота 60 см - 1675 грн, висота 70 см - 1839 грн, висота 80 см - 1925 грн.<br/>
                    19 троянд<br/>
                    висота 60 см - 2125 грн, висота 70 см - 2329 грн, висота 80 см - 2439 грн.<br/></p>
                    <p>*На акційні позиції додаткові знижки не розповсюджуються.</p>

                <h3>.</h3>
            </div>
        )
        break;
    case 2: setDescriptionItem(
        <div className={s.description}>
            <p>Акції на троянди власного вирощування Піч Аваланч і Сноу Ворлд* з 13 до 22 січня 2024 р.</p>
            <p>Персикова троянда Піч Аваланч:</p>
            <p>висота 60 см - 42 грн,<br/>
               висота 70 см - 46 грн.</p>

            <p>Ціни на букети із троянд Піч Аваланч з оформленням в обгортку:</p>
            <p>19 троянд:<br/>
            висота 60 см - 999 грн,<br/> висота 70 см - 1080 грн.</p>
            <p>25 троянд:<br/>
                висота 60 см - 1249 грн,<br/> висота 70 см - 1385 грн.</p>
            <p>51 троянда:<br/>
                висота 60 см - 2499 грн,<br/> висота 70 см - 2769 грн.</p>
            <p>Біла піоноподібна троянда Сноу Ворлд:</p>
            <p>висота 60 см - 155 грн,<br/>
            висота 70 см - 160 грн.</p>
            <p>Ціни на букети із троянд Сноу Ворлд з оформленням в обгортку:</p>
            <p>9 троянд: <br/>
            висота 60 см - 1649 грн,<br/> висота 70 см - 1699 грн.</p>
            <p>15 троянд:<br/>
            висота 60 см - 2699 грн,<br/> висота 70 см - 2790 грн.</p>
            <p>19 троянд:<br/>
            висота 60 см - 3429 грн,<br/> висота 70 см - 3529 грн.</p>
            <p>*На акційні позиції додаткові знижки не розповсюджуються.</p>
            <h3>.</h3>
        </div>
    )
        break;
    case 3:
        setDescriptionItem(
            <div className={s.description}>
                <p>Акції на троянди власного вирощування Піч Аваланч і Сноу Ворлд* з 13 до 22 січня 2024 р.</p>
                <p>Персикова троянда Піч Аваланч:</p>
                <p>висота 60 см - 42 грн,<br/>
                    висота 70 см - 46 грн.</p>
                <p>Ціни на букети із троянд Піч Аваланч з оформленням в обгортку:</p>
                <p>19 троянд:<br/>
                    висота 60 см - 999 грн,<br/> висота 70 см - 1080 грн.</p>
                <p>25 троянд:<br/>
                    висота 60 см - 1249 грн,<br/> висота 70 см - 1385 грн.</p>
                <p>51 троянда:<br/>
                    висота 60 см - 2499 грн,<br/> висота 70 см - 2769 грн.</p>
                <p>Біла піоноподібна троянда Сноу Ворлд:</p>
                <p>висота 60 см - 155 грн,<br/>
                    висота 70 см - 160 грн.</p>
                <p>Ціни на букети із троянд Сноу Ворлд з оформленням в обгортку:</p>
                <p>9 троянд: <br/>
                    висота 60 см - 1649 грн,<br/> висота 70 см - 1699 грн.</p>
                <p>15 троянд:<br/>
                    висота 60 см - 2699 грн,<br/> висота 70 см - 2790 грн.</p>
                <p>19 троянд:<br/>
                    висота 60 см - 3429 грн,<br/> висота 70 см - 3529 грн.</p>
                <p>*На акційні позиції додаткові знижки не розповсюджуються.</p>
                <h3>.</h3>
            </div>
        )
        break;
        default:
            return <p>Упс... Щось пішло не так...</p>
    }
    }


return (
    <div className={s.saleContent}>
        <div className={s.background}></div>
        <h1>{props.title}</h1>
        <h3>З {props.datePublication} до {props.promotionEndDate}</h3>
        {props.status
            ? <h3>Акція триває...</h3>
            : <h3>Акцію завершено...</h3>}
        {descriptionItem}

    </div>
)
}