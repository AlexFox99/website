import React from "react";
import s from "./TicketInfoPage.module.css";
import Detail from "./Detail/Detail";
import * as axios from "axios";
import Navbar from "../../navbar/Navbar";
import {useHistory, withRouter} from "react-router-dom";


class TicketInfoPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        /*let v="http://84.22.135.132:5000"*/
        /*axios.get("http://84.22.135.132:5000/Ticket/Photos?id=" + this.props.Ticket.id)
            .then(res => {
                let img = res.data;
                debugger
                this.props.img(img);
            });
        debugger
        axios.get("http://84.22.135.132:5000/tickethistory/" + this.props.Ticket.id)
            .then(res => {
                debugger
                let history = res.data;
                this.props.Hist(history);
            });*/
    }
    History= () =>{
        debugger
        let gethistory=()=>{
            let historyText=this.props.Ticket.histories.map(ar=><div>{ar.date+" из статуса "+ar.ticket_state_old.name
            +" перешла в "+ar.ticket_state_new.name}</div>);
            debugger
            return(historyText);
        }
        let History=<div>{gethistory()}</div>;
        debugger
        return(History);
    }
        Details = () => {
        let array = <div>
            <Detail DetailDescriptionType={"Описание:"} DetailDescriptionInfo={this.props.Ticket.description}/>
            <Detail DetailDescriptionType={"Дата добавления:"}
                    DetailDescriptionInfo={this.props.Ticket.date_add}/>
            <Detail DetailDescriptionType={"От кого:"} DetailDescriptionInfo={
                this.props.Ticket.mobile_user.surname + " "
                + this.props.Ticket.mobile_user.name + " " +
                this.props.Ticket.mobile_user.phone}/>
            <Detail DetailDescriptionType={"Геолокация:"} DetailDescriptionInfo={
                this.props.Ticket.lat + " "
                + this.props.Ticket.long_}/>
            <Detail DetailDescriptionType={"Район:"} DetailDescriptionInfo={
                this.props.Ticket.district.name}/>
        </div>
        return (array);
    }
    ClickProc = (idStatus) => {
        debugger
        this.props.ClickProc(this.props.Ticket.id, idStatus)
    }
    ClickComp = (idStatus) => {
        debugger
        this.props.ClickComp(this.props.Ticket.id, idStatus)
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
    getUrlImage = () => {
        const { history } = this.props;
        debugger
        let img1={
            mini:[],photo:[]
        };
/*        let img = this.props.Ticket.mini_photo_id.map(a => {
                return (<img className={s.img} src={"http://84.22.135.132:5000"+"/Photo/" + a} alt={""}/!*http://84.22.135.132:5000/!*!/
                onClick={()=>history.push("/Photo/" + this.props.Ticket.photo_id[a])}
                />)
            }
        )*/
        img1.mini=this.props.Ticket.mini_photo_id.map(a => {return(a)});
        img1.photo=this.props.Ticket.photo_id.map(a => {return(a)});
        let img=[];
        for(let i=0;i<img1.mini.length;i++){
            img[i]=<img className={s.img} src={"http://84.22.135.132:5000"+"/Photo/" + img1.mini[i]} alt={""}
                      onClick={()=>history.push("/Photo/" + img1.photo[i])}
            />
        }
        debugger
        return (img);
    }
/*    image = () => {
        if (this.props.image.length > 0) {
            return (
                <div className={s.ForImage}>
                    <div>
                        {this.props.Img}
                    </div>
                    {this.getUrlImage()}
                </div>);
        }
    }*/

    render() {
        return (
            <div>
                <Navbar links={this.props.links[this.props.link_id].link}
                        buttonVisible={true} user={localStorage.getItem('user')}/>
                <div className={s.TicketInfoPage}>
                    <div className={s.NameTicket}>
                        <div className={s.NameTicketText}>{"Заявка по: "+this.props.Ticket.type.name
                        +" ,№"+this.props.Ticket.id}</div>
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
                                        {this.History()}
                                    </div>
                                    {this.getUrlImage()}
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