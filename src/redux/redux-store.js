import {combineReducers, createStore} from "redux";
import EntranceReducer from "./reducer/EntranceReducer";
import RegistrationReducer from "./reducer/RegistrationReducer";
import TicketInfoReducer from "./reducer/TicketInfoReducer";
import ForgotReducer from "./reducer/ForgotReducer";
import AppReducer from "./reducer/AppReducer";
import TicketReducer from "./reducer/TicketReducer";

let reducers = combineReducers({
        ForApp: AppReducer,
        PageEntrance: EntranceReducer,
        PageReg: RegistrationReducer,
        PageForPas: ForgotReducer,
        PageTicket:TicketReducer,
        PageTicketInfo:TicketInfoReducer,
    }
);
let store = createStore(reducers);

export default store;