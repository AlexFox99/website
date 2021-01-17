import React from "react";

import s from "./Registration.module.css";
import {NavLink} from "react-router-dom";

class Registration extends React.Component {
    onLoginChange = (e) => {
        let loginText = e.target.value;
        this.props.UpdateLogin(loginText);
    };
    onPassChange = (e) => {
        let passText = e.target.value;
        this.props.UpdatePass(passText,this.props.lengthPass);
    };
    onPassRepChange = (e) => {
        let passRepText = e.target.value;
        this.props.UpdatePassRep(passRepText,this.props.lengthPassRep);
    };
    onEmailChange = (e) => {
        let emailText = e.target.value;
        this.props.UpdateEmail(emailText);
    };
    onclick = () => {
        this.props.onClickReg();
    };

    render() {
        return (<div className={s.RegistrationPage}>
                <div className={s.RegistrationContent}>
                    <div className={s.NameReg}>
                        {this.props.NameReg}
                    </div>
                    <div className={s.ForInputReg}>
                        <div>
                            <div>{this.props.NameUser}</div>
                            <input onChange={this.onLoginChange}
                                   value={this.props.valueLoginReg}
                                   type={this.props.Type}
                                   className={s.UserInputReg}/>
                            {/*                   <div className={props.store.PageReg.ClassNameReg[7].name}>
                            {props.store.PageReg.NamesReg[2].name}</div>
                        <input type={props.store.Type} className={props.store.PageReg.ClassNameReg[8].name}/>*/}
                            <div>{this.props.NamePass}</div>
                            <input onChange={this.onPassChange} value={this.props.valuePasswordReg}
                                   type={this.props.Type} className={s.PasswordInputReg}/>
                            <div>{this.props.NamePassRep}</div>
                            <input onChange={this.onPassRepChange}
                                   value={this.props.valuePassRepReg}
                                   type={this.props.Type}
                                   className={s.RepPasswordInputReg}/>
                            <div>{this.props.NameEmail}</div>
                            <input onChange={this.onEmailChange}
                                   value={this.props.valueEmail}
                                   type={this.props.Type}
                                   className={s.EmailInputReg}/>
                        </div>
                    </div>
                    <div className={s.ForNavLinkReg}>
                        <NavLink to={this.props.LinkCancel}
                                 className={s.CancelNavLink}>
                            {this.props.NameCancel}
                        </NavLink>
                        <NavLink
                            to={this.props.LinksBut}
                            className={s.ButNavLinkReg}>
                            {this.props.NameBut}
                        </NavLink>
                        <button onClick={this.onclick}/>
                    </div>
                </div>
            </div>);
    }
}

export default Registration;