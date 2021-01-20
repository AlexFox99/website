
let InitialState = {
    TypeDescription:[
        {TypeDescription:{id:0,Type:"Имя заявки:",Description:"Я имя заявки"}},
        {TypeDescription:{id:0,Type:"Тег:",Description:"Я тег"}},
        {TypeDescription:{id:0,Type:"Состояние:",Description:"Я состояние заявки"}},
        {TypeDescription:{id:0,Type:"Дата прихода:",Description:"66.66.6666"}},
        {TypeDescription:{id:0,Type:"От кого:",Description:"Я пользователь"}},
    ],
    NamesTicketInfo: [
        {id:0,name:"Имя заявки"},
        {id:1,name:"Панель состояний"},
        {id:2,name:"Детали заявки"},
        {id:3,name:"История заявки"},
        {id:4,name:"Изображения прикреплены:"}
    ],
    src:"http://avanpress.ru/wp-content/uploads/2017/03/Светофор.jpg",
    HistoryText:"Пришла от пользователя В 66.66.6666",
    StateTicket:[{id:0,State:"В работе"},{id:1,State:"Решено"}]
}
const TicketInfoReducer = (state = InitialState, action) => {
    return state;
}
export default TicketInfoReducer;