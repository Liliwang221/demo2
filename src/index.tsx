import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import StoreContext from './context/StoreContext'
import store from './store/index'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(<StoreContext.Provider value={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</StoreContext.Provider>,document.getElementById('root'))