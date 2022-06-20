import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {StateType} from "./redux/State";
import {Provider} from "react-redux";
import {store} from "./redux/r-store";


// let renderThree = (/*state: StateType*/) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App
                // // appState={store.getState()}
                // state={state}
                // // store={store}
                // dispatch={store.dispatch.bind(store)}
            />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }

// renderThree(
//     store.getState()
// )
// store.subscribe(() => {
//     let state = store.getState()
//     renderThree(state)
// })


