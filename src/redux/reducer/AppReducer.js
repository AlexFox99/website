let InitialState={
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
        {id:4,links:"/Tickets"},
        {id:5,links:"/Authorization/ForgotPassword"}
    ]
}
const AppReducer = (state=InitialState,action)=>{
    /*state=this._state.PageReg*/
    switch (action.type) {
        default:return state;
    }
}
export default AppReducer;