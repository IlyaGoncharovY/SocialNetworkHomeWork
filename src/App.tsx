import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as https from "https";

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=3b84ba0a875426c558f8592865b5fa51-5265887-images-thumbs&n=13"
                    alt="avatar"/>
            </header>
            <nav className={"nav"}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={"content"}>
                <div>
                    <img
                        src={"https://wallpapershome.ru/images/wallpapers/nochnoe-nebo-1920x1080-5k-4k-zvezdi-gori-most-novaya-zelandiya-547.jpg"}
                        alt={"avatar"} width={"600"} height={"400"}/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
