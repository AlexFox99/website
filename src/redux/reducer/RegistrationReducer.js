const onClickButtonRegActionType = 'ON-CLICK-BUTTON-REG';
const updateLoginRegActionType = 'UPDATE-LOGIN-REG';
const updatePasswordRegActionType = 'UPDATE-PASSWORD-REG';
const updatePasswordRepRegActionType = 'UPDATE-PASSWORD-REP-REG';
const updateEmailRegActionType = 'UPDATE-EMAIL-REG';
let InitialState = {
    NamesReg: [
        {id: 0, name: "Создать нового пользователя"},
        {id: 1, name: "UserName"},
        {id: 2, name: "Реальное имя"},
        {id: 3, name: "Пароль"},
        {id: 4, name: "Подтвердите пароль"},
        {id: 5, name: "Email"},
        {id: 6, name: "Отмена"},
        {id: 7, name: "Зарегистрировать"}
    ],
    LinksReg: [
        {id: 0, links: "/Authorization/Entrance"},
        {id: 1, links: "/TicketPage"}
    ],
    Login: "",
    Password: "", PasswordText: "", PassRep: "", PassRepText: "", Email: "", Type: "text",
    lengthPass: 0, lengthPassRep: 0
}
const RegistrationReducer = (state = InitialState, action) => {
    /*state=this._state.PageReg*/
    switch (action.type) {
        case onClickButtonRegActionType: {
            let stateCopy = {...state};
            alert(stateCopy.Login + " " + stateCopy.Password + " " + stateCopy.PassRep + " " + stateCopy.Email);
            stateCopy.Login = "";
            stateCopy.Password = "";
            stateCopy.PasswordText = "";
            stateCopy.PassRep = "";
            stateCopy.PassRepText = "";
            stateCopy.Email = "";
            stateCopy.lengthPass=0;
            stateCopy.lengthPassRep=0;
            return stateCopy;
        }
        case updateLoginRegActionType: {
            let stateCopy = {...state};
            stateCopy.Login = action.login;
            return stateCopy;
        }
        case updatePasswordRegActionType: {
            let stateCopy = {...state};
            if (action.pass.length > stateCopy.lengthPass) {
                let passArray = Array.from(action.pass);
                passArray.map((s) => {
                    if (s !== "*") {
                        stateCopy.Password += s;
                        stateCopy.PasswordText += "*";
                    }
                });
            } else {
                let passTextArray = Array.from(stateCopy.PasswordText);
                let PassArray = Array.from(stateCopy.Password);
                stateCopy.PasswordText = "";
                stateCopy.Password = "";
                for (let i = 0; i < action.pass.length; i++) {
                    stateCopy.PasswordText += passTextArray[i];
                    stateCopy.Password += PassArray[i];
                }
            }
            stateCopy.lengthPass = action.pass.length;
            return stateCopy;
        }

        case updatePasswordRepRegActionType: {
            let stateCopy = {...state};
            if (action.PassRep.length > stateCopy.lengthPassRep) {
                let passArray = Array.from(action.PassRep);
                passArray.map((s) => {
                    if (s !== "*") {
                        stateCopy.PassRep += s;
                        stateCopy.PassRepText += "*";
                    }
                });
            } else {
                let passTextArray = Array.from(stateCopy.PassRepText);
                let PassArray = Array.from(stateCopy.PassRep);
                stateCopy.PassRepText = "";
                stateCopy.PassRep = "";
                for (let i = 0; i < action.PassRep.length; i++) {
                    stateCopy.PassRepText += passTextArray[i];
                    stateCopy.PassRep += PassArray[i];
                }
            }
            stateCopy.lengthPassRep = action.PassRep.length;
            return stateCopy;
        }
        case updateEmailRegActionType: {
            let stateCopy = {...state};
            stateCopy.Email = action.email;
            return stateCopy;
        }

        default:
            return state;
    }
}
export const onClickRegActionCreator = () => ({type: onClickButtonRegActionType});
export const onLoginChangeRegActionCreator = (loginText) => (
    {type: updateLoginRegActionType, login: loginText});
export const onPassChangeRegActionCreator = (passText, length) => (
    {type: updatePasswordRegActionType, pass: passText, length: length});
export const onPassRepChangeRegActionCreator = (passRepText, length) => (
    {type: updatePasswordRepRegActionType, PassRep: passRepText, length: length});
export const onEmailChangeRegActionCreator = (emailText) => (
    {type: updateEmailRegActionType, email: emailText});
export default RegistrationReducer;