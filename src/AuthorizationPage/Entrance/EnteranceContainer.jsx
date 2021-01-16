import React from "react";
import {
    onClickEnterActionCreator,
    onLoginChangeEnterActionCreator,
    onPassChangeEnterActionCreator
} from "../../redux/reducer/EntranceReducer";
import Entrance from "./Entrance";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        ClassNameEntrance: state.PageEntrance.ClassNameEntrance,
        NamesEntrance: state.PageEntrance.NamesEntrance, valueLogin: state.PageEntrance.Login,
        valuePass: state.PageEntrance.PasswordText, LinksEntrance: state.PageEntrance.LinksEntrance,
        type: state.PageEntrance.Type
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickEnter: () => {
            dispatch(onClickEnterActionCreator())
        },
        onLoginChangeEnter: (loginText) => {
            dispatch(onLoginChangeEnterActionCreator(loginText))
        },
        onPassChangeEnter: (passText) => {
            dispatch(onPassChangeEnterActionCreator(passText))
        }
    };
};
const EntranceContainer = connect(mapStateToProps, mapDispatchToProps)(Entrance);
export default EntranceContainer;