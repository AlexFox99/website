import React from "react";
import {onEmailChangeForgotActionCreator} from "../../redux/reducer/ForgotReducer";
import ForgotPasswordPage from "./ForgotPasswordPage";

const ForgotContainer=(props)=>{
    let state=props.store.getState().PageForPas;
    let onEmailChange=(emailText)=>{
        props.dispatch(onEmailChangeForgotActionCreator(emailText));
    };
    return(<ForgotPasswordPage
        UpdateEmailForgot={onEmailChange}
        LinksForPas={state.LinksForPas}
        ClassForPas={state.ClassForPas}
        valueEmailForgot={state.Email}
        NamesForPas={state.NamesForPas}
        type={state.Type}
    />);
}
export default ForgotContainer;