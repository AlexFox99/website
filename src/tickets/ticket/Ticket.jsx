import React from "react";
import s from"./ticket.module.css"

let Ticket = (props) => {
    let onchangeRadioBut = (e) => {
        let value=e.target.value;
        props.UpdateState(value,props.directid, props.tiketsid);
    }
    return (
        <div>
            <div className={s.TicketContent}>{props.name}
                <input disabled={props.disEnrolled} defaultChecked={props.defEnrolled}
                       name={props.name}
                       type={props.typeInputTicket} value={props.valueInputTicket[0].value}
                />{props.NamesTicket[0].name}
                <input disabled={props.disProcessing}
                       name={props.name}
                       type={props.typeInputTicket} value={props.valueInputTicket[1].value}
                       onChange={onchangeRadioBut}
                />{props.NamesTicket[1].name}
                <input disabled={props.disCompleted}
                       name={props.name}
                       type={props.typeInputTicket} value={props.valueInputTicket[2].value}
                       onChange={onchangeRadioBut}
                />{props.NamesTicket[2].name}
            </div>
        </div>
    );
}
export default Ticket;