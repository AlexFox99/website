const onChangeProcessingTicActionType = 'ON-CHANGE-PROCESSING-TIC';
const onChangeCompletedTicActionType = 'ON-CHANGE-COMPLETED-TIC';
const selectDirectTicActionType = 'SELECT-DIRECT-TIC';
let InitialState={
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
const TicketReducer = (state=InitialState, action)=>{
    /*state=this._state.PageTiket*/
    switch (action.type) {
        case onChangeProcessingTicActionType:
            state.Directs[action.directid].TiketsDirect[action.tiketsid].defEnrolled=false;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].disEnrolled=true;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].defProcessing=true;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].disProcessing=true;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].defCompleted=false;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].disCompleted=false;
            return state;
        case onChangeCompletedTicActionType:
            state.Directs[action.directid].TiketsDirect[action.tiketsid].defEnrolled=false;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].disEnrolled=true;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].defProcessing=false;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].disProcessing=true;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].defCompleted=true;
            state.Directs[action.directid].TiketsDirect[action.tiketsid].disCompleted=true;
            return state;
        case selectDirectTicActionType:
            state.id=action.id;
            return state;
        default:return state;
    }
}
export const onChangeProcessingActionCreator=(directid,tiketsid)=>(
    {type: onChangeProcessingTicActionType, directid:directid, tiketsid:tiketsid});
export const onChangeCompletedActionCreator=(directid,tiketsid)=>(
    {type: onChangeCompletedTicActionType, directid:directid, tiketsid:tiketsid});
export const selectChangeActionCreator=(id)=>({type: selectDirectTicActionType,id:id});
export default TicketReducer;