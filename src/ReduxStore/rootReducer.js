import { combineReducers } from "redux";
import OurFoodReducer from "../Redux-State/our_foods/Our_Food_Reducer";

export const rootReducer = combineReducers({
    ourFood : OurFoodReducer
})