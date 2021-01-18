import React from "react";
import s from "./TicketPage.module.css";

let TicketPage = (props) => {

    return (
        <div className={s.ContentPage}>
            <div className={s.SideBar}>
                {"Боковая панель"}
            </div>
            <div className={s.Content}>
                <div className={s.HelperBar}>

                    <div className={s.Sort}>{"Сортировочка"}</div>
                </div>
                <div className={s.ForStatus}>
                    <div className={s.StatusEnrolled}>{"Поступила"}<div className={s.NullTicket}></div></div>
                    <div className={s.StatusProcessing}>{"В работе"}<div className={s.NullTicket}></div></div>
                    <div className={s.StatusCompleted}>{"Решено"}<div className={s.NullTicket}></div></div>
                </div>
            </div>
        </div>
    );
}
export default TicketPage;