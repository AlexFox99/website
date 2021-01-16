import React from "react";
import "./Registration.css";
import {
    onClickRegActionCreator,
    onEmailChangeRegActionCreator,
    onLoginChangeRegActionCreator,
    onPassChangeRegActionCreator,
    onPassRepChangeRegActionCreator
} from "../../redux/reducer/RegistrationReducer";
import Registration from "./Registration";
const RegistrationContainer=(props)=>{
    let state=props.store.getState().PageReg;
    let onLoginChange=(loginText)=>{
        props.dispatch(onLoginChangeRegActionCreator(loginText));
    };
    let onPassChange=(passText)=>{
        props.dispatch(onPassChangeRegActionCreator(passText));
    };
    let onPassRepChange=(passRepText)=>{
        props.dispatch(onPassRepChangeRegActionCreator(passRepText));
    };
    let onEmailChange=(emailText)=>{
        props.dispatch(onEmailChangeRegActionCreator(emailText));
    };
    let onClick=()=>{
        props.dispatch(onClickRegActionCreator());
    }
    return(<Registration onClickReg={onClick} UpdateLogin={onLoginChange}
                         UpdatePass={onPassChange} UpdatePassRep={onPassRepChange}
                         UpdateEmail={onEmailChange}
                         ClassNameReg={state.ClassNameReg} NamesReg={state.NamesReg}
                         LinksReg={state.LinksReg} Type={state.Type}
                         valueLoginReg={state.Login} valuePasswordReg={state.PasswordText}
                         valuePassRepReg={state.PassRepText}
                         valueEmail={state.Email}/>);
}
export default RegistrationContainer;