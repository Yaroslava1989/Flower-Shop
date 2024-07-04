import React from "react";
import s from "./Footer.module.css"
import {FormattedDate, FormattedMessage} from "react-intl";

function Footer(props) {
    return (
        <footer className={s.foot}>
            <a href="shopmap">
                <span className="material-symbols-outlined">
                    <FormattedMessage id="footer.contacts" defaultMessage="Контакти"/>
            </span></a>
            <a href="https://www.instagram.com/kamelia_official_/?hl=uk">
                <span className="material-symbols-outlined">
                     <FormattedMessage id="footer.socialNetworks" defaultMessage="Наші соцмережі"/>
                </span></a>
            <FormattedDate value={props.date}
                           year = 'numeric'
                           month='long'
                           day = 'numeric'
                           weekday='long' />
        </footer>
    )
}

export default Footer;
