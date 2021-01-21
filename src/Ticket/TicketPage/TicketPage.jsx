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
    Buttons=()=>{
        let buttons=this.props.TypeTicket.map(a=>
            <div className={s.ItemsBut}>
                <button className={s.Button} disabled={a.disable}>
                    <img className={s.Img} src={a.src} alt=""/>
                    {a.TypeName}
                </button>
            </div>
        )
        return(buttons)
    }
    Option=()=>{
        let opt=this.props.optionValue.map(a=>
            <option value={a.value}>{a.name}</option>
        )
        return(opt)
    }
    render() {
        return (
            <div className={s.ContentPage}>
                <div className={s.SideBar}>
                    {this.Buttons()}
                </div>
                <div className={s.Content}>
                    <div className={s.HelperBar}>
                        <div className={s.Sort}>
                            {this.props.NameForSelectDirect}
                            <select name={this.props.NameForSelectDirect} id="0">
                                {this.Option()}
                            </select>
                        </div>
                    </div>
                    <div className={s.ForStatus}>
                        <div className={s.StatusEnrolled}>
                            <div className={s.StatusNames}>
                                <div className={s.StatusName}>{"Поступила"}</div>
                                <div className={s.StatusQuantity}>{this.props.QuantityName+this.iEnrolled}</div>

                            </div>
                            {this.iEnrolled===0?<div className={s.NullTicket}></div>:<div className={s.scrol}>
                                {this.getTicketEnrolled()}
                            </div>}
                        </div>
                        <div className={s.StatusProcessing}>
                            <div className={s.StatusNames}>
                                <div className={s.StatusName}>{"В работе"}</div>
                                <div className={s.StatusQuantity}>{this.props.QuantityName+this.iProcessing}</div>

                            </div>
                            {this.iProcessing===0?<div className={s.NullTicket}></div>:<div className={s.scrol}>
                                {this.getTicketProcessing()}
                            </div>}
                        </div>
                        <div className={s.StatusCompleted}>
                            <div className={s.StatusNames}>
                                <div className={s.StatusName}>{"Решено"}</div>
                                <div className={s.StatusQuantity}>{this.props.QuantityName+this.iCompleted}</div>

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