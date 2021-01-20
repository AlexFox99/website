import React from "react";
import s from "./TicketCompleted.module.css"

let TicketCompleted=()=>{
    return(
        <div className={s.TicketCompleted}>
            <div className={s.TicketName}>
                {"Заявка есть"}
            </div>
        </div>
    );
}
export default TicketCompleted;