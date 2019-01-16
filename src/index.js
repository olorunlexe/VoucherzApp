import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import {createStore,combineReducers} from 'redux';
import reducers from './store/reducers/mobilenavbar';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as Routes from './Constants/Routesconstants';
import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import MobilenavReducer from './store/reducers/mobilenavbar';
import NavigationbarReducer from './store/reducers/navigationbar';


const rootReducer = combineReducers(
    {
        mobRed:MobilenavReducer,
        navbar:NavigationbarReducer
    }
);
export const history = createBrowserHistory();


//create the store 
const store = createStore(
    rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//If true the router will use full page refreshes on page navigation.
const supportsHistory = 'pushState' in window.history
// this is the default behavior
const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
  }
const app = (
    <Provider store={store}>
    <BrowserRouter
        // basename={Routes.BASE_URL}
        forceRefresh={!supportsHistory}
        getUserConfirmation={getConfirmation}
        keyLength={12}
>
            <App/>
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(
    app
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
