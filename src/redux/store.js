import Reducers from "../reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

const reducers = combineReducers({
  ...Reducers,
});

export default createStore(reducers, applyMiddleware(ReduxThunk));
