import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {NavLink} from 'react-router-dom';
import s from "./Header.module.css"

type HeaderType = {
    login: string | null
    isAuth: boolean
    // getUserData: () => void
    logOut: () => void
}

export default function Header(props: HeaderType) {
    return (
        <Box sx={{ flexGrow: 1 }} className={s.header}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/*<MenuIcon/>*/}
                        {/*<Navbar/>*/}
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hi! This is Ilya Goncharov's social network
                    </Typography>
                    {    props.isAuth
                        ? <div>{props.login}
                            <Button color="inherit" onClick={props.logOut}>Logout</Button>
                        </div>
                        : <NavLink to={"/login"}>Login</NavLink>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

// import React from 'react';
// import {NavLink} from 'react-router-dom';
// import s from "./Header.module.css";
// import {dataType, getUserData} from "../../redux/auth-reducer";

// export const Header = (props: HeaderType) => {
//     return (
//         <header className={s.header}>
//             <img className={s.header_img}
//                  src="https://avatars.mds.yandex.net/i?id=3b84ba0a875426c558f8592865b5fa51-5265887-images-thumbs&n=13"
//                  alt="avatar"/>
//             <div className={s.loginBlock}>
//                 {props.isAuth
//                     ? <div>{props.login}
//                         <button onClick={props.logOut}>LogOut</button>
//                     </div>
//                     : <NavLink to={"/login"}>Login</NavLink>}
//             </div>
//         </header>
//     );
// };

