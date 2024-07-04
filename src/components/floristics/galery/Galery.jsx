import React, {useState} from "react";
import {GrNext, GrPrevious} from "react-icons/gr";
import g from "./Galery.module.css";

const Galery = (props)  =>{
    console.log("Galery.props:", props)
    const url = props.url;
    const length = (url.length) - 1;
    const [index, setIndex] = useState(0)
    const handlePrev = () => {
        index === 0 ? setIndex(length) : setIndex(index-1)
    }
    const handleNext = () => {
        index === length ? setIndex(0) : setIndex(index+1)
    }
    return (
        <div className={g.saleContent}>
            <div className={g.background}></div>
            <div className={g.container}>
                <div className={g.imageContainer}>
                    <GrPrevious className={g.icons} onClick={handlePrev}/>
                    <img src={url[index]} alt="s"/>
                    <GrNext strokeWidth={'3em'} className={g.icons} onClick={handleNext}/>
                </div>
                <div className="g.bars">
                    {url.map((url, i) => (<div onClick={() => {
                            setIndex(i)
                        }} key={i} className={`g.bar ${index === i ? 'g.barWhite' : ''}`}></div>
                    ))}
                </div>
            </div>
            <div className={g.textContent}>
                <h3>{props.title}</h3>
                <span>Склад: </span>
                <span>{props.description}</span>
            </div>
        </div>

    )
}


export default Galery;