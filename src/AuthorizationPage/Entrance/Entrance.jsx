import React from "react";
import {NavLink} from "react-router-dom";
import "./Entrance.css";
const Entrance=(props)=>{
    let login=React.createRef();
    let pass=React.createRef();
    let onClick=()=>{
        props.onclick();
    };
    let onloginChange=()=>{
        let loginText=login.current.value;
        props.updateLogin(loginText);
    };
    let onloginChange1=()=>{
        let passText=pass.current.value;
        props.updatePassword(passText);
    };
    return(
        <div className={props.store.PageEntrance.ClassNameEntrance[0].name}>
            <div className={props.store.PageEntrance.ClassNameEntrance[1].name}>
                <div className={props.store.PageEntrance.ClassNameEntrance[2].name}>
                    {props.store.PageEntrance.NamesEntrance[0].name}
                </div>
                <div className={props.store.PageEntrance.ClassNameEntrance[3].name}>
                    <div className={props.store.PageEntrance.ClassNameEntrance[4].name}>
                        <div className={props.store.PageEntrance.ClassNameEntrance[5].name}>
                            {props.store.PageEntrance.NamesEntrance[1].name}</div>
                        <input onChange={onloginChange}
                               value={props.store.PageEntrance.Login}
                            ref={login}
                            type={props.store.Type}
                               className={props.store.PageEntrance.ClassNameEntrance[6].name}
                        />
                    </div>
                    <div className={props.store.PageEntrance.ClassNameEntrance[7].name}>
                        <div className={props.store.PageEntrance.ClassNameEntrance[8].name}>
                            {props.store.PageEntrance.NamesEntrance[2].name}</div>
                        <input onChange={onloginChange1}
                               value={props.store.PageEntrance.PasswordText}
                               ref={pass}
                            type={props.store.Type}
                               className={props.store.PageEntrance.ClassNameEntrance[9].name}/>
                    </div>
                </div>
                <div className={props.store.PageEntrance.ClassNameEntrance[10].name}>
                    <NavLink to={props.store.PageEntrance.LinksEntrance[0].links}
                             className={props.store.PageEntrance.ClassNameEntrance[11].name}>
                        {props.store.PageEntrance.NamesEntrance[3].name}
                    </NavLink>
                    <NavLink to={props.store.PageEntrance.LinksEntrance[1].links}>
                        <button className={props.store.PageEntrance.ClassNameEntrance[12].name}>
                            {props.store.PageEntrance.NamesEntrance[4].name}
                        </button>
                    </NavLink>
                    <button onClick={onClick}
                        className={props.store.PageEntrance.ClassNameEntrance[13].name}>
                        {props.store.PageEntrance.NamesEntrance[0].name}</button>
                </div>
            </div>
        </div>
    );
}
export default Entrance;