import React from "react";
import s from "./Content.module.css";
import {FormattedMessage} from "react-intl";


function Content() {
    return (
        <div className={s.content}>
            <div className={s.background}></div>
            <div className={s.contentImg}>

            </div>
            <div className={s.contentText}>
                <h1><FormattedMessage id="content.textseason" defaultMessage="СЕЗОН ПІОНІВ"/></h1>
                <h3><FormattedMessage id="content.textshops" defaultMessage="у всіх магазинах"/></h3>
                <h3><FormattedMessage id="content.textshops2" defaultMessage="селективні голландські сорти"/></h3>
            </div>
        </div>
    )
}

export default Content;