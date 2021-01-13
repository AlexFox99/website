import './App.css';
import React from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";

import ForgotPasswordPage from "./AuthorizationPage/ForgotPassword/ForgotPasswordPage";
import Tickets from "./tickets/Tickets";
import logo from "./logo.png";
import Entrance from "./AuthorizationPage/Entrance/Entrance";
import Registration from "./AuthorizationPage/Registration/Registration";
const App=(props)=> {
    return (
        <BrowserRouter>
            <div className={props.state.ForApp.ClassNameApp[0].name}>
                <header className={props.state.ForApp.ClassNameApp[1].name}>
                    {/*<img src={logo} className={props.state.ForApp.ClassNameApp[2].name} alt=""/>*/}LOGO
                </header>
                <div className={props.state.ForApp.ClassNameApp[3].name}>

                </div>
                <div className={props.state.ForApp.ClassNameApp[4].name}>
                    <Route exact path={props.state.ForApp.LinksApp[0].links}
                           render={()=><Redirect to={props.state.ForApp.LinksApp[2].links}/>} />
                    <Route exact path={props.state.ForApp.LinksApp[1].links}
                           render={()=><Redirect to={props.state.ForApp.LinksApp[2].links}/>} />
                    <Route path={props.state.ForApp.LinksApp[2].links}
                           render={()=><Entrance store={props.state}
                                                 onclick={props.onclick}
                                                 updateLogin={props.updateLogin}
                                                 updatePassword={props.updatePassword}
                           />}/>
                    <Route path={props.state.ForApp.LinksApp[3].links}
                           render={()=><Registration store={props.state}
                                                     onclickReg={props.onclickReg}
                                                     updateLoginReg={props.updateLoginReg}
                                                     updatePasswordReg={props.updatePasswordReg}
                                                     updatePasswordRepReg={props.updatePasswordRepReg}
                                                     updateEmailReg={props.updateEmailReg}
                           />}/>
                    <Route path="/Tickets"
                           render={()=><Tickets store={props.state}
                                                id={props.state.PageTiket.id}
                                                onchangeProcessing={props.onchangeProcessing}
                                                onchangeCompleted={props.onchangeCompleted}
                           />} />
                    <Route path={props.state.ForApp.LinksApp[5].links}
                           render={()=><ForgotPasswordPage store={props.state}/>} />
                </div>

            </div>
      </BrowserRouter>
  );
}

export default App;
