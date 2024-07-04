import imgLogo from "./../../images/green-leaves-in-a-swirl.jpg";
import React, {useContext} from "react";
import s from "./Header.module.css"
import {FormattedMessage} from "react-intl";
import {Context} from "../Wrapper";


function Header (props) {
    const context = useContext(Context);
    function handleClickUK() {
        const newLocale = "uk";
        context.selectLanguage(newLocale)
    }
    function handleClickEn() {
        const newLocale = "en";
        context.selectLanguage(newLocale)
    }
    return (
        <header>
            <nav>
                <img src={imgLogo}/>
                <div className={s.dropdown}>
                    <a href="content">
                    <span className="material-symbols-outlined">
                    <FormattedMessage id="header.logo" defaultMessage="Мої квіти"
                                      values={{
                                          privetUkr: "власність Я.Кондратенко",
                                          privetEn: "property of Y. Kondratenko"
                                      }}/>
                     </span></a>
                </div>
                    <ul className={s.links}>
                        <li>
                            <div className={s.dropdown}>
                                <a href="sale">
                                <span className="material-symbols-outlined">
                                    <FormattedMessage id="header.sale" defaultMessage="% Акції"/>
                                </span></a>
                            </div>
                        </li>
                        <li>
                            <div className={s.dropdown}>
                                <a >
                                <span className="material-symbols-outlined">
                                  <FormattedMessage id="header.price" defaultMessage="Прайс"/>
                                     </span></a>
                                <div className={s.menu}>
                                    <a href="retail">
                                        <FormattedMessage id="header.Wholesale" defaultMessage="ОПТОВІ ЦІНИ"/>
                                    </a>
                                    <a href="wholesale">
                                        <FormattedMessage id="header.retail" defaultMessage="РОЗДРІБНІ ЦІНИ"/>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={s.dropdown}>
                                <a href="#">
                                <span className="material-symbols-outlined">
                                   <FormattedMessage id="header.floristics" defaultMessage="Флорістика"/>
                                </span></a>
                                <div className={s.menu}>
                                    <a href="events">
                                        <FormattedMessage id="header.floristicsEvent" defaultMessage="ПОДІЙНА"/>
                                    </a>
                                    <a href="weding">
                                        <FormattedMessage id="header.floristicsWedding" defaultMessage="ВЕСІЛЬНА"/>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={s.dropdown}>

                                <a href="#">
                                <span className="material-symbols-outlined">
                                   <FormattedMessage id="header.aboutСompany" defaultMessage="Про компанію"/>
                                </span></a>
                                <div className={s.menu}>
                                    <a href="#">
                                        <FormattedMessage id="header.production" defaultMessage="ВИРОБНИЦТВО"/>
                                    </a>
                                    <a href="#">
                                        <FormattedMessage id="header.employment" defaultMessage="ВАКАНСІЇ"/>

                                    </a>
                                    <a href="#">
                                        <FormattedMessage id="header.news" defaultMessage="НОВИНИ"/>

                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`${s.dropdown} ${s.location}`}>
                                <a href="shopmap">
                                <span className="material-symbols-outlined">
                                    <FormattedMessage id="header.stores" defaultMessage="Наші магазини"/>
                                </span></a>
                            </div>
                        </li>
                    </ul>
                    <div className={s.local}>
                        <button type="button" onClick={handleClickUK}>Uk</button>
                        <button type="button" onClick={handleClickEn}>En</button>
                    </div>
            </nav>
        </header>
)
}

export default Header;