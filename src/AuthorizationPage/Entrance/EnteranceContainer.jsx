import React from "react";
import {
    onClickEnterActionCreator,
    onLoginChangeEnterActionCreator,
    onPassChangeEnterActionCreator
} from "../../redux/reducer/EntranceReducer";
import Entrance from "./Entrance";
const EntranceContainer=(props)=>{
    let state=props.store.getState().PageEntrance;
    let onClickEnter=()=>{
        props.dispatch(onClickEnterActionCreator());
    };
    let onLoginChangeEnter=(loginText)=>{
        props.dispatch(onLoginChangeEnterActionCreator(loginText));
    };
    let onPassChangeEnter=(passText)=>{
        props.dispatch(onPassChangeEnterActionCreator(passText));
    };
    return(<Entrance onClickEnter={onClickEnter} onLoginChangeEnter={onLoginChangeEnter}
                     onPassChangeEnter={onPassChangeEnter}
                     ClassNameEntrance={state.ClassNameEntrance}
                     NamesEntrance={state.NamesEntrance}
                     valueLogin={state.Login}
                     valuePass={state.PasswordText}
                     LinksEntrance={state.LinksEntrance}
                     type={state.Type}/>);
}
export default EntranceContainer;

