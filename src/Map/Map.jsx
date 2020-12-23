import React from "react";
import Direct from "./Direct/Direct";
import "./Map.css"
const Map = () => {
    return(
        <div className="map-wrapper">
            <div className="map-header">
                I map
            </div>
            <div className="map-content">
                <Direct/>
            </div>

            <div className="map-nav">
                It is info!
            </div>
        </div>
    );
}
export default Map;