import s from "./Event.module.css";
import React from "react";

const FloraCards = (props) => {

    console.log("FloraCards.props", props)
    function handleClick(id, imgSrc, title, description, url) {
       return  props.setGaleryOnClick(id, imgSrc, title, description, url);
    }

        return (
            <div className={s.saleCard}>
                <div className={s.cardImg}>
                    <img src={props.imgSrc} alt="квіти"/>
                </div>
                <span className="s.cardNotice" onClick={() => handleClick(props.id, props.imgSrc, props.title,
                                                                          props.description, props.url)}>
                    {props.title}</span>
            </div>
        )

}


export default FloraCards;

