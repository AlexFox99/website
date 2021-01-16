import React from "react";
import "./tickets.css"
import Ticket from "./ticket/Ticket";
const Tickets = (props) => {
    let select=React.createRef();
    debugger
    let ticket=
        props.Directs[props.Id].TiketsDirect.map(tickets=>
        <Ticket directid={props.Id}
                tiketsid={tickets.id}
                name={tickets.name}
                disEnrolled={tickets.disEnrolled} defEnrolled={tickets.defEnrolled}
                disProcessing={tickets.disProcessing} defProcessing={tickets.defProcessing}
                disCompleted={tickets.disCompleted} defCompleted={tickets.defCompleted}
                ClassNameTicket={props.ClassNameTicket} typeInputTicket={props.typeInputTicket}
                valueInputTicket={props.valueInputTicket}
                UpdateStateIntoProccessing={props.UpdateStateIntoProccessing}
                UpdateStateIntoCompleted={props.UpdateStateIntoCompleted}
        />);
    let selectChange=()=>{
        let id=select.current.value;
        props.UpdateIdSelect(id);
    }
    return(
        <div className={props.ClassNameTickets[0].name}>
            <div className={props.ClassNameTickets[1].name}>
                <div className={props.ClassNameTickets[2].name}>{props.NamesTickets[0].name}</div>
                <div className={props.ClassNameTickets[3].name}>{props.NamesTickets[1].name}
                <select ref={select} onChange={selectChange}>
                    <option value={props.optionValue[0].value}>{props.NamesTickets[2].name}</option>
                    <option value={props.optionValue[1].value}>{props.NamesTickets[3].name}</option>
                    <option value={props.optionValue[2].value}>{props.NamesTickets[4].name}</option>
                    <option value={props.optionValue[3].value}>{props.NamesTickets[5].name}</option>
                    <option value={props.optionValue[4].value}>{props.NamesTickets[6].name}</option>
                    <option value={props.optionValue[5].value}>{props.NamesTickets[7].name}</option>
                    <option value={props.optionValue[6].value}>{props.NamesTickets[8].name}</option>
                </select></div>
                <div className={props.ClassNameTickets[4].name}>
                    {
                        ticket
                    }
                </div>
            </div>
        </div>
    );
}
export default Tickets;