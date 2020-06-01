import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { reducer } from './redux';
import { createStore, applyMiddleware } from 'redux';
import Storage from "redux-state-save";

const storage1 = new Storage();

storage1.setConfig({
    storage_type: "local_storage",
    local_key:'redux'
});
let store = createStore(reducer, applyMiddleware(storage1.saveState()));
 

store = storage1.loadState(store);


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
