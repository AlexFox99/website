import React from "react";
import {NavLink} from "react-router-dom";
import "./Registration.css";
const Registration=(props)=>{
    return(
        <div className={props.store.PageReg.ClassNameReg[0].name}>
            <div className={props.store.PageReg.ClassNameReg[1].name}>
                <div className={props.store.PageReg.ClassNameReg[2].name}>
                    {props.store.PageReg.NamesReg[0].name}
                </div>
                <div className={props.store.PageReg.ClassNameReg[3].name}>
                    <div className={props.store.PageReg.ClassNameReg[4].name}>
                        <div className={props.store.PageReg.ClassNameReg[5].name}>
                            {props.store.PageReg.NamesReg[1].name}</div>
                        <input type={props.store.Type} className={props.store.PageReg.ClassNameReg[6].name}/>
                        <div className={props.store.PageReg.ClassNameReg[7].name}>
                            {props.store.PageReg.NamesReg[2].name}</div>
                        <input type={props.store.Type} className={props.store.PageReg.ClassNameReg[8].name}/>
                        <div className={props.store.PageReg.ClassNameReg[9].name}>
                            {props.store.PageReg.NamesReg[3].name}</div>
                        <input type={props.store.Type} className={props.store.PageReg.ClassNameReg[10].name}/>
                        <div className={props.store.PageReg.ClassNameReg[11].name}>
                            {props.store.PageReg.NamesReg[4].name}</div>
                        <input type={props.store.Type} className={props.store.PageReg.ClassNameReg[12].name}/>
                        <div className={props.store.PageReg.ClassNameReg[13].name}>
                            {props.store.PageReg.NamesReg[5].name}</div>
                        <input type={props.store.Type} className={props.store.PageReg.ClassNameReg[14].name}/>
                    </div>
                </div>
                <div className={props.store.PageReg.ClassNameReg[15].name}>
                    <NavLink to={props.store.PageReg.LinksReg[0].links}
                             className={props.store.PageReg.ClassNameReg[16].name}>
                        {props.store.PageReg.NamesReg[6].name}
                    </NavLink>
                    <NavLink to={props.store.PageReg.LinksReg[1].links}
                             className={props.store.PageReg.ClassNameReg[17].name}>
                        {props.store.PageReg.NamesReg[7].name}
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default Registration;