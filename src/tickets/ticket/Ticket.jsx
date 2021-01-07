import React from "react";
import "./ticket.css"
const Ticket = () => {
    return(
        <div className="direct-wrapper">
            <div onClick={()=>alert("d1")} className="direct-1">I Direct 1</div>
            <div className="direct-2">I Direct 2</div>
            <div className="direct-3">I Direct 3</div>
            <div className="direct-4">I Direct 4</div>
            <div className="direct-5">I Direct 5</div>
            <div className="direct-6">I Direct 6</div>
            <div className="direct-7">I Direct 7</div>
        </div>
    );
}
export default Ticket;