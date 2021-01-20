import {combineReducers, createStore} from "redux";
import EntranceReducer from "./reducer/EntranceReducer";
import RegistrationReducer from "./reducer/RegistrationReducer";
import TicketInfoReducer from "./reducer/TicketInfoReducer";
import ForgotReducer from "./reducer/ForgotReducer";
import AppReducer from "./reducer/AppReducer";

let reducers = combineReducers({
        ForApp: AppReducer,
        PageEntrance: EntranceReducer,
        PageReg: RegistrationReducer,
        PageTicketInfo:TicketInfoReducer,
        PageForPas: ForgotReducer,

    }
);
let store = createStore(reducers);

export default store;