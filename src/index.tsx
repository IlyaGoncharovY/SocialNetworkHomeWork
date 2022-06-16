import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/r-store";

let renderThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                // appState={store.getState()}
                //  store={store}
                //  dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderThree()
store.subscribe(renderThree)


