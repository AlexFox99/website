import React from "react";
import Ticket from "./ticket/Ticket";
import "./tickets.css"
const Tickets = () => {
    return(
        <div className="TicketsPage">
            <div className="TicketsContent">
                <div className="NameTickets">Заявки</div>
                <div className="Name1Tickets">Район:<select>
                    <option value="1">Железнодорожный</option>
                    <option value="2">Кировский</option>
                    <option value="3">Ленинский</option>
                    <option value="4">Октябрьский</option>
                    <option value="5">Свердловский</option>
                    <option value="6">Советский</option>
                    <option value="7">Центральный</option>
                </select></div>
                <div className="TicketScroll">
                    <Ticket/>
                </div>
            </div>
        </div>
    );
}
export default Tickets;