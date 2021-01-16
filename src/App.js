import './App.css';
import React from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";

import ForgotPasswordPage from "./AuthorizationPage/ForgotPassword/ForgotPasswordPage";
import Tickets from "./tickets/Tickets";
/*import logo from "./logo.png";*/
import EntranceContainer from "./AuthorizationPage/Entrance/EnteranceContainer";
import RegistrationContainer from "./AuthorizationPage/Registration/RegContainer";
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
                           render={()=><EntranceContainer store={props.store}
                                                 dispatch={props.dispatch}
                           />}/>
                    <Route path={props.state.ForApp.LinksApp[3].links}
                           render={()=><RegistrationContainer store={props.store}
                                                     dispatch={props.dispatch}
                           />}/>
                    <Route path="/Tickets"
                           render={()=><Tickets state={props.state}
                                                dispatch={props.dispatch}
                           />} />
                    <Route path={props.state.ForApp.LinksApp[5].links}
                           render={()=><ForgotPasswordPage state={props.state}
                                                           dispatch={props.dispatch}
                           />} />
                </div>

            </div>
      </BrowserRouter>
  );
}

export default App;
