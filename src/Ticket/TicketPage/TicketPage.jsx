import React from "react";
import s from "./TicketPage.module.css";
import TicketEnrolled from "./TicketStatus/TicketEnrolled/TicketEnrolled";
import TicketProcessing from "./TicketStatus/TicketProcessing/TicketProcessing";
import TicketCompleted from "./TicketStatus/TicketCompleted/TicketCompleted";

class TicketPage extends React.Component{
    iEnrolled=12;
    iProcessing=1;
    iCompleted=1;
    getTicketEnrolled = () => {
        let array = [];
        for (let j = 0; j < this.iEnrolled; j++) {
            array[j] =<TicketEnrolled/>
        }
        return (array);
    }
    getTicketProcessing=()=>{
        let array = [];
        for (let j = 0; j < this.iProcessing; j++) {
            array[j] =<TicketProcessing/>
        }
        return (array);
    }
    getTicketCompleted = () => {
        let array = [];
        for (let j = 0; j < this.iCompleted; j++) {
            array[j] =<TicketCompleted/>
        }
        return (array);
    }
    render() {
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
                            <select>
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
                                <div className={s.StatusQuantity}>{"Заявок: "+this.iEnrolled}</div>

                            </div>
                            {this.iEnrolled===0?<div className={s.NullTicket}></div>:<div className={s.scrol}>
                                {this.getTicketEnrolled()}
                            </div>}
                        </div>
                        <div className={s.StatusProcessing}>
                            <div className={s.StatusNames}>
                                <div className={s.StatusName}>{"В работе"}</div>
                                <div className={s.StatusQuantity}>{"Заявок: "+this.iProcessing}</div>

                            </div>
                            {this.iProcessing===0?<div className={s.NullTicket}></div>:<div className={s.scrol}>
                                {this.getTicketProcessing()}
                            </div>}
                        </div>
                        <div className={s.StatusCompleted}>
                            <div className={s.StatusNames}>
                                <div className={s.StatusName}>{"Решено"}</div>
                                <div className={s.StatusQuantity}>{"Заявок: "+this.iCompleted}</div>

                            </div>
                            {this.iCompleted===0?<div className={s.NullTicket}></div>:<div className={s.scrol}>
                                {this.getTicketCompleted()}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TicketPage;