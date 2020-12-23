import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let LoginPlaceholder="Введите имя";
let PasswordPlaceholder="Введите пароль";
let ImageSrc="https://yt3.ggpht.com/a/AATXAJxNghAFcCvYyall2kD_Gc3S62I7eqCvKu_QNbn9=s900-c-k-c0xffffffff-no-rj-mo";
let TypeInput="text";
let ClassNameInput="input";
let ClassNameImg="logo_my";

let LinkNameRegistration="Регистрация";
let LinkToRegistration="/Authorization";
let ClassNamePassword="reg_pass";
let PasswordRepeatPlaceholderRegistration="Повторите пароль";

let LinkToForgotEntrance="/ForgotPassword";
let LinkNameForgotEntrance="Забыли пароль?";
let LinkNameEnterEntrance="Войти";
let LinkToEnterEntrance="/Map";
let ClassNamePasswordEntrance="ent_pass";

ReactDOM.render(
  <React.StrictMode>
          <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
