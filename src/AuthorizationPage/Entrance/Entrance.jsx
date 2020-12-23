import React from "react";
import {NavLink} from "react-router-dom";
import "./Entrance.css";
const Entrance=(props)=>{
    return(
        <div className="EntrancePage">
            <div className="EntranceContent">
                <div className="NameEntrance">
                    Войти
                </div>
                <div className="ForInput">
                    <div className="LoginInputContent">
                        <div className="NameLoginInput">Имя пользователя или Email</div>
                        <input type="text" className="LoginInput"/>
                    </div>
                    <div className="PasswordInputContent">
                        <div className="NamePasswordInput">Пароль</div>
                        <input type="text" className="PasswordInput"/>
                    </div>
                </div>
                <div className="ForNavLink">
                    <NavLink to="/Authorization/ForgotPassword" className="ForgotPassNavLink">
                        Забыли свой пароль?
                    </NavLink>
                    <NavLink to="/Authorization/Registration">
                        <button color='primary' className="RegButNavLink">
                            Регистрация
                        </button>
                    </NavLink>
                    <button color='primary' className="EnterBut">Войти</button>
                </div>
            </div>
        </div>
    );
}
export default Entrance;