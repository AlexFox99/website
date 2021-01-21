import React from "react";
import s from "../TicketPage.module.css";
import TicketEnrolled from "./TicketEnrolled/TicketEnrolled";
import TicketProcessing from "./TicketProcessing/TicketProcessing";
import TicketCompleted from "./TicketCompleted/TicketCompleted";

let StatusColumn = (props) => {
    let getQuantityTicketEnt=()=>{
        let quantityTicketEnt;
        let j=0;
        switch (props.Id) {
            case props.Distrit[0].value.toString():{
                for (let i=0;i<props.Ticket.length;i++){
                    if(props.Ticket[i].StatusEnrolled==true){
                        j++;
                    }
                }
                break;
            }
            case props.Distrit[props.Id].value.toString():{
                for(let i=0;i<props.Ticket.length;i++){
                    if ((props.Ticket[i].StatusEnrolled === true)&&(props.Ticket[i].Direct===props.Distrit[props.Id].name)) {
                        j++;
                    }
                }
                break;
            }
        }
        quantityTicketEnt=j;
        return(quantityTicketEnt);
    }
    let getQuantityTicketProc=()=>{
        let quantityTicketProc;
        let j=0;
        switch (props.Id) {
            case props.Distrit[0].value.toString(): {
                for (let i = 0; i < props.Ticket.length; i++) {
                    if (props.Ticket[i].StatusProcessing == true) {
                        j++;
                    }
                }
                break;
            }
            case props.Distrit[props.Id].value.toString(): {
                for (let i = 0; i < props.Ticket.length; i++) {
                    if ((props.Ticket[i].StatusProcessing === true) &&
                        (props.Ticket[i].Direct === props.Distrit[props.Id].name)) {
                        j++;
                    }
                }
                break;
            }
        }
        quantityTicketProc=j;
        return(quantityTicketProc);
    }
    let getQuantityTicketComp=()=>{
        let quantityTicketComp;
        let j=0;
        switch (props.Id) {
            case props.Distrit[0].value.toString(): {
                for (let i = 0; i < props.Ticket.length; i++) {
                    if (props.Ticket[i].StatusCompleted == true) {
                        j++;
                    }
                }
                break;
            }
            case props.Distrit[props.Id].value.toString(): {
                for (let i = 0; i < props.Ticket.length; i++) {
                    if ((props.Ticket[i].StatusCompleted === true) &&
                        (props.Ticket[i].Direct === props.Distrit[props.Id].name)) {
                        j++;
                    }
                }
                break;
            }
        }
        quantityTicketComp=j;
        return(quantityTicketComp);
    }
    let getTicketEnrolled=()=>{
        let array;
        switch (props.Id) {
            case props.Distrit[0].value.toString(): {
                array = props.Ticket.map(a => {
                        if (a.StatusEnrolled === true) {
                            return (<TicketEnrolled name={a.name} id={a.id} ClickDirectInfo={props.ClickDirectInfo}/>)
                        }
                    }
                );
                break;
            }
            case props.Distrit[props.Id].value.toString():{
                array = props.Ticket.map(a => {
                        if ((a.StatusEnrolled === true)&&(a.Direct===props.Distrit[props.Id].name)) {
                            return (<TicketEnrolled name={a.name} id={a.id} ClickDirectInfo={props.ClickDirectInfo}/>)
                        }
                    }
                );
                break;
            }
        }
        return(array);
    }
    let getTicketProcessing=()=>{
        let array;
        switch (props.Id) {
            case props.Distrit[0].value.toString(): {
                array = props.Ticket.map(a => {
                        if (a.StatusProcessing === true) {
                            return (<TicketProcessing name={a.name} id={a.id} ClickDirectInfo={props.ClickDirectInfo}/>)
                        }
                    }
                );
                break;
            }
            case props.Distrit[props.Id].value.toString():{
                array = props.Ticket.map(a => {
                        if ((a.StatusProcessing === true)&&(a.Direct===props.Distrit[props.Id].name)) {
                            return (<TicketProcessing name={a.name} id={a.id} ClickDirectInfo={props.ClickDirectInfo}/>)
                        }
                    }
                );
                break;
            }
        }
        return (array);
    }
    let getTicketCompleted = () => {
        let array;
        switch (props.Id) {
            case props.Distrit[0].value.toString(): {
                array = props.Ticket.map(a => {
                        if (a.StatusCompleted === true) {
                            return (<TicketCompleted name={a.name} id={a.id} ClickDirectInfo={props.ClickDirectInfo}/>)
                        }
                    }
                );
                break;
            }
            case props.Distrit[props.Id].value.toString():{
                array = props.Ticket.map(a => {
                        if ((a.StatusCompleted === true)&&(a.Direct===props.Distrit[props.Id].name)) {
                            return (<TicketCompleted name={a.name} id={a.id} ClickDirectInfo={props.ClickDirectInfo}/>)
                        }
                    }
                );
                break;
            }
        }
        return (array);
    }
    let IfNull=(id,quantity,StatusF)=>{
        if(quantity<=0){
            return(<div className={s.NullTicket}></div>);
        }
        else{
            return (
                <div className={s.scrol}>
                    {StatusF}
                </div>
            );
        }
    }
    let StatusGet=()=>{
        let quantity=[getQuantityTicketEnt(),getQuantityTicketProc(),getQuantityTicketComp()];
        let styleForStatus=[s.StatusEnrolled,s.StatusProcessing,s.StatusCompleted];
        let StatusF=[getTicketEnrolled(),getTicketProcessing(),getTicketCompleted()];
        let ar=props.StatusTicket.map(a=>
            <div className={styleForStatus[a.id]}>
                <div className={s.StatusNames}>
                    <div className={s.StatusName}>{a.name}</div>
                    <div className={s.StatusQuantity}>{props.name + quantity[a.id]}</div>
                </div>
                {IfNull(a.id,quantity[a.id],StatusF[a.id])}
            </div>
        );
        return(ar);
    }
    return (
        <div className={s.ForStatus}>
            {StatusGet()}
        </div>
    );
}
export default StatusColumn;