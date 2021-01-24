import {connect} from "react-redux";
import TicketInfoPage from "./TicketInfoPage";
import {ClickCompActionCreator, ClickProcActionCreator} from "../../redux/reducer/TicketReducer";

let mapStateToProps = (state) => {
    return {
        Ticket: state.PageTicketInfo.TicketInfo,
        src: state.PageTicketInfo.src,
        NameTicket: state.PageTicketInfo.NamesTicketInfo[0].name,
        SideBarName: state.PageTicketInfo.NamesTicketInfo[1].name,
        DetailName: state.PageTicketInfo.NamesTicketInfo[2].name,
        HistoryTicket: state.PageTicketInfo.NamesTicketInfo[3].name,
        Img: state.PageTicketInfo.NamesTicketInfo[4].name,
        HistoryText: state.PageTicketInfo.HistoryText,
        StateTicket: state.PageTicketInfo.Status
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        ClickProc:(id_ticket,id_status)=>{
            dispatch(ClickProcActionCreator(id_ticket,id_status))
        },
        ClickComp:(id_ticket,id_status)=>{
            dispatch(ClickCompActionCreator(id_ticket,id_status))
        },
    };
};
let TicketInfoContainer = connect(mapStateToProps, mapDispatchToProps)(TicketInfoPage);
export default TicketInfoContainer;