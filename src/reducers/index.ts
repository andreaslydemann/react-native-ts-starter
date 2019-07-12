import { combineReducers } from "redux";
import { RootState } from "../types/states";
import authReducer from "./auth.reducer";

const reducers = combineReducers<RootState>({
  auth: authReducer
});

export default reducers;
