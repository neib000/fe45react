import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import formReducer from "./UserManagement/redux/reducers/form";
import userList from "./UserManagement/redux/reducers/userList";
import selectedUser from "./UserManagement/redux/reducers/selectedUser";
import formValidationReduder from "./form-validation/modules/reducer";

//Tạo reducer tổng (root)(
const reducer = combineReducers({
  // Đây là nơi lưu trữ tất cả dữ liệu của store
  isShow: formReducer,
  userList,
  selectedUser,
  formValidationReduder,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
