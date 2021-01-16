import React from "react";
import {NavLink} from "react-router-dom";
import "./Registration.css";
const Registration=(props)=>{
    let login=React.createRef();
    let pass=React.createRef();
    let passRep=React.createRef();
    let email=React.createRef();
    let onLoginChange=()=>{
        let loginText=login.current.value;
        props.UpdateLogin(loginText);
    };
    let onPassChange=()=>{
        let passText=pass.current.value;
        props.UpdatePass(passText);
    };
    let onPassRepChange=()=>{
        let passRepText=passRep.current.value;
        props.UpdatePassRep(passRepText);
    };
    let onEmailChange=()=>{
        let emailText=email.current.value;
        props.UpdateEmail(emailText);
    };
    let onclick=()=>{
        props.onClickReg();
    }
    return(
        <div className={props.ClassNameReg[0].name}>
            <div className={props.ClassNameReg[1].name}>
                <div className={props.ClassNameReg[2].name}>
                    {props.NamesReg[0].name}
                </div>
                <div className={props.ClassNameReg[3].name}>
                    <div className={props.ClassNameReg[4].name}>
                        <div className={props.ClassNameReg[5].name}>
                            {props.NamesReg[1].name}</div>
                        <input onChange={onLoginChange}
                               value={props.valueLoginReg}
                               ref={login}
                               type={props.Type}
                               className={props.ClassNameReg[6].name}/>
     {/*                   <div className={props.store.PageReg.ClassNameReg[7].name}>
                            {props.store.PageReg.NamesReg[2].name}</div>
                        <input type={props.store.Type} className={props.store.PageReg.ClassNameReg[8].name}/>*/}
                        <div className={props.ClassNameReg[9].name}>
                            {props.NamesReg[3].name}</div>
                        <input onChange={onPassChange}
                               value={props.valuePasswordReg}
                               ref={pass}
                               type={props.Type}
                               className={props.ClassNameReg[10].name}/>
                        <div className={props.ClassNameReg[11].name}>
                            {props.NamesReg[4].name}</div>
                        <input onChange={onPassRepChange}
                               value={props.valuePassRepReg}
                               ref={passRep}
                               type={props.Type}
                               className={props.ClassNameReg[12].name}/>
                        <div className={props.ClassNameReg[13].name}>
                            {props.NamesReg[5].name}</div>
                        <input onChange={onEmailChange}
                               value={props.Email}
                               ref={email}
                               type={props.Type}
                               className={props.ClassNameReg[14].name}/>
                    </div>
                </div>
                <div className={props.ClassNameReg[15].name}>
                    <NavLink to={props.LinksReg[0].links}
                             className={props.ClassNameReg[16].name}>
                        {props.NamesReg[6].name}
                    </NavLink>
                    <NavLink
                        to={props.LinksReg[1].links}
                        className={props.ClassNameReg[17].name}>
                        {props.NamesReg[7].name}
                    </NavLink>
                    <button onClick={onclick}/>
                </div>
            </div>
        </div>
    );
}
export default Registration;