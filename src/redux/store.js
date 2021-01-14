let rerenderTree=()=>{}
let state={
    ForApp:{
      ClassNameApp:[
          {id:0,name:"App"},
          {id:1,name:"App-header"},
          {id:2,name:"App-logo"},
          {id:3,name:"App_Nav"},
          {id:4,name:"App_Content"},
      ],
      LinksApp:[
          {id:0,links:"/"},
          {id:1,links:"/Authorization"},
          {id:2,links:"/Authorization/Entrance"},
          {id:3,links:"/Authorization/Registration"},
          {id:4,links:"/tickets"},
          {id:5,links:"/Authorization/ForgotPassword"}
      ]
    },
    PageEntrance:{
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
        Password:"",PasswordText:""
    },
    PageReg:{
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
        Password:"",PasswordText:"",PassRep:"",PassRepText:"",Email:""
    },
    PageForPas:{
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
        ]
    },
    Type:"text",
    PageTiket:{
        Directs:[{id:0,TiketsDirect:[
            {id:0,name:"1 заявка Железнодорожный",
                disEnrolled:true,defEnrolled:true,
                disProcessing:false,defProcessing:false,
                disCompleted:false,defCompleted:false
            },
                {id:1,name:"2 заявка Железнодорожный",
                    disEnrolled:true,defEnrolled:true,
                    disProcessing:false,defProcessing:false,
                    disCompleted:false,defCompleted:false
                },
                {id:2,name:"3 заявка Железнодорожный",
                    disEnrolled:true,defEnrolled:true,
                    disProcessing:false,defProcessing:false,
                    disCompleted:false,defCompleted:false
                },
                {id:3,name:"4 заявка Железнодорожный",
                    disEnrolled:true,defEnrolled:true,
                    disProcessing:false,defProcessing:false,
                    disCompleted:false,defCompleted:false
                },
                {id:4,name:"5 заявка Железнодорожный",
                    disEnrolled:true,defEnrolled:true,
                    disProcessing:false,defProcessing:false,
                    disCompleted:false,defCompleted:false
                },
                {id:5,name:"6 заявка Железнодорожный",
                    disEnrolled:true,defEnrolled:true,
                    disProcessing:false,defProcessing:false,
                    disCompleted:false,defCompleted:false
                }
                ]},
            {id:1,TiketsDirect:[
                {id:0,name:"1 заявка Кировский",
                    disEnrolled:true,defEnrolled:true,
                    disProcessing:false,defProcessing:false,
                    disCompleted:false,defCompleted:false
                },
                    {id:1,name:"2 заявка Кировский",
                        disEnrolled:true,defEnrolled:true,
                        disProcessing:false,defProcessing:false,
                        disCompleted:false,defCompleted:false
                    },
                    {id:2,name:"3 заявка Кировский",
                        disEnrolled:true,defEnrolled:true,
                        disProcessing:false,defProcessing:false,
                        disCompleted:false,defCompleted:false
                    },
                    {id:3,name:"4 заявка Кировский",
                        disEnrolled:true,defEnrolled:true,
                        disProcessing:false,defProcessing:false,
                        disCompleted:false,defCompleted:false
                    },
                    {id:4,name:"5 заявка Кировский",
                        disEnrolled:true,defEnrolled:true,
                        disProcessing:false,defProcessing:false,
                        disCompleted:false,defCompleted:false
                    },
                    {id:5,name:"6 заявка Кировский",
                        disEnrolled:true,defEnrolled:true,
                        disProcessing:false,defProcessing:false,
                        disCompleted:false,defCompleted:false
                    }]
            }],
        id:0
    }
//pricol
}
export let onclick=()=>{
    alert(state.PageEntrance.Login+" "+state.PageEntrance.Password);
    state.PageEntrance.Login="";
    state.PageEntrance.Password="";
    state.PageEntrance.PasswordText="";
    rerenderTree(state);
}
export let updateLogin=(login)=>{
    state.PageEntrance.Login=login;
    rerenderTree(state);

}

export let updatePassword=(pass)=>{
    debugger
    let length=pass.length;
    state.PageEntrance.Password=state.PageEntrance.Password+pass[length-1];
    let text="";
    for(let i of pass){
        text=text+"*"
    }
    state.PageEntrance.PasswordText=text;
    rerenderTree(state);

}
export let onclickReg=()=>{
    debugger
    alert(state.PageReg.Login+" "+state.PageReg.Password+" "+state.PageReg.PassRep+" "+
        state.PageReg.Email);
    state.PageReg.Login="";
    state.PageReg.Password="";
    state.PageReg.PasswordText="";
    state.PageReg.PassRep="";
    state.PageReg.PassRepText="";
    state.PageReg.Email="";
    rerenderTree(state);
}
export let updateLoginReg=(login)=>{
    debugger
    state.PageReg.Login=login;
    rerenderTree(state);

}

export let updatePasswordReg=(pass)=>{
    debugger
    let length=pass.length;
    state.PageReg.Password=state.PageReg.Password+pass[length-1];
    let text="";
    for(let i of pass){
        text=text+"*"
    }
    state.PageReg.PasswordText=text;
    rerenderTree(state);

}
export let updatePasswordRepReg=(PassRep)=>{
    debugger
    let length=PassRep.length;
    state.PageReg.PassRep=state.PageReg.PassRep+PassRep[length-1];
    let text="";
    for(let i of PassRep){
        text=text+"*"
    }
    state.PageReg.PassRepText=text;
    rerenderTree(state);

}
export let updateEmailReg=(email)=>{
    debugger
    state.PageReg.Email=email;
    rerenderTree(state);

}
export let onchangeProcessing=(directid,tiketsid)=>{
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defEnrolled=false;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disEnrolled=true;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defProcessing=true;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disProcessing=true;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defCompleted=false;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disCompleted=false;
    rerenderTree(state);
}
export let onchangeCompleted=(directid,tiketsid)=>{
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defEnrolled=false;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disEnrolled=true;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defProcessing=false;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disProcessing=true;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defCompleted=true;
    state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disCompleted=true;
    rerenderTree(state);
}

export let selectChange1=(id)=>{
    state.PageTiket.id=id;
    rerenderTree(state);
}
export const subscriber=(observer)=> {
    rerenderTree=observer;
}
export default state;