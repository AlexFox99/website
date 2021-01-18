import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Entrance.module.css";
import * as axios from "axios"

class Entrance extends React.Component {
    onClick = () => {
        this.props.onClickEnter();
    };
    onLoginChange = (e) => {
        let loginText = e.target.value;
        this.props.onLoginChangeEnter(loginText);
    };
    onPassChange = (e) => {
        let passText = e.target.value;
        this.props.onPassChangeEnter(passText, this.props.length);
    };
    asGet = () => {
        /*    let json=[{"ticket_id":1,
                "ticket":{"id":1,"token":"CE926B0213F9D7B1E4AFAD4B8A1446DC",
                    "state_id":1,"state":{"id":1,"name":"Поступила"}},
                "traffic_light_id":1,
                "traffic_light":{"id":1,"long_":42,"lat":-42,
                    "district_id":1, "district":{"id":1,"name":"Железнодорожный"}},"description":"Светофор не работает"},
                {"ticket_id":2,
                    "ticket":{"id":2,"token":"4AAA652DA9B7A60B9C2461837BB528E9",
                        "state_id":1,"state":{"id":1,"name":"Поступила"}},
                    "traffic_light_id":1,
                    "traffic_light":{"id":1,"long_":42,"lat":-42,
                        "district_id":1,"district":{"id":1,"name":"Железнодорожный"}},"description":"Светофор не работает"},
                {"ticket_id":3,
                    "ticket":{"id":3,"token":"59ADB849F0083EC9061E0CC530B55EDC",
                        "state_id":1,"state":{"id":1,"name":"Поступила"}},
                    "traffic_light_id":1,
                    "traffic_light":{"id":1,"long_":42,"lat":-42,"district_id":1,"district":{"id":1,"name":"Железнодорожный"}},
                    "description":"Светофор не работает"},
                {"ticket_id":4,
                    "ticket":{"id":4,"token":"60877499615F2F79B69F885F02417DB5",
                        "state_id":1,"state":{"id":1,"name":"Поступила"}},
                    "traffic_light_id":1,
                    "traffic_light":{"id":1,"long_":42,"lat":-42,"district_id":1,"district":{"id":1,"name":"Железнодорожный"}},
                    "description":"Светофор не работает"},
                {"ticket_id":5,
                    "ticket":{"id":5,"token":"4AF9EFD0DA8D81BA10299818673B9442",
                        "state_id":1,"state":{"id":1,"name":"Поступила"}},
                    "traffic_light_id":1,"traffic_light":{"id":1,"long_":42,"lat":-42,"district_id":1,
                        "district":{"id":1,"name":"Железнодорожный"}},"description":"Светофор не работает"},
                {"ticket_id":6,"ticket":{"id":6,"token":"FD46AC96BEF6D9A9B4DAD4EC7F15F46A",
                        "state_id":1,"state":{"id":1,"name":"Поступила"}},
                    "traffic_light_id":1,"traffic_light":{"id":1,"long_":42,"lat":-42,
                        "district_id":1,"district":{"id":1,"name":"Железнодорожный"}},"description":"Светофор не работает"}];*/
        debugger
        axios.get("/Ticket/All").then((response) => {
            debugger;
            alert(response);
        })
    };

    render() {
        return (
            <div className={s.EntrancePage}>
                {/*<button onClick={this.asGet}>asget</button>*/}
                <div className={s.EntranceContent}>
                    <div className={s.NameEntrance}>
                        {this.props.NameEntr}
                    </div>
                    <div className={s.ForInput}>
                        <div>
                            <div>
                                {this.props.NameLogin}</div>
                            <input onChange={this.onLoginChange}
                                   value={this.props.valueLogin}
                                   type={this.props.type}
                                   className={s.LoginInput}
                            />
                        </div>
                        <div>
                            <div>
                                {this.props.NamePassword}</div>
                            <input onChange={this.onPassChange}
                                   value={this.props.valuePass}
                                   type={this.props.type}
                                   className={s.PasswordInput}/>
                        </div>
                    </div>
                    <div className={s.ForNavLink}>
                        <NavLink to={this.props.LinksEntrForgot}
                                 className={s.ForgotPassNavLink}>
                            {this.props.NameForgot}
                        </NavLink>
                        <NavLink to={this.props.LinksEntrReg}>
                            <button className={s.RegButNavLink}>
                                {this.props.NameReg}
                            </button>
                        </NavLink>
                        <button onClick={this.onClick}
                                className={s.EnterBut}>
                            {this.props.NameEntr}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Entrance;