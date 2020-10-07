import { combineReducers } from "redux";
import { BurgerRedux } from "./BurgerReducer";

export const RootRedux = combineReducers({
    BurgerCanLay: BurgerRedux
})