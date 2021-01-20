import React from "react";
import {connect} from "react-redux";
import TicketInfoPage from "./TicketInfoPage";

let mapStateToProps = (state) => {
    return {
        TypeDescription:state.PageTicketInfo.TypeDescription,
        src:state.PageTicketInfo.src,
        NameTicket:state.PageTicketInfo.NamesTicketInfo[0].name,
        SideBarName:state.PageTicketInfo.NamesTicketInfo[1].name,
        DetailName:state.PageTicketInfo.NamesTicketInfo[2].name,
        HistoryTicket:state.PageTicketInfo.NamesTicketInfo[3].name,
        Img:state.PageTicketInfo.NamesTicketInfo[4].name,
        HistoryText:state.PageTicketInfo.HistoryText,
        StateTicket:state.PageTicketInfo.StateTicket
    };
};
let mapDispatchToProps = (dispatch) => {
    return {

    };
};
let TicketInfoContainer = connect(mapStateToProps, mapDispatchToProps)(TicketInfoPage);
export default TicketInfoContainer;