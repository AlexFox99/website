import React from "react";
import s from "./TicketInfoPage.module.css";
import Detail from "./Detail/Detail";
import * as axios from "axios";
import Navbar from "../../navbar/Navbar";
import {withRouter} from "react-router-dom";


class TicketInfoPage extends React.Component {
    constructor(props) {
        super(props);
        axios.get("Ticket/Photos?id=" + this.props.Ticket.ticket.id)/*http://84.22.135.132:5000/*/
            .then(res => {
                let img = res.data;
                debugger
                this.props.img(img);
            });
    }

    Details = () => {
        let array = <div>
            <Detail DetailDescriptionType={"Описание:"} DetailDescriptionInfo={this.props.Ticket.ticket.description}/>
            <Detail DetailDescriptionType={"Дата добавления:"}
                    DetailDescriptionInfo={this.props.Ticket.ticket.date_add}/>
            <Detail DetailDescriptionType={"От кого:"} DetailDescriptionInfo={
                this.props.Ticket.ticket.mobile_user.surname + " "
                + this.props.Ticket.ticket.mobile_user.name + " " +
                this.props.Ticket.ticket.mobile_user.phone}/>
        </div>
        return (array);
    }
    ClickProc = (idStatus) => {
        this.props.ClickProc(this.props.Ticket.ticket.id, idStatus)
    }
    ClickComp = (idStatus) => {
        this.props.ClickComp(this.props.Ticket.ticket.id, idStatus)
    }
    Buttons = () => {
        let button = this.props.StateTicket.map(ar => {
            switch (ar.name) {
                case "В обработке": {
                    return (<div className={s.ForButton}>
                        <button className={s.Button} onClick={() => this.ClickProc(ar.id)}>{ar.name}</button>
                    </div>);
                }
                case "Выполнена": {
                    return (<div className={s.ForButton}>
                        <button className={s.Button} onClick={() => this.ClickComp(ar.id)}>{ar.name}</button>
                    </div>);
                }
            }
        });
        return (button);
    }
    imgClick=(a)=>{
        const {history} = this.props;
        history.push("Photo/"+a);

    }
    getUrlImage = () => {
        let img = this.props.image.map(a => {
                debugger
                return (<img className={s.img} src={"Photo/" + a} alt={""}/*http://84.22.135.132:5000/*/
                             onClick={()=>this.imgClick(a)}/>)
            }
        )
        return (img);
    }
    image = () => {
        debugger
        if (this.props.image.length > 0) {
            debugger
            return (
                <div className={s.ForImage}>
                    <div>
                        {this.props.Img}
                    </div>
                    {this.getUrlImage()}
                </div>);
        }
    }

    render() {
        return (
            <div>
                <Navbar links={this.props.links[this.props.link_id].link}
                        buttonVisible={true} user={this.props.user}/>
                <div className={s.TicketInfoPage}>
                    <div className={s.NameTicket}>
                        <div className={s.NameTicketText}>{this.props.Ticket.ticket.id}</div>
                    </div>
                    <div className={s.Content}>
                        <div className={s.SideBarRight}>
                            <div className={s.DetailNames}>{this.props.SideBarName}</div>
                            {this.Buttons()}
                        </div>
                        <div className={s.ContentTicket}>
                            <div className={s.Detail}>
                                <div className={s.DetailName}>
                                    <div className={s.DetailNames}>{this.props.DetailName}</div>
                                </div>
                                <div className={s.DetailDescription}>
                                    {this.Details()}
                                </div>
                            </div>
                            <div className={s.HistoryTicket}>
                                <div className={s.HistoryTicketText}>{this.props.HistoryTicket}</div>
                                <div className={s.HistoryTicketDescription}>
                                    <div className={s.HistoryTicketText}>
                                        {/*{this.props.HistoryText}*/}
                                    </div>
                                    {this.image()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TicketInfoPage);