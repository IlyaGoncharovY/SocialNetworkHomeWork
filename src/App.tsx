import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

/*// начинать с 15 урока.*/

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
