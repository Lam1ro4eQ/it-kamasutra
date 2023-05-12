import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from "redux";


const initialState = [
    'Smaills like spirit',
    'Enter Sandman'
]

function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }
    console.log(action)
    return state
}

const store = createStore(playlist);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();

// import {createStore} from "redux";
//
// function playlist(state=[], action) {
//     if (action.type === 'ADD_TRACK') {
//         return  [
//             ...state,
//             action.payload
//         ]
//     }
//     console.log(action)
//     return state
// }
//
// const store = createStore(playlist);
//
//
// store.subscribe(()=> {
//     console.log('subscribe', store.getState())
// })
//
//
// store.dispatch({ type: 'ADD_TRACK', payload: "Smaills like spirit"})
// store.dispatch({ type: 'ADD_TRACK', payload: "Enter Sandman"})
