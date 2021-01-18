import React from "react";
import s from"./tickets.module.css"
import Ticket from "./ticket/Ticket";

class Tickets extends React.Component{

    ticket =()=>{
        let ticket=this.props.Directs[this.props.Id].TiketsDirect.map(tickets =>
            <Ticket directid={this.props.Id}
                    tiketsid={tickets.id}
                    name={tickets.name}
                    disEnrolled={tickets.disEnrolled} defEnrolled={tickets.defEnrolled}
                    disProcessing={tickets.disProcessing}
                    disCompleted={tickets.disCompleted}
                    ClassNameTicket={this.props.ClassNameTicket} typeInputTicket={this.props.typeInputTicket}
                    valueInputTicket={this.props.valueInputTicket} NamesTicket={this.props.NamesTicket}
                    UpdateState={this.props.UpdateState}
            />);
        return ticket;
    }
    selectChange = (e) => {
        let id = e.target.value;
        this.props.UpdateIdSelect(id);
    }
    opt = this.props.optionValue.map(id =>
        <option value={id.value}>{this.props.NamesTickets[id.id + 2].name}</option>
    );
    render() {
        return (
            <div className={s.TicketsPage}>
                <div className={s.TicketsContent}>
                    <div className={s.NameTickets}>{this.props.NamesTickets[0].name}</div>{/*"Заявки"*/}
                    <div className={s.SelectTickets}>{this.props.NamesTickets[1].name}{/*"Район:"*/}
                        <select onChange={this.selectChange}>
                            {this.opt}
                        </select></div>
                    <div className={s.TicketScroll}>
                        {this.ticket()}
                    </div>
                </div>
            </div>
        );
    }
}
export default Tickets;