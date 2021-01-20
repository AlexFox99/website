import React from "react";
import s from "./TicketEnrolled.module.css";

let TicketEnrolled=()=>{
    return(
        <div className={s.TicketEnrolled}>
            <div className={s.TicketName}>
                {"Заявка есть"}
            </div>
        </div>
    );
}
export default TicketEnrolled;