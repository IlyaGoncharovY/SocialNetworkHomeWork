import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, subscribe, updateNewPostText} from "./State/State";



let renderThree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderThree(state)
subscribe(renderThree)


