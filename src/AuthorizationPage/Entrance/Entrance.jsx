import React from "react";
import {NavLink} from "react-router-dom";
import "./Entrance.css";
const Entrance=(props)=>{
    let login=React.createRef();
    let pass=React.createRef();
    let onClick=()=>{
        props.onClickEnter();
    };
    let onLoginChange=()=>{
        let loginText=login.current.value;
        props.onLoginChangeEnter(loginText);
    };
    let onPassChange=()=>{
        let passText=pass.current.value;
        props.onPassChangeEnter(passText);
    };
    return(
        <div className={props.ClassNameEntrance[0].name}>
            <div className={props.ClassNameEntrance[1].name}>
                <div className={props.ClassNameEntrance[2].name}>
                    {props.NamesEntrance[0].name}
                </div>
                <div className={props.ClassNameEntrance[3].name}>
                    <div className={props.ClassNameEntrance[4].name}>
                        <div className={props.ClassNameEntrance[5].name}>
                            {props.NamesEntrance[1].name}</div>
                        <input onChange={onLoginChange}
                               value={props.valueLogin}
                            ref={login}
                            type={props.type}
                               className={props.ClassNameEntrance[6].name}
                        />
                    </div>
                    <div className={props.ClassNameEntrance[7].name}>
                        <div className={props.ClassNameEntrance[8].name}>
                            {props.NamesEntrance[2].name}</div>
                        <input onChange={onPassChange}
                               value={props.valuePass}
                               ref={pass}
                            type={props.type}
                               className={props.ClassNameEntrance[9].name}/>
                    </div>
                </div>
                <div className={props.ClassNameEntrance[10].name}>
                    <NavLink to={props.LinksEntrance[0].links}
                             className={props.ClassNameEntrance[11].name}>
                        {props.NamesEntrance[3].name}
                    </NavLink>
                    <NavLink to={props.LinksEntrance[1].links}>
                        <button className={props.ClassNameEntrance[12].name}>
                            {props.NamesEntrance[4].name}
                        </button>
                    </NavLink>
                    <button onClick={onClick}
                        className={props.ClassNameEntrance[13].name}>
                        {props.NamesEntrance[0].name}</button>
                </div>
            </div>
        </div>
    );
}
export default Entrance;