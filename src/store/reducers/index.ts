import {combineReducers} from "redux";
import {tz1Reducer} from "./tz1Reducer";

export  const  rootReducer = combineReducers(
    {
        tz1: tz1Reducer,
    }
)

export  type RootState = ReturnType<typeof rootReducer>;