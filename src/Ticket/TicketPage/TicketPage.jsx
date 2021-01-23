import React from "react";
import s from "./TicketPage.module.css";
import StatusColumn from "./TicketStatus/StatusColumn";
import * as axios from "axios";

class TicketPage extends React.Component{
    id=0;
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
    Alert=(e)=>{
        let id = e.target.value;
        this.props.UpdateIdSelect(id);
    }
    Option=()=>{
        let opt=this.props.optionValue.map(a=>
            <option value={a.value}>{a.name}</option>
        )
        return(opt)
    }
    click=()=>{
        axios.get("http://84.22.135.132:5000/Ticket/TrafficLight")
            .then(res => {
                debugger
                alert(res.data)
            });
    }
    render() {
        return (
            <div className={s.ContentPage}>
                <div className={s.SideBar}>
                    {this.Buttons()}
                </div>
                <div className={s.Content}>
                    <div className={s.HelperBar}>
                        <button onClick={this.click}>get</button>
                        <div className={s.Sort}>
                            {this.props.NameForSelectDirect}
                            <select name={this.props.NameForSelectDirect} id={0} onChange={this.Alert}>
                                {this.Option()}
                            </select>
                        </div>
                    </div>
                    <StatusColumn
                        Id={this.props.Id}
                        Distrit={this.props.optionValue}
                        name={this.props.QuantityName}
                        StatusTicket={this.props.StatusTicket}
                        Ticket={this.props.Ticket}
                        ClickDirectInfo={this.props.ClickDirect}
                    />
                </div>
            </div>
        );
    }
}
export default TicketPage;