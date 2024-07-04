import {setToggleAutumnAC, setToggleRoseAC, setToggleSpringAC, setToggleSummerAC, setToggleWinterAC} from "../../../redux/floristics-reduser";
import {connect} from "react-redux";
import Event from "./Event";
const mapStateToProps = (state) => {
    return {
        isInitial: state.floristicsPage.isInitial,
        initialTitle: state.floristicsPage.initialTitle,
        initialCards: state.floristicsPage.initialCards,
        roseCards: state.floristicsPage.roseCards,
        springCards: state.floristicsPage.springCards,
        summerCards: state.floristicsPage.summerCards,
        winterCards: state.floristicsPage.winterCards,
        autumnCards: state.floristicsPage.autumnCards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToggleRose: () => {
            dispatch(setToggleRoseAC())
        },
        setToggleSpring: () => {
            dispatch(setToggleSpringAC())
        },
        setToggleSummer: () => {
            dispatch(setToggleSummerAC())
        },
        setToggleWinter: () => {
            dispatch(setToggleWinterAC())
        },
        setToggleAutumn: () => {
            dispatch(setToggleAutumnAC())
        }
    }
}


const EventContainer = connect(mapStateToProps, mapDispatchToProps)(Event);
export  default EventContainer;
