import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import store from "./redux/store";
import App from "./App";

let rerenderTree= (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 onclickEnt={store.onclickButtonEnter.bind(store)}
                 updateLoginEnt={store.updateLoginEnter.bind(store)}
                 updatePasswordEnt={store.updatePasswordEnter.bind(store)}
                 updateLoginReg={store.updateLoginReg.bind(store)}
                 updatePasswordReg={store.updatePasswordReg.bind(store)}
                 updatePasswordRepReg={store.updatePasswordRepReg.bind(store)}
                 updateEmailReg={store.updateEmailReg.bind(store)}
                 onclickReg={store.onclickButtonReg.bind(store)}
                 onchangeDirect={store.selectChangeDirect.bind(store)}
                 onchangeProcessing={store.onchangeProcessing.bind(store)}
                 onchangeCompleted={store.onchangeCompleted.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());
store.subscriber(rerenderTree);



