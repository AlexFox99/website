import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


let Navbar = (props) => {
    let visible = () => {
        debugger
        if (props.buttonVisible === true) {
            return (<div className={s.App_Nav}><NavLink className={s.NavLink} to={props.links}>{props.links}</NavLink>
                <div className={s.User_Text}><p className={s.User}>{props.user}</p></div>
                <div className={s.ForBut}>
                    <button className={s.button}>{"Logout"}</button>
                </div>
            </div>);
        } else {
            return (<div className={s.App_Nav}>
                <NavLink className={s.NavLink} to={props.links}>{props.links}</NavLink>
            </div>)
        }
    }
    return (<div>
            {visible()}
        </div>
    );
}
export default Navbar;