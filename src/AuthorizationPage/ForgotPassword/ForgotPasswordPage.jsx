import React from "react";
import {NavLink} from "react-router-dom";
import "./ForgotPasswordPage.css";
const ForgotPasswordPage=(props)=>{
    return(
        <div className={props.store.PageForPas.ClassForPas[0].name}>
            <div className={props.store.PageForPas.ClassForPas[1].name}>
                <div className={props.store.PageForPas.ClassForPas[2].name}>
                    {props.store.PageForPas.NamesForPas[0].name}
                </div>
                <div className={props.store.PageForPas.ClassForPas[3].name}>
                    {props.store.PageForPas.NamesForPas[1].name}
                </div>
                <div className={props.store.PageForPas.ClassForPas[4].name}>
                    <div className={props.store.PageForPas.ClassForPas[5].name}>
                        {props.store.PageForPas.NamesForPas[2].name}
                    </div>
                    <div className={props.store.PageForPas.ClassForPas[6].name}>
                        <input type={props.store.Type} className={props.store.PageForPas.ClassForPas[7].name}/>
                    </div>
                </div>
                <div className={props.store.PageForPas.ClassForPas[8].name}>
                    <NavLink to={props.store.PageForPas.LinksForPas[0].links}
                             className={props.store.PageForPas.ClassForPas[9].name}>
                        {props.store.PageForPas.NamesForPas[3].name}</NavLink>
                    <NavLink to={props.store.PageForPas.LinksForPas[0].links}
                             className={props.store.PageForPas.ClassForPas[10].name}>
                        {props.store.PageForPas.NamesForPas[4].name}</NavLink>
                </div>
            </div>
        </div>
    );
}
export default ForgotPasswordPage;