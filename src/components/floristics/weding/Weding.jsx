import React from "react";
import Flora from "../event/Flora";
import s from "../event/Event.module.css";
import WeddingFlora from "./WeddingFlora";


const Weding = React.memo(props => {

    function handleClick(i) {

        switch (i) {
            case 1:
                return props.setTogglebrideBouquete();

            case 2:
                return props.setToggleBoutonniere();

            case 3:
                return props.setToggleDecoration();

            case 4:
                return props.setToggleCeremony();

            case 5:
                return props.setToggleWeddingArch();
        }
    }

    if (props.isInitial) {
        return (
            <WeddingFlora initialTitle={props.initialTitle} initialCards={props.initialCards}
                   brideBouquete={props.brideBouquete} boutonniere={props.boutonniere}
                   decoration={props.decoration} ceremony={props.ceremony}
                   weddingArch={props.weddingArch} />
        )
    } else {
        return (
            <div className={s.saleContent}>
                <div className={s.background}></div>
                <h1>ВЕСІЛЬНА ФЛОРИСТИКА</h1>
                <div className={s.cardContent}>

                    <div className={s.saleCard}>
                        <span className="s.cardNotice" onClick={() => handleClick(1)}>Букети нареченої</span>
                        <div className={s.cardImg}>
                            <img
                                src="https://camellia.ua/upload/kamelia_flora/photos/a3/9a/545x545/236bdb85_571745b59a76b.jpg"
                                alt="квіти"/>
                        </div>
                    </div>

                    <div className={s.saleCard}>
                        <span className="s.cardNotice"
                              onClick={() => handleClick(2)}>Бутоньєрки</span>
                        <div className={s.cardImg}>
                            <img
                                src="https://camellia.ua/upload/kamelia_flora/photos/9f/b9/545x545/60693092_5731a0e6372a0.JPG"
                                alt="квіти"/>
                        </div>
                    </div>

                    <div className={s.saleCard}>
                        <span className="s.cardNotice" onClick={() => handleClick(3)}>Оформлення залу та столів</span>
                        <div className={s.cardImg}>
                            <img
                                src="https://camellia.ua/upload/kamelia_flora/photos/fe/83/545x545/9931f497_57fa27bdcf3f1.jpg"
                                alt="квіти"/>
                        </div>
                    </div>

                    <div className={s.saleCard}>
                        <span className="s.cardNotice" onClick={() => handleClick(4)}>Виїзна церемонія</span>
                        <div className={s.cardImg}>
                            <img
                                src="https://camellia.ua/upload/kamelia_flora/photos/ff/c3/545x545/e5ae7691_573b1744d3423.jpg"
                                alt="квіти"/>
                        </div>
                    </div>

                    <div className={s.saleCard}>
                        <span className="s.cardNotice" onClick={() => handleClick(5)}>Весільні арки</span>
                        <div className={s.cardImg}>
                            <img
                                src="https://camellia.ua/upload/kamelia_flora/photos/56/dc/545x545/9e528b45_573c66bc864ce.jpg"
                                alt="квіти"/>
                        </div>
                    </div>

                </div>
                <h6>-</h6>
            </div>
        )
    }
})

export default Weding;