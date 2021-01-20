import React from "react";
import s from "./TicketInfoPage.module.css";
import Detail from "./Detail/Detail";


let TicketInfoPage=(props)=>{
    let Details=()=>{
        debugger
        let TypeDescription=[
            {TypeDescription:{id:0,Type:"Имя заявки:",Description:"Я имя заявки"}},
            {TypeDescription:{id:0,Type:"Тег:",Description:"Я тег"}},
            {TypeDescription:{id:0,Type:"Состояние:",Description:"Я состояние заявки"}},
            {TypeDescription:{id:0,Type:"Дата прихода:",Description:"66.66.6666"}},
            {TypeDescription:{id:0,Type:"От кого:",Description:"Я пользователь"}},
            ];
        let array=TypeDescription.map(a=>
            <Detail DetailDescriptionType={a.TypeDescription.Type} DetailDescriptionInfo={a.TypeDescription.Description}/>
        );
        return(array);
    }
    return(
        <div className={s.TicketInfoPage}>
            <div className={s.NameTicket}>
                <div className={s.NameTicketText}>{"Имя заявки"}</div>
            </div>
            <div className={s.Content}>
                <div className={s.SideBarRight}>
                    <div className={s.DetailNames}>{"Панель состояний"}</div>
                    <div className={s.ForButton}><button className={s.Button}>В работе</button></div>
                    <div className={s.ForButton}><button className={s.Button}>Решено</button></div>
                </div>
                <div className={s.ContentTicket}>
                    <div className={s.Detail}>
                        <div className={s.DetailName}>
                            <div className={s.DetailNames}>{"Детали заявки"}</div>
                        </div>
                        <div className={s.DetailDescription}>
                            {Details()}
                        </div>
                    </div>
                    <div className={s.HistoryTicket}>
                        <div className={s.HistoryTicketText}>{"История заявки"}</div>
                        <div className={s.HistoryTicketDescription}>
                            <div className={s.HistoryTicketText}>
                                {"Пришла от пользователя"+" "+" В "+"66.66.6666"}
                            </div>
                            <div className={s.ForImage}>
                                <div>
                                    {"Изображения прикреплены:"}
                                </div>
                                <img className={s.img} src="http://avanpress.ru/wp-content/uploads/2017/03/Светофор.jpg" alt=""/>
                                <img className={s.img} src="http://avanpress.ru/wp-content/uploads/2017/03/Светофор.jpg" alt=""/>
                                <img className={s.img} src="http://avanpress.ru/wp-content/uploads/2017/03/Светофор.jpg" alt=""/>
                                <img className={s.img} src="http://avanpress.ru/wp-content/uploads/2017/03/Светофор.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TicketInfoPage;