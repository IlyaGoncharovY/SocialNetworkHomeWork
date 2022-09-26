import React from 'react';
import s from "./preloader.module.css";
import preloader from "../../../assecs/image/1485.gif";
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";

export const Preloader = () => {
    return (
        <Box sx={{width: '100%'}}>
            <LinearProgress/>
        </Box>
    );
};

