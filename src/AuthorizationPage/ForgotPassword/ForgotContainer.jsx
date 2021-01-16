import React from "react";
import {onEmailChangeForgotActionCreator} from "../../redux/reducer/ForgotReducer";
import ForgotPasswordPage from "./ForgotPasswordPage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        ClassForPas: state.PageForPas.ClassForPas, NamesForPas: state.PageForPas.NamesForPas,
        LinksForPas: state.PageForPas.LinksForPas,
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