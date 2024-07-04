import React from "react";
import s from "../event/Event.module.css";
import Flora from "./Flora";

const Event = React.memo(props => {

    function handleClick(i) {

        switch (i) {
            case 1:
                return props.setToggleRose();

            case 2:
                return props.setToggleSpring();

            case 3:
                return props.setToggleSummer();

            case 4:
                return props.setToggleWinter();

            case 5:
                return props.setToggleAutumn();
        }
    }

        if (props.isInitial) {
            return (
            <Flora initialTitle={props.initialTitle} initialCards={props.initialCards}
                   roseCards={props.roseCards} springCards={props.springCards}
                   summerCards={props.summerCards} winterCards={props.winterCards}
                   autumnCards={props.autumnCards}/>


        )
        } else {
            return (
                <div className={s.saleContent}>
                    <div className={s.background}></div>
                    <h1>ПОДІЙНА ФЛОРІСТИКА</h1>
                    <div className={s.cardContent}>

                        <div className={s.saleCard}>
                            <span className="s.cardNotice" onClick={() => handleClick(1)}>Букети із троянд</span>
                            <div className={s.cardImg}>
                                <img
                                    src="https://camellia.ua/upload/kamelia_flora/photos/d6/32/545x545/ccc92332_617856accd1cd.jpeg"
                                    alt="квіти"/>
                            </div>
                        </div>

                        <div className={s.saleCard}>
                        <span className="s.cardNotice"
                              onClick={() => handleClick(2)}>Весняні букети та композиції</span>
                            <div className={s.cardImg}>
                                <img
                                    src="https://camellia.ua/upload/kamelia_flora/photos/07/a6/545x545/b254f5ac_5e5ebe453c007.JPG"
                                    alt="квіти"/>
                            </div>
                        </div>

                        <div className={s.saleCard}>
                            <span className="s.cardNotice" onClick={() => handleClick(3)}>Літні букети</span>
                            <div className={s.cardImg}>
                                <img
                                    src="https://camellia.ua/upload/kamelia_flora/photos/cc/ea/545x545/1ebbb47e_5f8ca46d53b7d.jpeg"
                                    alt="квіти"/>
                            </div>
                        </div>

                        <div className={s.saleCard}>
                            <span className="s.cardNotice" onClick={() => handleClick(4)}>Зимова флорістика</span>
                            <div className={s.cardImg}>
                                <img
                                    src="https://camellia.ua/upload/kamelia_flora/photos/16/fa/545x545/7b05dbd3_5f8c49c01b85c.jpeg"
                                    alt="квіти"/>
                            </div>
                        </div>

                        <div className={s.saleCard}>
                            <span className="s.cardNotice" onClick={() => handleClick(5)}>Осінні букети</span>
                            <div className={s.cardImg}>
                                <img
                                    src="https://camellia.ua/upload/kamelia_flora/photos/ba/61/545x545/36980754_5f8c234e79588.jpeg"
                                    alt="квіти"/>
                            </div>
                        </div>

                    </div>
                    <h6>-</h6>
                </div>
            )
        }
}
)
export default Event;