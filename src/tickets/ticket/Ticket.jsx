import React from "react";
import "./ticket.css"
const Ticket = () => {
    return(
        <div className="row">
            <div className="Tickets1Content">1 заявка
                <input  className="имя" type="radio" value="1"/>поступила
                <input className="имя" type="radio" value="2"/>в обработке
                <input className="имя" type="radio" value="3"/>выполнена
            </div>
            <div className="Tickets1Content">2 заявка
                <input checked="checked" className="имя" type="radio" value="1"/>поступила
                <input className="имя" type="radio" value="2"/>в обработке
                <input className="имя" type="radio" value="3"/>выполнена
            </div>
            <div className="Tickets1Content">3 заявка
                <input checked="checked" className="имя" type="radio" value="1"/>поступила
                <input className="имя" type="radio" value="2"/>в обработке
                <input className="имя" type="radio" value="3"/>выполнена
            </div>
            <div className="Tickets1Content">3 заявка
                <input checked="checked" className="имя" type="radio" value="1"/>поступила
                <input className="имя" type="radio" value="2"/>в обработке
                <input className="имя" type="radio" value="3"/>выполнена
            </div>
            <div className="Tickets1Content">3 заявка
                <input checked="checked" className="имя" type="radio" value="1"/>поступила
                <input className="имя" type="radio" value="2"/>в обработке
                <input className="имя" type="radio" value="3"/>выполнена
            </div>
        </div>
    );
}
export default Ticket;