import {setCardsAC} from "../../redux/sales-reducer";
import {connect} from "react-redux";
import Sale from "./Sale";


const mapStateToProps = (state) => {
    return {
        cards: state.salesPage.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCards: (cards) => {
            dispatch(setCardsAC(cards))
        }
    }
}

const SaleContainer = connect(mapStateToProps, mapDispatchToProps)(Sale);

export  default SaleContainer;