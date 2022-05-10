import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./State/State";



export let renderThree = (state:any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
