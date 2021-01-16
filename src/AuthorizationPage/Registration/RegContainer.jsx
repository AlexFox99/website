import React from "react";
import {
    onClickRegActionCreator,
    onEmailChangeRegActionCreator,
    onLoginChangeRegActionCreator,
    onPassChangeRegActionCreator,
    onPassRepChangeRegActionCreator
} from "../../redux/reducer/RegistrationReducer";
import Registration from "./Registration";
import {connect} from "react-redux";
let mapStateToProps=(state)=>{
    return{ClassNameReg:state.PageReg.ClassNameReg, NamesReg:state.PageReg.NamesReg,
        LinksReg:state.PageReg.LinksReg,
        valuePassRepReg:state.PageReg.PassRepText,
        valueLoginReg:state.PageReg.Login,
        valueEmail:state.PageReg.Email,
        valuePasswordReg:state.PageReg.PasswordText,
        Type:state.PageReg.Type};
};
let mapDispatchToProps=(dispatch)=>{
    return{
        onClickReg:()=>{dispatch(onClickRegActionCreator())},
        UpdateLogin:(loginText)=>{dispatch(onLoginChangeRegActionCreator(loginText))},
        UpdatePass:(passText)=>{dispatch(onPassChangeRegActionCreator(passText))},
        UpdatePassRep:(passRepText)=>{dispatch(onPassRepChangeRegActionCreator(passRepText))},
        UpdateEmail:(emailText)=>{dispatch(onEmailChangeRegActionCreator(emailText))}
    };
};
let RegistrationContainer=connect(mapStateToProps,mapDispatchToProps)(Registration);
export default RegistrationContainer;