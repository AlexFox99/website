const onClickButtonRegActionType = 'ON-CLICK-BUTTON-REG';
const updateLoginRegActionType = 'UPDATE-LOGIN-REG';
const updatePasswordRegActionType = 'UPDATE-PASSWORD-REG';
const updatePasswordRepRegActionType = 'UPDATE-PASSWORD-REP-REG';
const updateEmailRegActionType = 'UPDATE-EMAIL-REG';
let InitialState={
    ClassNameReg:[
        {id:0,name:"RegistrationPage"},
        {id:1,name:"RegistrationContent"},
        {id:2,name:"NameReg"},
        {id:3,name:"ForInputReg"},
        {id:4,name:"LoginInputContentReg"},
        {id:5,name:"UserNameInputReg"},
        {id:6,name:"UserInputReg"},
        {id:7,name:"RealNameInputReg"},
        {id:8,name:"RealInputReg"},
        {id:9,name:"PasswordNameInputReg"},
        {id:10,name:"PasswordInputReg"},
        {id:11,name:"RepPasswordNameInputReg"},
        {id:12,name:"RepPasswordInputReg"},
        {id:13,name:"EmailNameInputReg"},
        {id:14,name:"EmailInputReg"},
        {id:15,name:"ForNavLinkReg"},
        {id:16,name:"CancelNavLink"},
        {id:17,name:"ButNavLinkReg"}
    ],
    NamesReg:[
        {id:0,name:"Создать нового пользователя"},
        {id:1,name:"UserName"},
        {id:2,name:"Реальное имя"},
        {id:3,name:"Пароль"},
        {id:4,name:"Подтвердите пароль"},
        {id:5,name:"Email"},
        {id:6,name:"Отмена"},
        {id:7,name:"Зарегистрировать"}
    ],
    LinksReg:[
        {id:0,links:"/Authorization/Entrance"},
        {id:1,links:"/Tickets"}
    ],
    Login:"",
    Password:"",PasswordText:"",PassRep:"",PassRepText:"",Email:"",Type:"text"
}
const RegistrationReducer = (state=InitialState,action)=>{
    /*state=this._state.PageReg*/
    switch (action.type) {
        case onClickButtonRegActionType:{
            let stateCopy={...state};
            alert(stateCopy.Login+ " " + stateCopy.Password + " " + stateCopy.PassRep + " " + stateCopy.Email);
            stateCopy.Login="";
            stateCopy.Password="";
            stateCopy.PasswordText="";
            stateCopy.PassRep="";
            stateCopy.PassRepText="";
            stateCopy.Email="";
            return stateCopy;}
        case updateLoginRegActionType:{
            let stateCopy={...state};
            stateCopy.Login=action.login;
            return stateCopy;
        }
        case updatePasswordRegActionType:{
            let stateCopy={...state};
            let length=action.pass.length;
            stateCopy.Password=stateCopy.Password+action.pass[length-1];
            let text="";
            for(let i of action.pass){
                text=text+"*"
            }
            stateCopy.PasswordText=text;
            return stateCopy;
        }

        case updatePasswordRepRegActionType:{
            let stateCopy={...state};
            let lengthRep=action.PassRep.length;
            stateCopy.PassRep=stateCopy.PassRep+action.PassRep[lengthRep-1];
            let textRep="";
            for(let i of action.PassRep){
                textRep=textRep+"*"
            }
            stateCopy.PassRepText=textRep;
            return stateCopy;
        }
        case updateEmailRegActionType:{
            let stateCopy={...state};
            stateCopy.Email=action.email;
            return stateCopy;
        }

        default:return state;
    }
}
export const onClickRegActionCreator=()=>({type: onClickButtonRegActionType});
export const onLoginChangeRegActionCreator=(loginText)=>(
    {type: updateLoginRegActionType,login:loginText});
export const onPassChangeRegActionCreator=(passText)=>(
    {type: updatePasswordRegActionType,pass:passText});
export const onPassRepChangeRegActionCreator=(passRepText)=>(
    {type: updatePasswordRepRegActionType,PassRep:passRepText});
export const onEmailChangeRegActionCreator=(emailText)=>(
    {type: updateEmailRegActionType,email:emailText});
export default RegistrationReducer;