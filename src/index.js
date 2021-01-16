import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import store from "./redux/redux-store";
import App from "./App";
import {Provider} from "react-redux";
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App app={store.getState().ForApp} store={store}
                 dispatch={store.dispatch.bind(store)}
            />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);



