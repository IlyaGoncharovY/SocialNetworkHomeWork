import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from 'react-router-dom';
import s from "./Navbar.module.css"

export default function Navbar() {
    return (
        <Paper sx={{width: 200, }} className={s.nav}>
            <MenuList>
                <MenuItem>{<NavLink to="/profile">Profile</NavLink>}</MenuItem>
                <MenuItem>{<NavLink to="/dialogs">Messages</NavLink>}</MenuItem>
                <MenuItem>{<NavLink to="/users">Users</NavLink>}</MenuItem>
                <MenuItem>{<NavLink to="/news">News</NavLink>}</MenuItem>
                <MenuItem>{<NavLink to="/music">Music</NavLink>}</MenuItem>
                <MenuItem>{<NavLink to="/settings">Settings</NavLink>}</MenuItem>
            </MenuList>
        </Paper>
    );
}

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import {NavLink} from 'react-router-dom';
//
// export default function Navbar() {
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//
//     return (
//         <div>
//             <Button
//                 id="basic-button"
//                 aria-controls={open ? 'basic-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}
//             >
//                 Menu
//             </Button>
//             <Menu
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 MenuListProps={{
//                     'aria-labelledby': 'basic-button',
//                 }}
//             >
//                 <MenuItem onClick={handleClose}>{<NavLink to="/profile">Profile</NavLink>}</MenuItem>
//                 <MenuItem onClick={handleClose}>{<NavLink to="/dialogs">Messages</NavLink>}</MenuItem>
//                 <MenuItem onClick={handleClose}>{<NavLink to="/users">Users</NavLink>}</MenuItem>
//                 <MenuItem onClick={handleClose}>{<NavLink to="/news">News</NavLink>}</MenuItem>
//                 <MenuItem onClick={handleClose}>{<NavLink to="/music">Music</NavLink>}</MenuItem>
//                 <MenuItem onClick={handleClose}>{<NavLink to="/settings">Settings</NavLink>}</MenuItem>
//             </Menu>
//         </div>
//     );
// }

// import React from 'react';
// import s from "./Navbar.module.css";
// import {NavLink} from "react-router-dom";
//
// export const Navbar = () => {
//     return (
//         <nav className={s.nav}>
//             <div className={s.item}>
//                 <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
//             </div>
//             <div className={`${s.item} ${s.active}`}>
//                 <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
//             </div>
//             <div className={s.item}>
//                 <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
//             </div>
//             <div className={s.item}>
//                 <NavLink to="/news" activeClassName={s.active}>News</NavLink>
//             </div>
//             <div className={s.item}>
//                 <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
//             </div>
//             <div className={s.item}>
//                 <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
//             </div>
//         </nav>
//     );
// };



