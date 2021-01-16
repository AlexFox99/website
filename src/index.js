import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import store from "./redux/redux-store";
import App from "./App";

let rerenderTree= (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} store={store}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());
store.subscribe(()=>{
    let state=store.getState();
    rerenderTree(state);
});



