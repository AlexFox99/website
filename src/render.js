import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {onchangeCompleted, onchangeProcessing, onclick, updateLogin, updatePassword} from "./redux/store";

export let rerenderTree= (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} onclick={onclick} updateLogin={updateLogin} updatePassword={updatePassword}
                 onchangeProcessing={onchangeProcessing}
                 onchangeCompleted={onchangeCompleted}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}