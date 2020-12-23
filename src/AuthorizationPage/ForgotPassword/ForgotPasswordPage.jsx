import React from "react";
import {NavLink} from "react-router-dom";
import "./ForgotPasswordPage.css";
const ForgotPasswordPage=()=>{
    return(
        <div className="ForgotPage">
            <div className="ForgotContent">
                <div className="NameForgot">
                    Сброс пароля
                </div>
                <div className="TextForgot">
                    <p>Чтобы сбросить пароль, укажите свой адрес электронной почты. Вам будет отправлено письмо со ссылкой для входа.</p>
                </div>
                <div className="ForgotForInput">
                    <div className="ForgotNameInput">Email Адрес</div>
                    <div className="ForgotDivInput"><input type="text" className="ForgotInput"/></div>
                </div>
                <div className="ForgotNavLink">
                    <NavLink to="/Authorization/Entrance" className="ForgotCancelLink">Отмена</NavLink>
                    <NavLink to="/Authorization/Entrance" className="ForgotLink">Отправить письмо</NavLink>
                </div>
            </div>
        </div>
    );
}
export default ForgotPasswordPage;