import React from "react";
import {
    onChangeCompletedActionCreator,
    onChangeProcessingActionCreator,
    selectChangeActionCreator
} from "../redux/reducer/TicketReducer";
import Tickets from "./Tickets";


const TicketsContainer = (props) => {
    let state=props.store.getState().PageTicket;
    let selectChange=(id)=>{
        props.dispatch(selectChangeActionCreator(id));
    }
    let onchangeProcessing=(directid,tiketsid)=>{
        props.dispatch(onChangeProcessingActionCreator(directid,tiketsid));
    }
    let onchangeCompleted=(directid,tiketsid)=>{
        props.dispatch(onChangeCompletedActionCreator(directid,tiketsid));
    }
    return(<Tickets UpdateIdSelect={selectChange} UpdateStateIntoProccessing={onchangeProcessing}
                    UpdateStateIntoCompleted={onchangeCompleted}
                    ClassNameTickets={state.ClassNameTickets}
                    NamesTickets={state.NamesTickets}
                    Id={state.id} optionValue={state.optionValue}
                    Directs={state.Directs}
                    ClassNameTicket={state.ClassNameTicket}
                    NamesTicket={state.NamesTicket}
                    typeInputTicket={state.typeInputTicket}
                    valueInputTicket={state.valueInputTicket}
        />
    );
}
export default TicketsContainer;