import React from "react";
import {NavLink} from "react-router-dom";
import s from "./ForgotPasswordPage.module.css";

class ForgotPasswordPage extends React.Component{
    onEmailChange = (e) => {
        let emailText = e.target.value;
        this.props.UpdateEmailForgot(emailText);
    };
    render() {
        return (
            <div className={s.ForgotPage}>
                <div className={s.ForgotContent}>
                    <div className={s.NameForgot}>
                        {this.props.NamePage}
                    </div>
                    <div className={s.TextForgot}>
                        {this.props.NameInfo}
                    </div>
                    <div className={s.ForgotForInput}>
                        <div className={s.ForgotNameInput}>
                            {this.props.NameInput}
                        </div>
                        <div className={s.ForgotDivInput}>
                            <input onChange={this.onEmailChange}
                                   value={this.props.valueEmailForgot}
                                   type={this.props.type}
                                   className={s.ForgotInput}/>
                        </div>
                    </div>
                    <div className={s.ForgotNavLink}>
                        <NavLink to={this.props.Links}
                                 className={s.ForgotCancelLink}>
                            {this.props.NameForgotCancel}</NavLink>
                        <NavLink to={this.props.Links}
                                 className={s.ForgotLink}>
                            {this.props.NameSend}</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
export default ForgotPasswordPage;