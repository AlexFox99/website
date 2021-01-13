import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    onchangeCompleted,
    onchangeProcessing,
    onclick, onclickReg, updateEmailReg,
    updateLogin,
    updateLoginReg,
    updatePassword, updatePasswordReg, updatePasswordRepReg
} from "./redux/store";

export let rerenderTree= (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 onclick={onclick} updateLogin={updateLogin} updatePassword={updatePassword}
                 updateLoginReg={updateLoginReg} updatePasswordReg={updatePasswordReg}
                 updatePasswordRepReg={updatePasswordRepReg} updateEmailReg={updateEmailReg}
                 onclickReg={onclickReg}
                 onchangeProcessing={onchangeProcessing}
                 onchangeCompleted={onchangeCompleted}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}