import React from "react";
import "./tickets.css"

import Ticket from "./ticket/Ticket";


const Tickets = (props) => {
    let select=React.createRef();
    debugger
    let zayavkimap=
        props.state.PageTiket.Directs[props.id].TiketsDirect.map(zayavkis=>
        <Ticket directid={props.id}
                tiketsid={zayavkis.id}
                name={zayavkis.name}
                disEnrolled={zayavkis.disEnrolled} defEnrolled={zayavkis.defEnrolled}
                disProcessing={zayavkis.disProcessing} defProcessing={zayavkis.defProcessing}
                disCompleted={zayavkis.disCompleted} defCompleted={zayavkis.defCompleted}
                onchangeProcessing={props.onchangeProcessing}
                onchangeCompleted={props.onchangeCompleted}
        />);
    let selectChange=()=>{
        let id=select.current.value;
        props.onchangeDirect(id);
    }
    return(
        <div className="TicketsPage">
            <div className="TicketsContent">
                <div className="NameTickets">Заявки</div>
                <div className="Name1Tickets">Район:<select ref={select} onChange={selectChange}>
                    <option value="0">Железнодорожный</option>
                    <option value="1">Кировский</option>
                    <option value="2">Ленинский</option>
                    <option value="3">Октябрьский</option>
                    <option value="4">Свердловский</option>
                    <option value="5">Советский</option>
                    <option value="6">Центральный</option>
                </select></div>
                <div className="TicketScroll">
                    {
                        zayavkimap
                    }
                </div>
            </div>
        </div>
    );
}
export default Tickets;