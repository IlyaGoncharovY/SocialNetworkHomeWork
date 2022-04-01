import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

/*// начинать с 15 урока.*/

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
            <Dialogs/>
            </div>
            {/*<Profile/>*/}

        </div>
    );
}

export default App;
