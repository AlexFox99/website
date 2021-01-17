const updateEmailForgotActionType = 'UPDATE-EMAIL-FORGOT';
let InitialState = {
    NamesForPas: [
        {id: 0, name: "Сброс пароля"},
        {
            id: 1,
            name: "Чтобы сбросить пароль, укажите свой адрес электронной почты. Вам будет отправлено письмо со ссылкой для входа."
        },
        {id: 2, name: "Email Адрес"},
        {id: 3, name: "Отмена"},
        {id: 4, name: "Отправить письмо"}
    ],
    LinksForPas: [
        {id: 0, links: "/Authorization/Entrance"}
    ],
    Email: "", Type: "text"
}
const ForgotReducer = (state = InitialState, action) => {
    /*state=this._state.PageReg*/
    switch (action.type) {
        case updateEmailForgotActionType: {
            let stateCopy = {...state};
            stateCopy.Email = action.email;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const onEmailChangeForgotActionCreator = (emailText) => (
    {type: updateEmailForgotActionType, email: emailText});
export default ForgotReducer;