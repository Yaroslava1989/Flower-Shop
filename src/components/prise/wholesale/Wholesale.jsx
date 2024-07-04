import React from "react";
import s from "./Wholesale.module.css";


function Wholesale (props) {

    return <div className={s.content}>
        <div className={s.background}></div>
        <div className={s.contentLoadFile}>

                <span>Завантажити роздрібні ціни</span>

        </div>
        <div className={s.contentText}>
            <h1>ПРАЙС РОЗДРІБНІ ЦІНИ</h1>
            <div className={s.contentTextOption}>
                Вартість оформлення букета: ціна за квіти + послуга флориста 10% від вартості квітів
                (зачистка від колючок, формування букету по техніці спіралі, оформлення натуральною стрічкою).
                Додаткове пакування (атласна стрічка, папір, калька) від 50 грн.
            </div>
            <div className={s.contentTextOption}>
                Ціна вказана в гривнях за 1 шт з урахуванням ПДВ, при купівлі до 500 шт і може змінюватись.
                Деталі уточнюйте в магазинах.
            </div>
        </div>
        <div className={s.contentTable}>
            <table>
                <tr className={s.TabHead}>
                    <th>Висота</th>
                    <th>50 см</th>
                    <th>60 см</th>
                    <th>70 см</th>
                    <th>80 см</th>
                    <th>90 см</th>
                    <th>100 см</th>
                    <th>110 см</th>
                </tr>
                <PriseTableRow name="Аваланч" p50="55.0" p60="65.0" p70="78.0" p80="82.0" p90="88.0"
                               p100="0" p110="0"/>
                <PriseTableRow name="Іванна" p50="58.0" p60="70.0" p70="80.0" p80="90.0" p90="95.0"
                               p100="0" p110="0"/>
                <PriseTableRow name="Піч Аваланч" p50="50.0" p60="66.0" p70="72.0" p80="78.0" p90="0"
                               p100="0" p110="0"/>
                <PriseTableRow name="Аріана" p50="35.0" p60="48.0" p70="60.0" p80="65.0" p90="70.0"
                               p100="0" p110="0"/>
                <PriseTableRow name="Софі Лорен" p50="63.0" p60="70.0" p70="76.0" p80="84.0" p90="90.0"
                               p100="95.0" p110="0"/>
                <PriseTableRow name="Джумілія" p50="50.0" p60="65.0" p70="75.0" p80="82.0" p90="88.0"
                               p100="92.0" p110="0"/>
                <PriseTableRow name="Гран Прі" p50="50.0" p60="66.0" p70="69.0" p80="79.0" p90="87.0"
                               p100="96.0" p110="0"/>
                <PriseTableRow name="Марічка" p50="56.0" p60="62.0" p70="66.0" p80="70.0" p90="76.0"
                               p100="80.0" p110="85.0"/>
                <PriseTableRow name="Пенні Лейн" p50="45.0" p60="54.0" p70="65.0" p80="72.0" p90="77.0"
                               p100="85.0" p110="0"/>
                <PriseTableRow name="Гуд Муд спрей" p50="130.0" p60="140.0" p70="145.0" p80="150.0" p90="155.0"
                               p100="160.0" p110="0"/>
                <PriseTableRow name="Софі спрей" p50="90.0" p60="95.0" p70="115.0" p80="120.0" p90="125.0"
                               p100="130.0" p110="0"/>
                <PriseTableRow name="Сноу Ворлд спрей" p50="130.0" p60="140.0" p70="155.0" p80="180.0" p90="190.0"
                               p100="200.0" p110="0"/>
                <PriseTableRow name="Олена спрей" p50="85.0" p60="88.0" p70="100.0" p80="103.0" p90="106.0"
                               p100="108.0" p110="0"/>
                <PriseTableRow name="Грація спрей" p50="75.0" p60="80.0" p70="83.0" p80="86.0" p90="88.0"
                               p100="90.0" p110="0"/>
                <PriseTableRow name="Пінк Ванесса спрей" p50="65.0" p60="80.0" p70="85.0" p80="88.0" p90="90.0"
                               p100="92.0" p110="0"/>
                <PriseTableRow name="Місті Бабблз спрей" p50="155.0" p60="175.0" p70="185.0" p80="195.0" p90="200.0"
                               p100="205.0" p110="0"/>
                <PriseTableRow name="Річ Бабблз спрей" p50="120.0" p60="150.0" p70="165.0" p80="170.0" p90="175.0"
                               p100="180.0" p110="0"/>
                <PriseTableRow name="Лавандер Бабблз спрей" p50="137.0" p60="168.0" p70="175.0" p80="180.0" p90="0"
                               p100="0" p110="0"/>
                <PriseTableRow name="Ред Ванесса спрей" p50="75.0" p60="82.0" p70="86.0" p80="89.0" p90="92.0"
                               p100="95.0" p110="0"/>
                <PriseTableRow name="Черрі Трендсеттер спрей" p50="140.0" p60="157.0" p70="160.0" p80="164.0"
                               p90="168.0"
                               p100="170.0" p110="0"/>
                <PriseTableRow name="Ванесса спрей" p50="85.0" p60="90.0" p70="95.0" p80="98.0" p90="100.0"
                               p100="102.0" p110="0"/>
                <PriseTableRow name="Саммер Денс спрей" p50="70.0" p60="82.0" p70="85.0" p80="88.0" p90="90.0"
                               p100="92.0" p110="0"/>
            </table>

        </div>
    </div>

}

export default Wholesale;

function PriseTableRow (props) {
    return <tr>
        <td className={s.itemName}>
            <div>{props.name}</div>
        </td>
        <td>{props.p50}</td>
        <td>{props.p60}</td>
        <td>{props.p70}</td>
        <td>{props.p80}</td>
        <td>{props.p90}</td>
        <td>{props.p100}</td>
        <td>{props.p110}</td>
    </tr>
}