import s from "./Flora.module.css";
import React, {useState} from "react";
import FloraCards from "./FloraCards";
import Galery from "../galery/Galery";


const Flora = React.memo(props => {
    const [title, setTitle] = useState(props.initialTitle)
    const [cardsElements, setCardsElements] = useState([...props.initialCards].map(p =>
        <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title} url={p.imgSrc}
                    description={p.description} setGaleryOnClick={setGaleryOnClick}/>
    ))
    const [galeryItem, setGaleryItem] = useState(null)
    console.log("Flora props", props);


    function setGaleryOnClick(id, imgSrc, title, description, url) {
        setGaleryItem(<Galery id={id} imgSrc={imgSrc} title={title}
                              description={description} url={url}/>)
    }

    function handleClick(i) {
        switch (i) {
            case 6:
                setCardsElements([...props.roseCards]
                    .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                          url={p.imgSrc} description={p.description}
                                          setGaleryOnClick={setGaleryOnClick}/>));
                setTitle("Букети із троянд");
                break;

            case 7:
                setCardsElements([...props.springCards]
                    .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                          url={p.imgSrc}
                                          description={p.description} setGaleryOnClick={setGaleryOnClick}/>));
                setTitle("Весняні букети та композиції");
                break;

            case 8:
                setCardsElements([...props.summerCards]
                    .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                          url={p.imgSrc}
                                          description={p.description} setGaleryOnClick={setGaleryOnClick}/>));
                setTitle("Літні букети");
                break;
            case 9:
                setCardsElements([...props.winterCards]
                    .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                          url={p.imgSrc}
                                          description={p.description} setGaleryOnClick={setGaleryOnClick}/>));
                setTitle("Зимова флористика");
                break;
            case 10:
                setCardsElements([...props.autumnCards]
                    .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                          url={p.imgSrc}
                                          description={p.description} setGaleryOnClick={setGaleryOnClick}/>))
                setTitle("Осінні букети");
                break;
            default:
                return ;
        }
    }


    if (galeryItem) {
        return (
            <div>
                {galeryItem}
            </div>
        )
    } else {
        return ( <div className={s.saleContent}>
                <div className={s.background}></div>
                <h1>{title}</h1>
                <div className={s.floraButton}>
                    <button type="button" onClick={() => handleClick(6)}>Букети із троянд</button>
                    <button type="button" onClick={() => handleClick(7)}>Весняні букети та композиції</button>
                    <button type="button" onClick={() => handleClick(8)}>Літні букети</button>
                    <button type="button" onClick={() => handleClick(9)}>Зимова флористика</button>
                    <button type="button" onClick={() => handleClick(10)}>Осінні букети</button>
                </div>
                <div className={s.cardContent}>
                    {cardsElements}
                </div>
                <h6>-</h6>
            </div>
        )
    }
})


export default Flora;