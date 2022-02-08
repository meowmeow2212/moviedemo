import { combineReducers } from "redux";
import listMoviceReducer from "./../../container/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "./../../container/HomeTemplate/DetailPage/modules/reducer";

const rootReducer = combineReducers({
  //key: value
  listMoviceReducer,
  detailMovieReducer,
});

export default rootReducer;
