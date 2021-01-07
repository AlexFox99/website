import React from "react";
import Ticket from "./ticket/Ticket";
import "./tickets.css"
const Tickets = () => {
    return(
        <div className="map-wrapper">
            <div className="map-header">
                I map
            </div>
            <div className="map-content">
                <Ticket/>
            </div>

            <div className="map-nav">
                It is info!
            </div>
        </div>
    );
}
export default Tickets;