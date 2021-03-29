import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
//creating store
const store = createStore(rootReducer, composeWithDevTools());

export default store;
