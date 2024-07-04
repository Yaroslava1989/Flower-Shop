import {connect} from "react-redux";
import Weding from "./Weding";
import {
    setToggleBoutonniereAC,
    setTogglebrideBouqueteAC, setToggleCeremonyAC,
    setToggleDecorationAC,
    setToggleRoseAC, setToggleWeddingArchAC
} from "../../../redux/floristics-reduser";


const mapStateToProps = (state) => {
    return {
        isInitial: state.floristicsPage.isInitial,
        initialTitle: state.floristicsPage.initialTitle,
        initialCards: state.floristicsPage.initialCards,
        brideBouquete: state.floristicsPage.brideBouquete,
        boutonniere: state.floristicsPage.boutonniere,
        decoration: state.floristicsPage.decoration,
        ceremony: state.floristicsPage.ceremony,
        weddingArch: state.floristicsPage.weddingArch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTogglebrideBouquete: () => {
            dispatch(setTogglebrideBouqueteAC())
        },
        setToggleBoutonniere: () => {
            dispatch(setToggleBoutonniereAC())
        },
        setToggleDecoration: () => {
            dispatch(setToggleDecorationAC())
        },
        setToggleCeremony: () => {
            dispatch(setToggleCeremonyAC())
        },
        setToggleWeddingArch: () => {
            dispatch(setToggleWeddingArchAC())
        }
    }
}

const WedingContainer = connect(mapStateToProps, mapDispatchToProps)(Weding);

export default WedingContainer;