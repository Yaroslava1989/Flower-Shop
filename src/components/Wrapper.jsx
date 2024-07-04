import React, {useState} from "react";
import {IntlProvider} from "react-intl";
import Ukrainian from './../lang/uk.json';
import English from './../lang/en.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local==="en") {
    lang = English;
} else {
    if (local === "uk"){
        lang = Ukrainian;
    }
}

const Wrapper = (props) => {
    const [messages, setMessages] = useState(lang);
    const [locale, setLocale] = useState(local);


    function selectLanguage(newLocale) {
        setLocale(newLocale);
        if (newLocale === "en") {
            setMessages(English);
        } else  {
            if (newLocale === "uk") {
                setMessages(Ukrainian)
            }
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider locale={locale} messages={messages} >
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
}

export default Wrapper;