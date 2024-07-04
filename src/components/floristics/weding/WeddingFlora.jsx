import React, {useState} from "react";
import FloraCards from "../event/FloraCards";
import s from "../event/Flora.module.css";
import Galery from "../galery/Galery";


const WeddingFlora = React.memo(props => {
        const [title, setTitle] = useState(props.initialTitle)
        const [galeryItem, setGaleryItem] = useState(null)

        const [cardsElements, setCardsElements] = useState([...props.initialCards].map(p =>
            <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title} url={p.imgSrc}
                        description={p.description} setGaleryOnClick={setGaleryOnClick}/>
        ))

        function setGaleryOnClick(id, imgSrc, title, description, url) {
            setGaleryItem(<Galery id={id} imgSrc={imgSrc} title={title}
                                  description={description} url={url}/>)
        }

        console.log("WeddingFlora.props", props)

        function handleClick(i) {
            switch (i) {
                case 6:
                    setCardsElements([...props.brideBouquete]
                        .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                              url={p.imgSrc} description={p.description}
                                              setGaleryOnClick={setGaleryOnClick}/>));
                    setTitle("Букети нареченої");
                    break;

                case 7:
                    setCardsElements([...props.boutonniere]
                        .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                              url={p.imgSrc} description={p.description}
                                              setGaleryOnClick={setGaleryOnClick}/>));
                    setTitle("Бутоньєрки");
                    break;

                case 8:
                    setCardsElements([...props.decoration]
                        .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                              url={p.imgSrc} description={p.description}
                                              setGaleryOnClick={setGaleryOnClick}/>));
                    setTitle("Оформлення залу та столів");
                    break;
                case 9:
                    setCardsElements([...props.ceremony]
                        .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                              url={p.imgSrc} description={p.description}
                                              setGaleryOnClick={setGaleryOnClick}/>));
                    setTitle("Виїзна церемонія");
                    break;
                case 10:
                    setCardsElements([...props.weddingArch]
                        .map(p => <FloraCards key={p.id.toString()} id={p.id} imgSrc={p.imgSrc[0]} title={p.title}
                                              url={p.imgSrc} description={p.description}
                                              setGaleryOnClick={setGaleryOnClick}/>));
                    setTitle("Весільні арки");
                    break;
                default:
                    return;
            }
        }


        if (galeryItem) {
            return (
                <div>
                    {galeryItem}
                </div>
            )
        } else {
            return (
                <div className={s.saleContent}>
                    <div className={s.background}></div>
                    <h1>{title}</h1>
                    <div className={s.floraButton}>
                        <button type="button" onClick={() => handleClick(6)}>Букети нареченої</button>
                        <button type="button" onClick={() => handleClick(7)}>Бутоньєрки</button>
                        <button type="button" onClick={() => handleClick(8)}>Оформлення залу та столів</button>
                        <button type="button" onClick={() => handleClick(9)}>Виїзна церемонія</button>
                        <button type="button" onClick={() => handleClick(10)}>Весільні арки</button>
                    </div>
                    <div className={s.cardContent}>
                        {cardsElements}
                    </div>
                    <h6>-</h6>
                </div>
            )
        }
    }
)
export default WeddingFlora;