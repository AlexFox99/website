import React from "react";
import "./ticket.css"
const Ticket = (props) => {
    let onchangeProcessing=()=>{
        props.UpdateStateIntoProccessing(props.directid,props.tiketsid);
    }
    let onchangeCompleted=()=>{
        props.UpdateStateIntoCompleted(props.directid,props.tiketsid);
    }
    debugger
    return(
        <div>
            <div className={props.ClassNameTicket[0].name}>{props.name}
                <input disabled={props.disEnrolled} defaultChecked={props.defEnrolled}
                       name={props.name}
                       type={props.typeInputTicket} value={props.valueInputTicket[0].value}
                />поступила
                <input disabled={props.disProcessing} defaultChecked={props.defProcessing}
                       name={props.name}
                       type={props.typeInputTicket} value={props.valueInputTicket[1].value}
                       onChange={onchangeProcessing}
                />в обработке
                <input disabled={props.disCompleted} defaultChecked={props.defCompleted}
                       name={props.name}
                       type={props.typeInputTicket} value={props.valueInputTicket[2].value}
                       onChange={onchangeCompleted}
                />выполнена
            </div>
        </div>
    );
}
export default Ticket;