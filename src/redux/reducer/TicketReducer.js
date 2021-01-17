const onChangeRadioButTicActionType = 'ON-CHANGE-RADIO-BUT';
const selectDirectTicActionType = 'SELECT-DIRECT-TIC';
let InitialState = {
    Directs: [{
        id: 0, TiketsDirect: [
            {
                id: 0, name: "1 заявка Железнодорожный",
                disEnrolled: true, defEnrolled: true,
                disProcessing: false, defProcessing: false,
                disCompleted: false, defCompleted: false
            },
            {
                id: 1, name: "2 заявка Железнодорожный",
                disEnrolled: true, defEnrolled: true,
                disProcessing: false, defProcessing: false,
                disCompleted: false, defCompleted: false
            },
            {
                id: 2, name: "3 заявка Железнодорожный",
                disEnrolled: true, defEnrolled: true,
                disProcessing: false, defProcessing: false,
                disCompleted: false, defCompleted: false
            },
            {
                id: 3, name: "4 заявка Железнодорожный",
                disEnrolled: true, defEnrolled: true,
                disProcessing: false, defProcessing: false,
                disCompleted: false, defCompleted: false
            },
            {
                id: 4, name: "5 заявка Железнодорожный",
                disEnrolled: true, defEnrolled: true,
                disProcessing: false, defProcessing: false,
                disCompleted: false, defCompleted: false
            },
            {
                id: 5, name: "6 заявка Железнодорожный",
                disEnrolled: true, defEnrolled: true,
                disProcessing: false, defProcessing: false,
                disCompleted: false, defCompleted: false
            }
        ]
    },
        {
            id: 1, TiketsDirect: [
                {
                    id: 0, name: "1 заявка Кировский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 1, name: "2 заявка Кировский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 2, name: "3 заявка Кировский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 3, name: "4 заявка Кировский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 4, name: "5 заявка Кировский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 5, name: "6 заявка Кировский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                }]
        },
        {
            id: 2, TiketsDirect: [
                {
                    id: 0, name: "1 заявка Ленинский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 1, name: "2 заявка Ленинский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 2, name: "3 заявка Ленинский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 3, name: "4 заявка Ленинский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 4, name: "5 заявка Ленинский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 5, name: "6 заявка Ленинский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                }]
        },
        {
            id: 3, TiketsDirect: [
                {
                    id: 0, name: "1 заявка Октябрьский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 1, name: "2 заявка Октябрьский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 2, name: "3 заявка Октябрьский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 3, name: "4 заявка Октябрьский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 4, name: "5 заявка Октябрьский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 5, name: "6 заявка Октябрьский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                }]
        },
        {
            id: 4, TiketsDirect: [
                {
                    id: 0, name: "1 заявка Свердловский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 1, name: "2 заявка Свердловский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 2, name: "3 заявка Свердловский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 3, name: "4 заявка Свердловский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 4, name: "5 заявка Свердловский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 5, name: "6 заявка Свердловский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                }]
        },
        {
            id: 5, TiketsDirect: [
                {
                    id: 0, name: "1 заявка Советский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 1, name: "2 заявка Советский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 2, name: "3 заявка Советский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 3, name: "4 заявка Советский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 4, name: "5 заявка Советский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 5, name: "6 заявка Советский",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                }]
        },
        {
            id: 6, TiketsDirect: [
                {
                    id: 0, name: "1 заявка Центральный",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 1, name: "2 заявка Центральный",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 2, name: "3 заявка Центральный",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 3, name: "4 заявка Центральный",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 4, name: "5 заявка Центральный",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                },
                {
                    id: 5, name: "6 заявка Центральный",
                    disEnrolled: true, defEnrolled: true,
                    disProcessing: false, defProcessing: false,
                    disCompleted: false, defCompleted: false
                }]
        }
    ],
    id: 0,
    ClassNameTickets: [
        {id: 0, name: "TicketsPage"},
        {id: 1, name: "TicketsContent"},
        {id: 2, name: "NameTickets"},
        {id: 3, name: "SelectTickets"},
        {id: 4, name: "TicketScroll"}
    ],
    NamesTickets: [
        {id: 0, name: "Заявки"},
        {id: 1, name: "Район:"},
        {id: 2, name: "Железнодорожный"},
        {id: 3, name: "Кировский"},
        {id: 4, name: "Ленинский"},
        {id: 5, name: "Октябрьский"},
        {id: 6, name: "Свердловский"},
        {id: 7, name: "Советский"},
        {id: 8, name: "Центральный"}
    ],
    optionValue: [
        {id: 0, value: 0},
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
        {id: 4, value: 4},
        {id: 5, value: 5},
        {id: 6, value: 6}
    ],
    ClassNameTicket: [{id: 0, name: "TicketContent"}],
    typeInputTicket: "radio",
    valueInputTicket: [{id: 0, value: 0}, {id: 1, value: 1}, {id: 2, value: 2}],
    NamesTicket: [{id: 0, name: "поступила"}, {id: 1, name: "в обработке"}, {id: 2, name: "выполнена"}]
}
const TicketReducer = (state = InitialState, action) => {
    /*state=this._state.PageTiket*/
    switch (action.type) {
        case onChangeRadioButTicActionType: {
            switch (action.value) {
                case "1":{
                    let stateCopy = {...state};
                    stateCopy.Directs = {...state.Directs};
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].defEnrolled = false;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].disEnrolled = true;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].defProcessing = true;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].disProcessing = true;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].defCompleted = false;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].disCompleted = false;
                    return stateCopy;
                }
                case "2":{
                    let stateCopy = {...state};
                    stateCopy.Directs = {...state.Directs};
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].defEnrolled = false;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].disEnrolled = true;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].disProcessing = true;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].defProcessing = false;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].defCompleted = true;
                    stateCopy.Directs[action.directid].TiketsDirect[action.tiketsid].disCompleted = true;
                    return stateCopy;
                }
            }
            break;
        }
        case selectDirectTicActionType: {
            let stateCopy = {...state};
            stateCopy.id = action.id;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const onChangeRadioButActionCreator = (value,directid, tiketsid) => (
    {type: onChangeRadioButTicActionType, value:value,directid: directid, tiketsid: tiketsid});

export const selectChangeActionCreator = (id) => ({type: selectDirectTicActionType, id: id});
export default TicketReducer;