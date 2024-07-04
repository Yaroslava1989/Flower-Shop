import React, {useState} from "react";
import s from "./Shopmap.module.css";

function Shopmap(props) {

    const [iFrame, setIframe] = useState(<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5087.718575939764!2d30.384973047983078!3d50.387821587861495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdd00df82e31%3A0x5ea731755daa7b1b!2sKamelia%20Garden!5e0!3m2!1sen!2sua!4v1716815561398!5m2!1sen!2sua"
        width="800" height="600" allowFullScreen="" loading="lazy" title="kamelia_shops"
        referrerPolicy="no-referrer-when-downgrade"></iframe>)

    function handleclick(i) {
        switch (i) {
            case 1:
                return setIframe(<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.377041789911!2d30.47108347648889!3d50.48994007159973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cded9ad34941%3A0x7164de8a3cd09f06!2z0LLRg9C70LjRhtGPINCb0LjQstCw0YDRgdGM0LrQsCwgMtCQLCDQmtC40ZfQsiwgMDQwNzM!5e0!3m2!1suk!2sua!4v1718353166660!5m2!1suk!2sua"
                    width="800" height="600"  allowFullScreen="" loading="lazy" title="kamelia_shops"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>)
            case 2:
                return setIframe(<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.6153025385383!2d30.52183697648747!3d50.466887971595284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce3f06844c17%3A0x3648ae4187915e9a!2z0LLRg9C7LiDQndCw0LHQtdGA0LXQttC90L4t0KXRgNC10YnQsNGC0LjRhtGM0LrQsCwgMjUsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1718353372399!5m2!1suk!2sua"
                    width="800" height="600" allowFullScreen="" loading="lazy" title="kamelia_shops"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>)
            case 3:
                return setIframe(<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.5981542775703!2d30.470627676483115!3d50.392689171581175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8df22e2c001%3A0x1cd0e415d99886c7!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCc0LDQutGB0LjQvNC-0LLQuNGH0LAsIDI20LIsINCa0LjRl9CyLCAwMzAyMg!5e0!3m2!1suk!2sua!4v1718353479217!5m2!1suk!2sua"
                    width="800" height="600" allowFullScreen="" loading="lazy" title="kamelia_shops"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>)
            case 4:
                return setIframe(<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.888744839476!2d30.53271617648833!3d50.480414871597965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfda10996433%3A0xc58524b6a041ce1b!2z0LLRg9C70LjRhtGPINCd0LDQsdC10YDQtdC20L3Qvi3QoNC40LHQsNC70YzRgdGM0LrQsCwgOSwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1718353556737!5m2!1suk!2sua"
                    width="800" height="600" allowFullScreen="" loading="lazy" title="kamelia_shops"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>)
            case 5:
                return setIframe(<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.0630543367342!2d30.52915237648378!3d50.40266247158319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4f28f39571%3A0xd87ab9e565c28e5e!2z0KTQtdC-0LTQvtGB0ZbQudGB0YzQutC40Lkg0L_RgNC-0LLRg9C70L7QuiwgMTQsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1718353609374!5m2!1suk!2sua"
                    width="800" height="600" allowFullScreen="" loading="lazy" title="kamelia_shops"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>)

            case 6:
                return setIframe(<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.4733419410422!2d30.51554987648784!3d50.46953117159595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce15a8d73def%3A0xffa7ba353aac35fd!2z0LLRg9C70LjRhtGPINCS0LXRgNGF0L3RltC5INCS0LDQuywgNTQvMjMsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1718353652892!5m2!1suk!2sua"
                    width="800" height="600" allowFullScreen="" loading="lazy" title="kamelia_shops"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>)
            default:

        }
    }

    return (
        <div className={s.mapContent}>
            <div className={s.background}></div>
            <div className={s.google}>
                {iFrame}
            </div>
            <div>
                <h3>Адреса магазинів:</h3>
                <ul>
                    <li>
                        <span><b>м. Київ, вул. Ливарівська, 2-а</b></span><br/>
                        <span className={s.spanLink} onClick={() => handleclick(1)}>Подивитися на мапі</span>
                   </li>
                   <li>
                       <span><b>м. Київ, вул. Набережно-хрещатицька, 25</b></span><br/>
                       <span className={s.spanLink} onClick={() => handleclick(2)}>Подивитися на мапі</span>
                   </li>
                   <li>
                   <span><b>м. Київ, вул. Максимовича, 26-В (ЖК Нова Англия)</b></span><br/>
                       <span className={s.spanLink} onClick={() => handleclick(3)}>Подивитися на мапі</span>
                   </li>
                   <li>
                   <span><b>м. Київ, вул. Набережно-Рибальська, 9 (ЖК Рибальський)</b></span><br/>
                       <span className={s.spanLink} onClick={() => handleclick(4)}>Подивитися на мапі</span>
                   </li>
                   <li>
                       <span><b>м. Київ, провулок Феодосійський, 14</b></span><br/>
                       <span className={s.spanLink} onClick={() => handleclick(5)}>Подивитися на мапі</span>
                   </li>
                   <li>
                       <span><b>м. Київ, вул. Верхній Вал, 54/23</b></span><br/>
                       <span className={s.spanLink} onClick={() => handleclick(6)}>Подивитися на мапі</span>
                   </li>
               </ul>
           </div>
       </div>
   )
}

export default Shopmap;