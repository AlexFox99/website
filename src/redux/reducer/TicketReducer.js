const selectDirectTicActionType = 'SELECT-DIRECT-TIC';
const ClickDirectInfoActionType = 'CLICK-DIRECT-INFO';
const dataActionType= 'DATA';
const stateActionType= 'STATE';
const typeActionType= 'TYPE';
const directActionType= 'DIRECT';
let InitialState = {
    ticket:[],Status:[],typeTicket:[],TicketInfo:[],direct:[],id:"0",
    NamesTickets: [
        {id: 0, name: "Сортировка по району:"},
        {id: 1, name: "Заявок: "}
    ],
    optionValue: {id: 0, value: 0, name: "Все"},
    NamesTicketInfo: [
        {id:0,name:"Имя заявки"},
        {id:1,name:"Панель состояний"},
        {id:2,name:"Детали заявки"},
        {id:3,name:"История заявки"},
        {id:4,name:"Изображения прикреплены:"}
    ],
    src:"http://avanpress.ru/wp-content/uploads/2017/03/Светофор.jpg",
    HistoryText:"Пришла от пользователя В 66.66.6666"

}
const TicketReducer = (state = InitialState, action) => {
    switch (action.type) {
        case selectDirectTicActionType: {
            let stateCopy = {...state};
            stateCopy.id = action.id;
            debugger
            return stateCopy;
        }
        case ClickDirectInfoActionType: {
            let stateCopy = {...state};
            debugger
            stateCopy.TicketInfo=stateCopy.ticket[action.id];
            debugger
            return stateCopy;
        }
        case dataActionType:{
            let stateCopy = {...state};
            stateCopy.ticket=action.data;
            debugger
            return stateCopy;
        }
        case stateActionType:{
            let stateCopy = {...state};
            stateCopy.Status=action.state;
            debugger
            return stateCopy;
        }
        case typeActionType:{
            let stateCopy = {...state};
            stateCopy.typeTicket=action.typeTicket;
            debugger
            return stateCopy;
        }
        case directActionType:{
            let stateCopy = {...state};
            stateCopy.direct=action.direct;
            debugger
            return stateCopy;
        }
        default:
            return state;
    }
}
export const selectChangeActionCreator = (id) => ({type: selectDirectTicActionType, id: id});
export const ClickDirectInfoActionCreator = (id) => ({type: ClickDirectInfoActionType, id: id});
export const dataActionCreator=(data)=>({type: dataActionType, data: data});
export const stateActionCreator=(state)=>({type: stateActionType, state: state});
export const typeActionCreator=(type)=>({type: typeActionType, typeTicket: type});
export const directActionCreator=(direct)=>({type: directActionType, direct: direct});
export default TicketReducer;