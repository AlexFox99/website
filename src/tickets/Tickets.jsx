import React from "react";
import "./tickets.css"
import Ticket from "./ticket/Ticket";

const Tickets = (props) => {
    let select = React.createRef();
    let ticket =
        props.Directs[props.Id].TiketsDirect.map(tickets =>
            <Ticket directid={props.Id}
                    tiketsid={tickets.id}
                    name={tickets.name}
                    disEnrolled={tickets.disEnrolled} defEnrolled={tickets.defEnrolled}
                    disProcessing={tickets.disProcessing}
                    disCompleted={tickets.disCompleted}
                    ClassNameTicket={props.ClassNameTicket} typeInputTicket={props.typeInputTicket}
                    valueInputTicket={props.valueInputTicket} NamesTicket={props.NamesTicket}
                    UpdateState={props.UpdateState}
            />);
    let selectChange = () => {
        let id = select.current.value;
        props.UpdateIdSelect(id);
    }
    let opt = props.optionValue.map(id =>
        <option value={id.value}>{props.NamesTickets[id.id + 2].name}</option>
    );
    return (
        <div className={props.ClassNameTickets[0].name}>
            <div className={props.ClassNameTickets[1].name}>
                <div className={props.ClassNameTickets[2].name}>{props.NamesTickets[0].name}</div>
                <div className={props.ClassNameTickets[3].name}>{props.NamesTickets[1].name}
                    <select ref={select} onChange={selectChange}>
                        {opt}
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