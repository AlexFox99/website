import React from "react";
import s from "./TicketPage.module.css";
import StatusColumn from "./TicketStatus/StatusColumn";
import * as axios from "axios";
import Navbar from "../../navbar/Navbar";
import {NavLink} from "react-router-dom";

class TicketPage extends React.Component {
    user;
    constructor(props) {
        super(props);
        if(this.props.user!==""||this.props.user1!==""){
            if(this.props.user!==""){localStorage.setItem('user', this.props.user);}
            if(this.props.user1!==""){localStorage.setItem('user', this.props.user1);}
        }
        /*let v="http://84.22.135.132:5000";*/
        axios.get("http://84.22.135.132:5000/TicketType")
            .then(res => {
                let Type = res.data;
                this.props.type(Type);
            });
        axios.get("http://84.22.135.132:5000/TicketState")
            .then(res => {
                let state = res.data;
                this.props.state(state);
            });
        axios.get("http://84.22.135.132:5000/District")
            .then(res => {
                let direct = res.data;
                this.props.direct(direct);
            });
/*        axios.get("http://84.22.135.132:5000/Ticket/1")
            .then(res => {
                let data = res.data;
                this.props.data(data);
            });*/
    }
    Buttons = () => {
        /*let v="http://84.22.135.132:5000";*/
        let clicks = [this.click, this.click1, this.click2, this.click3];
        let buttons = this.props.TypeTicket.map(a => {
                return (
                    <div className={s.ItemsBut}>
                        <div className={s.Button}>
                            <NavLink to={"/TicketPage"+"/"+a.name}
                                     onClick={clicks[a.id - 1]} activeClassName={s.active}>
                                <img className={s.Img} src={"http://84.22.135.132:5000" + a.url} alt=""/>
                                {a.name}
                            </NavLink>
                        </div>
                    </div>
                        )
            }
        );
        return (buttons);
    }
    Alert = (e) => {
        let id = e.target.value;
        this.props.UpdateIdSelect(id);
    }
    Option = () => {
        let opt1 = [];
        if (this.props.directs.length > 0) {
            for (let i = 0; i < this.props.directs.length; i++) {
                opt1[i] = <option value={i + 1}>{this.props.directs[i].name}</option>
            }
        }
        return (opt1)
    }
    click = () => {
        /*let v="http://84.22.135.132:5000"*/
        axios.get("http://84.22.135.132:5000/Ticket/1")
            .then(res => {
                let data = res.data;
                debugger;
                this.props.data(data);
            });
    }
    click1=()=>{
        axios.get("http://84.22.135.132:5000/Ticket/2")
            .then(res => {
                let data = res.data;
                this.props.data(data);
            });
    }
    click2=()=>{
        axios.get("http://84.22.135.132:5000/Ticket/3")
            .then(res => {
                let data = res.data;
                this.props.data(data);
            });
    }
    click3=()=>{
        axios.get("http://84.22.135.132:5000/Ticket/4")
            .then(res => {
                let data = res.data;
                this.props.data(data);
            });
    }

    render() {
        return (
            <div>
                <Navbar links={this.props.links[this.props.link_id].link}
                        buttonVisible={true} user={localStorage.getItem('user')}
                />
                <div className={s.ContentPage}>
                    <div className={s.SideBar}>
                        {this.Buttons()}
                    </div>
                    <div className={s.Content}>
                        <div className={s.HelperBar}>
                            <div className={s.Sort}>
                                {this.props.NameForSelectDirect}
                                <select name={this.props.NameForSelectDirect} id={0} onChange={this.Alert}>
                                    <option
                                        value={this.props.optionValue.value}>{this.props.optionValue.name}</option>
                                    {this.Option()}
                                </select>
                            </div>
                        </div>
                        <StatusColumn
                            id={this.props.ID}
                            directs={this.props.directs}
                            Ticket={this.props.ticket}
                            StatusTicket={this.props.StatusTicket}
                            ClickDirectInfo={this.props.ClickDirect}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TicketPage;