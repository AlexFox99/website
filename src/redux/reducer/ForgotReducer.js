const updateEmailForgotActionType = 'UPDATE-EMAIL-FORGOT';
let InitialState={
    ClassForPas:[
        {id:0,name:"ForgotPage"},
        {id:1,name:"ForgotContent"},
        {id:2,name:"NameForgot"},
        {id:3,name:"TextForgot"},
        {id:4,name:"ForgotForInput"},
        {id:5,name:"ForgotNameInput"},
        {id:6,name:"ForgotDivInput"},
        {id:7,name:"ForgotInput"},
        {id:8,name:"ForgotNavLink"},
        {id:9,name:"ForgotCancelLink"},
        {id:10,name:"ForgotLink"}
    ],
    NamesForPas:[
        {id:0,name:"Сброс пароля"},
        {id:1,name:"Чтобы сбросить пароль, укажите свой адрес электронной почты. Вам будет отправлено письмо со ссылкой для входа."},
        {id:2,name:"Email Адрес"},
        {id:3,name:"Отмена"},
        {id:4,name:"Отправить письмо"}
    ],
    LinksForPas:[
        {id:0,links:"/Authorization/Entrance"}
    ],
    Email:"",Type:"text"
}
const ForgotReducer = (state=InitialState,action)=>{
    /*state=this._state.PageReg*/
    switch (action.type) {
        case updateEmailForgotActionType:
            state.Email=action.email;
            return state;
        default:return state;
    }
    }
export const onEmailChangeForgotActionCreator=(emailText)=>(
    {type: updateEmailForgotActionType,email:emailText});
export default ForgotReducer;