const updateEmailForgotActionType = 'UPDATE-EMAIL-FORGOT';

const ForgotReducer = (state,action)=>{
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