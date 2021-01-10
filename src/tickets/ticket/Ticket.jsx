import React from "react";
import "./ticket.css"
const Ticket = (props) => {

    let onchangeProcessing=()=>{
        props.onchangeProcessing(props.id);
    }
    let onchangeCompleted=()=>{
        props.onchangeCompleted(props.id);
    }
    return(
        <div className="ticketPattern">
            <div className="TicketContent">{props.name}
                <input disabled={props.disEnrolled} defaultChecked={props.defEnrolled}
                       name={props.name}
                       type="radio" value="1"
                />поступила
                <input disabled={props.disProcessing} defaultChecked={props.defProcessing}
                       name={props.name}
                       type="radio" value="2"
                       onChange={onchangeProcessing}
                />в обработке
                <input disabled={props.disCompleted} defaultChecked={props.defCompleted}
                       name={props.name}
                       type="radio" value="3"
                       onChange={onchangeCompleted}
                />выполнена
            </div>
        </div>
    );
}
export default Ticket;