import React from "react";
import s from "./TicketInfoPage.module.css";
import Detail from "./Detail/Detail";


class TicketInfoPage extends React.Component{
    Details=()=>{
        let TypeDescription=this.props.TypeDescription;
        debugger
        let array=TypeDescription.map(a=>
            <Detail DetailDescriptionType={a.Type} DetailDescriptionInfo={a.Description}/>
        );
        return(array);
    }
    Buttons=()=>{
        let button=this.props.StateTicket.map(a=>
            <div className={s.ForButton}><button className={s.Button}>{a.State}</button></div>
        )
        return(button);
    }
    render() {
        return(
            <div className={s.TicketInfoPage}>
                <div className={s.NameTicket}>
                    <div className={s.NameTicketText}>{this.props.NameTicket}</div>
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
                                    {this.props.HistoryText}
                                </div>
                                <div className={s.ForImage}>
                                    <div>
                                        {this.props.Img}
                                    </div>
                                    <img className={s.img} src={this.props.src} alt=""/>
                                    <img className={s.img} src={this.props.src}  alt=""/>
                                    <img className={s.img} src={this.props.src}  alt=""/>
                                    <img className={s.img} src={this.props.src}  alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TicketInfoPage;