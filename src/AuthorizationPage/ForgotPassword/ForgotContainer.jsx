import React from "react";
import {onEmailChangeForgotActionCreator} from "../../redux/reducer/ForgotReducer";
import ForgotPasswordPage from "./ForgotPasswordPage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        NamePage:state.PageForPas.NamesForPas[0].name,
        NameInfo:state.PageForPas.NamesForPas[1].name,
        NameInput:state.PageForPas.NamesForPas[2].name,
        NameForgotCancel:state.PageForPas.NamesForPas[3].name,
        NameSend:state.PageForPas.NamesForPas[4].name,

        Links: state.PageForPas.LinksForPas[0].links,
        valueEmailForgot: state.PageForPas.Email,
        type: state.PageForPas.Type
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        UpdateEmailForgot: (emailText) => {
            dispatch(onEmailChangeForgotActionCreator(emailText))
        }
    };
};
let ForgotContainer = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);
export default ForgotContainer;