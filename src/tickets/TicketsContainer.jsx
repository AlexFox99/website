import React from "react";
import {
    onChangeCompletedActionCreator,
    onChangeProcessingActionCreator,
    selectChangeActionCreator
} from "../redux/reducer/TicketReducer";
import Tickets from "./Tickets";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        ClassNameTickets: state.PageTicket.ClassNameTickets,
        NamesTickets: state.PageTicket.NamesTickets,
        Id: state.PageTicket.id, optionValue: state.PageTicket.optionValue,
        Directs: state.PageTicket.Directs,
        ClassNameTicket: state.PageTicket.ClassNameTicket,
        NamesTicket: state.PageTicket.NamesTicket,
        typeInputTicket: state.PageTicket.typeInputTicket,
        valueInputTicket: state.PageTicket.valueInputTicket
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        UpdateIdSelect: (id) => {
            dispatch(selectChangeActionCreator(id))
        },
        UpdateStateIntoProccessing: (directid, tiketsid) => {
            dispatch(onChangeProcessingActionCreator(directid, tiketsid))
        },
        UpdateStateIntoCompleted: (directid, tiketsid) => {
            dispatch(onChangeCompletedActionCreator(directid, tiketsid))
        }
    };
};
let TicketsContainer = connect(mapStateToProps, mapDispatchToProps)(Tickets);
export default TicketsContainer;