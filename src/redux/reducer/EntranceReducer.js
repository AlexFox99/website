const onClickButtonEnterActionType = 'ON-CLICK-BUTTON-ENTER';
const onLoginChangeEnterActionType = 'UPDATE-LOGIN-ENTER';
const onChangePassEnterActionType = 'UPDATE-PASSWORD-ENTER';
let InitialState={
    ClassNameEntrance:[
        {id:0,name:"EntrancePage"},
        {id:1,name:"EntranceContent"},
        {id:2,name:"NameEntrance"},
        {id:3,name:"ForInput"},
        {id:4,name:"LoginInputContent"},
        {id:5,name:"NameLoginInput"},
        {id:6,name:"LoginInput"},
        {id:7,name:"PasswordInputContent"},
        {id:8,name:"NamePasswordInput"},
        {id:9,name:"PasswordInput"},
        {id:10,name:"ForNavLink"},
        {id:11,name:"ForgotPassNavLink"},
        {id:12,name:"RegButNavLink"},
        {id:13,name:"EnterBut"}
    ],
    NamesEntrance:[
        {id:0,name:"Войти"},
        {id:1,name:"Имя пользователя или Email"},
        {id:2,name:"Пароль"},
        {id:3,name:"Забыли свой пароль?"},
        {id:4,name:"Регистрация"}
    ],
    LinksEntrance:[
        {id:0,links:"/Authorization/ForgotPassword"},
        {id:1,links:"/Authorization/Registration"}
    ],
    Login:"",
    Password:"",PasswordText:"",Type:"text"
}
const EntranceReducer = (state=InitialState,action)=>{
    /*state=this._state.PageEntrance*/
    switch (action.type) {
        case onClickButtonEnterActionType:
            alert(state.Login+" "+state.Password);

            state.Login="";
            state.Password="";
            state.PasswordText="";
            return state;
        case onLoginChangeEnterActionType:
            state.Login=action.login;
            return state;
        case onChangePassEnterActionType:
            let length=action.pass.length;
            state.Password=state.Password+action.pass[length-1];
            let text="";
            for(let i of action.pass){
                text=text+"*"
            }
            state.PasswordText=text;
            return state;
        default:return state;
    }
}
export const onClickEnterActionCreator=()=>({type: onClickButtonEnterActionType});
export const onLoginChangeEnterActionCreator=(loginText)=>(
    {type: onLoginChangeEnterActionType,login:loginText});
export const onPassChangeEnterActionCreator=(passText)=>(
    {type: onChangePassEnterActionType,pass:passText});
export default EntranceReducer;