import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {onclick, updateText} from "./redux/store";

export let rerenderTree= (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} onclick={onclick} updateText={updateText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}