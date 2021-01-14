let store={
    _state:{
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
    },
    getState(){
        return this._state
    },
    _callSubcriber(){
        console.log("State changed");
    },
    onclickButtonEnter(){
        debugger
        alert(this._state.PageEntrance.Login+" "+this._state.PageEntrance.Password);
        this._state.PageEntrance.Login="";
        this._state.PageEntrance.Password="";
        this._state.PageEntrance.PasswordText="";
        this._callSubcriber(this._state);
},
    updateLoginEnter(login){
        this._state.PageEntrance.Login=login;
        this._callSubcriber(this._state);},
    updatePasswordEnter(pass){
        let length=pass.length;
        this._state.PageEntrance.Password=this._state.PageEntrance.Password+pass[length-1];
        let text="";
        for(let i of pass){
            text=text+"*"
        }
        this._state.PageEntrance.PasswordText=text;
        this._callSubcriber(this._state);

    },
    onclickButtonReg(){
        alert(this._state.PageReg.Login+" "+this._state.PageReg.Password+" "+
            this._state.PageReg.PassRep+" "+
            this._state.PageReg.Email);
        this._state.PageReg.Login="";
        this._state.PageReg.Password="";
        this._state.PageReg.PasswordText="";
        this._state.PageReg.PassRep="";
        this._state.PageReg.PassRepText="";
        this._state.PageReg.Email="";
        this._callSubcriber(this._state);
    },
    updateLoginReg(login){
        this._state.PageReg.Login=login;
        this._callSubcriber(this._state);

    },
    updatePasswordReg(pass){
        let length=pass.length;
        this._state.PageReg.Password=this._state.PageReg.Password+pass[length-1];
        let text="";
        for(let i of pass){
            text=text+"*"
        }
        this._state.PageReg.PasswordText=text;
        this._callSubcriber(this._state);

    },
    updatePasswordRepReg(PassRep){
        let length=PassRep.length;
        this._state.PageReg.PassRep=this._state.PageReg.PassRep+PassRep[length-1];
        let text="";
        for(let i of PassRep){
            text=text+"*"
        }
        this._state.PageReg.PassRepText=text;
        this._callSubcriber(this._state);

    },
    updateEmailReg(email){
        this._state.PageReg.Email=email;
        this._callSubcriber(this._state);
    },
    onchangeProcessing(directid,tiketsid){
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defEnrolled=false;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disEnrolled=true;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defProcessing=true;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disProcessing=true;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defCompleted=false;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disCompleted=false;
        this._callSubcriber(this._state);
    },
    onchangeCompleted(directid,tiketsid){
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defEnrolled=false;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disEnrolled=true;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defProcessing=false;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disProcessing=true;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].defCompleted=true;
        this._state.PageTiket.Directs[directid].TiketsDirect[tiketsid].disCompleted=true;
        this._callSubcriber(this._state);
    },
    selectChangeDirect(id){
        this._state.PageTiket.id=id;
        this._callSubcriber(this._state);
    },
    subscriber(observer){
        this._callSubcriber=observer;
    }
}
export default store;
window.store=store;