// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// reportWebVitals();

import {createStore} from "redux";

function playlist(state=[], action) {
    if (action.type === 'ADD_TRACK') {
        return  [
            ...state,
            action.payload
        ]
    }
    console.log(action)
    return state
}

const store = createStore(playlist);


store.subscribe(()=> {
    console.log('subscribe', store.getState())
})


store.dispatch({ type: 'ADD_TRACK', payload: "Smaills like spirit"})
store.dispatch({ type: 'ADD_TRACK', payload: "Enter Sandman"})
