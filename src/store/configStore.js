import { createStore, combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import userDetailsReducer from "../reducers/userDetailsReducer";

const configStore = () => {
    const store = createStore(combineReducers({
        loginStatus : loginReducer,
        userDetails : userDetailsReducer
    }))
    
    return store
}

export default configStore