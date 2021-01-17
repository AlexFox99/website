import {
    onClickRegActionCreator,
    onEmailChangeRegActionCreator,
    onLoginChangeRegActionCreator,
    onPassChangeRegActionCreator,
    onPassRepChangeRegActionCreator
} from "../../redux/reducer/RegistrationReducer";
import Registration from "./Registration";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        NameReg: state.PageReg.NamesReg[0].name,
        NameUser: state.PageReg.NamesReg[1].name,
        NamePass: state.PageReg.NamesReg[3].name,
        NamePassRep: state.PageReg.NamesReg[4].name,
        NameEmail: state.PageReg.NamesReg[5].name,
        NameCancel: state.PageReg.NamesReg[6].name,
        NameBut: state.PageReg.NamesReg[7].name,
        LinkCancel: state.PageReg.LinksReg[0].links,
        LinksBut: state.PageReg.LinksReg[1].links,
        lengthPass: state.PageReg.lengthPass, lengthPassRep: state.PageReg.lengthPassRep,
        valuePassRepReg: state.PageReg.PassRepText,
        valueLoginReg: state.PageReg.Login,
        valueEmail: state.PageReg.Email,
        valuePasswordReg: state.PageReg.PasswordText,
        Type: state.PageReg.Type
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        onClickReg: () => {
            dispatch(onClickRegActionCreator())
        },
        UpdateLogin: (loginText) => {
            dispatch(onLoginChangeRegActionCreator(loginText))
        },
        UpdatePass: (passText, length) => {
            dispatch(onPassChangeRegActionCreator(passText, length))
        },
        UpdatePassRep: (passRepText, length) => {
            dispatch(onPassRepChangeRegActionCreator(passRepText, length))
        },
        UpdateEmail: (emailText) => {
            dispatch(onEmailChangeRegActionCreator(emailText))
        }
    };
};
let RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);
export default RegistrationContainer;