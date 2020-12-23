import React from "react";
import {NavLink} from "react-router-dom";
import "./Registration.css";
const Registration=(props)=>{
    return(
        <div className="RegistrationPage">
            <div className="RegistrationContent">
                <div className="NameReg">
                    Создать нового пользователя
                </div>
                <div className="ForInputReg">
                    <div className="LoginInputContentReg">
                        <div className="UserNameInputReg">UserName</div>
                        <input type="text" className="UserInputReg"/>
                        <div className="RealNameInputReg">RealName</div>
                        <input type="text" className="RealInputReg"/>
                        <div className="PasswordNameInputReg">Password</div>
                        <input type="text" className="PasswordInputReg"/>
                        <div className="RepPasswordNameInputReg">RepeatPassword</div>
                        <input type="text" className="RepPasswordInputReg"/>
                        <div className="EmailNameInputReg">Email</div>
                        <input type="text" className="EmailInputReg"/>
                    </div>
                </div>
                <div className="ForNavLinkReg">
                    <NavLink to="/Authorization/Entrance" className="CancelNavLink">
                        Отмена
                    </NavLink>
                    <NavLink to="/Map" className="ButNavLinkReg">
                        Зарегистрировать
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default Registration;