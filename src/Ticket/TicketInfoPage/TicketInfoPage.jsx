import React from "react";
import s from "./TicketInfoPage.module.css";

let TicketInfoPage=(props)=>{
    return(
        <div className={s.TicketInfoPage}>
            <div className={s.NameTicket}>{"Имя заявки"}</div>
            <div className={s.Content}>
                <div className={s.SideBarRight}>{"Боковая правая панель"}
                </div>
                <div className={s.ContentTicket}>
                    <div className={s.Detail}>
                        <div className={s.DetailName}>
                            <div className={s.DetailNames}>{"Detail"}</div>
                        </div>
                        <div className={s.DetailDescription}>
                            <div className={s.DetailDescriptionType}>{"Details:"}</div>
                            <div className={s.DetailDescriptionInfo}>{"It detail"}</div>
                        </div>
                    </div>
                    <div className={s.HistoryTicket}>
                        {"History"}
                        <div className={s.HistoryTicketDescription}>
                            {"no!"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TicketInfoPage;