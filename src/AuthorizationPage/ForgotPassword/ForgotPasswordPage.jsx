import React from "react";
import {NavLink} from "react-router-dom";
import "./ForgotPasswordPage.css";
const ForgotPasswordPage=(props)=>{
    let email=React.createRef();
    let onEmailChange=()=>{
        let emailText=email.current.value;
        props.UpdateEmailForgot(emailText);
    };
    return(
        <div className={props.ClassForPas[0].name}>
            <div className={props.ClassForPas[1].name}>
                <div className={props.ClassForPas[2].name}>
                    {props.NamesForPas[0].name}
                </div>
                <div className={props.ClassForPas[3].name}>
                    {props.NamesForPas[1].name}
                </div>
                <div className={props.ClassForPas[4].name}>
                    <div className={props.ClassForPas[5].name}>
                        {props.NamesForPas[2].name}
                    </div>
                    <div className={props.ClassForPas[6].name}>
                        <input onChange={onEmailChange}
                               value={props.valueEmailForgot}
                            ref={email}
                            type={props.type}
                            className={props.ClassForPas[7].name}/>
                    </div>
                </div>
                <div className={props.ClassForPas[8].name}>
                    <NavLink to={props.LinksForPas[0].links}
                             className={props.ClassForPas[9].name}>
                        {props.NamesForPas[3].name}</NavLink>
                    <NavLink to={props.LinksForPas[0].links}
                             className={props.ClassForPas[10].name}>
                        {props.NamesForPas[4].name}</NavLink>
                </div>
            </div>
        </div>
    );
}
export default ForgotPasswordPage;