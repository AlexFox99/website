import React from "react";
import {connect} from "react-redux";
import TicketPage from "./TicketPage";
import {ClickDirectInfoActionCreator, selectChangeActionCreator} from "../../redux/reducer/TicketReducer";

let mapStateToProps = (state) => {
    return {
    /*PageTicket*/
        TypeTicket:state.PageTicket.TypeTicket,
        optionValue:state.PageTicket.optionValue,
        NameForSelectDirect:state.PageTicket.NamesTickets[0].name,
        QuantityName:state.PageTicket.NamesTickets[1].name,
        StatusTicket:state.PageTicket.StatusTicket,
        Ticket:state.PageTicket.TicketsDirect,
        Id:state.PageTicket.id,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        UpdateIdSelect: (id) => {
            dispatch(selectChangeActionCreator(id))
        },
        ClickDirect:(id)=>{
            dispatch(ClickDirectInfoActionCreator(id))
        }
    }
    ;
};
let TicketPageContainer = connect(mapStateToProps, mapDispatchToProps)(TicketPage);
export default TicketPageContainer;