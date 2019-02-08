import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import reducers from './store/reducers/mobilenavbar';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import createBrowserHistory from 'history/createBrowserHistory'
import * as serviceWorker from './serviceWorker';
import MobilenavReducer from './store/reducers/mobilenavbar';
import NavigationbarReducer from './store/reducers/navigationbar';
import voucher from './Async_Reg_reduxthunk/Reducers/voucher';
import logger from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';



const rootReducer = combineReducers(
    {
        mobRed:MobilenavReducer,
        navbar:NavigationbarReducer,
        voucher
    }
);
export const history = createBrowserHistory();


//create the store 
const store = createStore(
    rootReducer,
    applyMiddleware(logger,thunkMiddleWare), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const app = (
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>
)
ReactDOM.render(
    app
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
