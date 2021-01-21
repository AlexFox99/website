import {
    onClickEnterActionCreator,
    onLoginChangeEnterActionCreator,
    onPassChangeEnterActionCreator
} from "../../redux/reducer/EntranceReducer";
import Entrance from "./Entrance";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        NameEntr:state.PageEntrance.NamesEntrance[0].name,
        NameLogin:state.PageEntrance.NamesEntrance[1].name,
        NamePassword:state.PageEntrance.NamesEntrance[2].name,
        NameForgot:state.PageEntrance.NamesEntrance[3].name,
        LinksEntrForgot:state.PageEntrance.LinksEntrance[0].links,
        LinksEntrReg:state.PageEntrance.LinksEntrance[1].links,
        NameReg:state.PageEntrance.NamesEntrance[4].name,
        valueLogin: state.PageEntrance.Login,
        valuePass: state.PageEntrance.PasswordText,
        type: state.PageEntrance.Type,length:state.PageEntrance.length
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickEnter: (history) => {
            dispatch(onClickEnterActionCreator(history))
        },
        onLoginChangeEnter: (loginText) => {
            dispatch(onLoginChangeEnterActionCreator(loginText))
        },
        onPassChangeEnter: (passText,length) => {
            dispatch(onPassChangeEnterActionCreator(passText,length))
        }
    };
};
const EntranceContainer = connect(mapStateToProps, mapDispatchToProps)(Entrance);
export default EntranceContainer;