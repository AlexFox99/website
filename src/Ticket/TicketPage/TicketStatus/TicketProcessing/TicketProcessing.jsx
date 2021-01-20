import React from "react";
import s from "./TicketProcessing.module.css"

let TicketProcessing=()=>{
    return(
        <div className={s.TicketProcessing}>
            <div className={s.TicketName}>
                {"Заявка есть"}
            </div>
        </div>
    );
}
export default TicketProcessing;