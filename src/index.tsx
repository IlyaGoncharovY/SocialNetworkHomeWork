import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./State/State";




let renderThree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderThree(store.getState())
store.subscribe(renderThree)


