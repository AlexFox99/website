import React from "react";
import {connect} from "react-redux";
import TicketPage from "./TicketPage";

let mapStateToProps = (state) => {
    return {
    /*PageTicket*/
        TypeTicket:state.PageTicket.TypeTicket,
        optionValue:state.PageTicket.optionValue,
        NameForSelectDirect:state.PageTicket.NamesTickets[0].name,
        QuantityName:state.PageTicket.NamesTickets[1].name
    };
};
let mapDispatchToProps = (dispatch) => {
    return {

    };
};
let TicketPageContainer = connect(mapStateToProps, mapDispatchToProps)(TicketPage);
export default TicketPageContainer;