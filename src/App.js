import './App.css';
import React from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";

import ForgotPasswordPage from "./AuthorizationPage/ForgotPassword/ForgotPasswordPage";
import Map from "./Map/Map";
import logo from "./logo.png";
import Entrance from "./AuthorizationPage/Entrance/Entrance";
import Registration from "./AuthorizationPage/Registration/Registration";
const App=(props)=> {

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo"/>
                </header>
                <div className="App_Nav">

                </div>
                <div className="App_Content">
                    <Route exact path="/" render={()=><Redirect to="/Authorization/Entrance"/>} />
                    <Route exact path="/Authorization" render={()=><Redirect to="/Authorization/Entrance"/>} />
                    <Route path="/Authorization/Entrance" render={()=><Entrance/>}/>
                    <Route path="/Authorization/Registration" render={()=><Registration/>}/>
                    <Route path="/Map"render={()=><Map/>} />
                    <Route path="/Authorization/ForgotPassword"render={()=><ForgotPasswordPage/>} />
                </div>

            </div>
      </BrowserRouter>
  );
}

export default App;
