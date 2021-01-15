import {combineReducers, createStore} from "redux";
import EntranceReducer from "./reducer/EntranceReducer";
import RegistrationReducer from "./reducer/RegistrationReducer";
import TicketReducer from "./reducer/TicketReducer";
import ForgotReducer from "./reducer/ForgotReducer";
import AppReducer from "./reducer/AppReducer";

let reducers=combineReducers({
    ForApp:AppReducer,
    PageEntrance:EntranceReducer,
    PageReg:RegistrationReducer,
    PageTicket:TicketReducer,
    PageForPas:ForgotReducer
    }
);
let store =createStore(reducers);

export default store;