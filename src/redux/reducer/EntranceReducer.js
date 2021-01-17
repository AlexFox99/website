const onClickButtonEnterActionType = 'ON-CLICK-BUTTON-ENTER';
const onLoginChangeEnterActionType = 'UPDATE-LOGIN-ENTER';
const onChangePassEnterActionType = 'UPDATE-PASSWORD-ENTER';
let InitialState = {
    NamesEntrance: [
        {id: 0, name: "Войти"},
        {id: 1, name: "Имя пользователя или Email"},
        {id: 2, name: "Пароль"},
        {id: 3, name: "Забыли свой пароль?"},
        {id: 4, name: "Регистрация"}
    ],
    LinksEntrance: [
        {id: 0, links: "/Authorization/ForgotPassword"},
        {id: 1, links: "/Authorization/Registration"}
    ],
    Login: "",
    Password: "", PasswordText: "", Type: "text",length:0
}
const EntranceReducer = (state = InitialState, action) => {
    /*state=this._state.PageEntrance*/
    let stateCopy = {};
    switch (action.type) {
        case onClickButtonEnterActionType:
            stateCopy = {...state};
            alert(stateCopy.Login + " " + stateCopy.Password);

            stateCopy.Login = "";
            stateCopy.Password = "";
            stateCopy.PasswordText = "";
            stateCopy.length=0;
            return stateCopy;
        case onLoginChangeEnterActionType:
            stateCopy = {...state};
            stateCopy.Login = action.login;
            return stateCopy;
        case onChangePassEnterActionType:
            stateCopy = {...state};
            if(action.pass.length>stateCopy.length){
                let passArray=Array.from(action.pass);
                passArray.map((s)=>{
                    if(s!=="*"){
                        stateCopy.Password+=s;
                        stateCopy.PasswordText+="*";
                    }
                });
            }
            else {
                let passTextArray=Array.from(stateCopy.PasswordText);
                let PassArray=Array.from(stateCopy.Password);
                stateCopy.PasswordText="";
                stateCopy.Password="";
                for (let i=0;i<action.pass.length;i++) {
                    stateCopy.PasswordText+=passTextArray[i];
                    stateCopy.Password+=PassArray[i];
                }
            }
            stateCopy.length=action.pass.length;
            return stateCopy;
        default:
            return state;
    }
}
export const onClickEnterActionCreator = () => ({type: onClickButtonEnterActionType});
export const onLoginChangeEnterActionCreator = (loginText) => (
    {type: onLoginChangeEnterActionType, login: loginText});
export const onPassChangeEnterActionCreator = (passText,length) => (
    {type: onChangePassEnterActionType, pass: passText,length:length});
export default EntranceReducer;