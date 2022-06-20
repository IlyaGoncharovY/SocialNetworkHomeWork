import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from "./redux/State";


let renderThree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                // appState={store.getState()}
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderThree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderThree(state)
})


