import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import allReducers from './reducers/';
import { Provider } from 'react-redux';
import WebPage from './components/webPage';
import { loadState, saveState } from './reducers/localStorage';

const initialState = loadState();
const store = createStore (allReducers, initialState, window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__());


store.subscribe((state)=> {
    saveState({
        todos: store.getState().todos
    });
});

ReactDOM.render(
    <Provider store={store}>
        <WebPage />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();





