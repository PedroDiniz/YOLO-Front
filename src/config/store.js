import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "../reducers";

const middle = [reduxThunk];

export default createStore(reducers, applyMiddleware(...middle));
