import React from "react";
import s from "./TicketPage.module.css";

let TicketPage = (props) => {
    let iEnrolled=12;
    let iProcessing=1;
    let iCompleted=3;
    let getTicketEnrolled = () => {
        let array = [];
        for (let j = 0; j < iEnrolled; j++) {
            array[j] +=
                <div className={s.TicketEnrolled}>
                    <div className={s.TicketName}>
                        {"Заявка есть"}
                    </div>
                </div>;
        }
        return (array);
    }
    let getTicketProcessing=()=>{
        let array = [];
        for (let j = 0; j < iProcessing; j++) {
            array[j] +=
                <div className={s.TicketProcessing}>
                    <div className={s.TicketName}>
                        {"Заявка есть"}
                    </div>
                </div>;
        }
        return (array);
    }
    let getTicketCompleted = () => {
        let array = [];
        for (let j = 0; j < iCompleted; j++) {
            array[j] +=
                <div className={s.TicketCompleted}>
                    <div className={s.TicketName}>
                        {"Заявка есть"}
                    </div>
                </div>;
        }
        return (array);
    }
    return (
        <div className={s.ContentPage}>
            <div className={s.SideBar}>
                <div className={s.ItemsBut}>
                    <button className={s.Button}>
                        <img className={s.Img} src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/54742/vertical-traffic-light-emoji-clipart-md.png" alt=""/>
                        {"Светофор"}
                    </button>
                </div>
                <div className={s.ItemsBut}>
                    <button className={s.Button} disabled={true}>
                        <img className={s.Img} src="" alt=""/>
                        {"Знаки"}
                    </button>
                </div>
                <div className={s.ItemsBut}>
                    <button className={s.Button} disabled={true}>
                        <img className={s.Img} src="" alt=""/>
                        {"Графити"}
                    </button>
                </div>
                <div className={s.ItemsBut}>
                    <button className={s.Button} disabled={true}>
                        <img className={s.Img} src="" alt=""/>
                        {"Кнопки"}
                    </button>
                </div>
            </div>
            <div className={s.Content}>
                <div className={s.HelperBar}>

                    <div className={s.Sort}>
                        {"Сортировка по району:"}
                        <select name="" id="">
                            <option value="Все">{"Все"}</option>
                            <option value="Железнодорожный">{"Железнодорожный"}</option>
                            <option value="Кировский">{"Кировский"}</option>
                            <option value="Ленинский">{"Ленинский"}</option>
                            <option value="Октябрьский">{"Октябрьский"}</option>
                            <option value="Свердловский">{"Свердловский"}</option>
                            <option value="Советский">{"Советский"}</option>
                            <option value="Центральный">{"Центральный"}</option>
                        </select>

                    </div>
                </div>
                <div className={s.ForStatus}>
                    <div className={s.StatusEnrolled}>
                        <div className={s.StatusNames}>
                            <div className={s.StatusName}>{"Поступила"}</div>
                            <div className={s.StatusQuantity}>{"Заявок: "+iEnrolled}</div>

                        </div>
                        {iEnrolled===0?<div className={s.NullTicket}></div>:<div className={s.scrol}>
                            {getTicketEnrolled()}
                        </div>}
                    </div>
                    <div className={s.StatusProcessing}>
                        <div className={s.StatusNames}>
                            <div className={s.StatusName}>{"В работе"}</div>
                            <div className={s.StatusQuantity}>{"Заявок: "+iProcessing}</div>

                        </div>
                        {iProcessing===0?<div className={s.NullTicket}></div>:<div className={s.scrol}>
                            {getTicketProcessing()}
                        </div>}
                    </div>
                    <div className={s.StatusCompleted}>
                        <div className={s.StatusNames}>
                            <div className={s.StatusName}>{"Решено"}</div>
                            <div className={s.StatusQuantity}>{"Заявок: "+iCompleted}</div>

                        </div>
                        {iCompleted===0?<div className={s.NullTicket}></div>:<div className={s.scrol}>
                            {getTicketCompleted()}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TicketPage;