import React, { createContext, useReducer, useEffect, useState } from 'react'
import { getThemeDB, setThemeDB } from './DbHandler/dbHandler';



export const ThemeContext = createContext();



const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHTMODE":
            return {
                darkMode: false,
            };
        case "DARKMODE":
            return { darkMode: true };
        default:
            return state;
    }
};

export function ThemeProvider(props) {


    // const theme = getThemeDB();

    // useEffect(() => {
    //     console.log('SOME STUPID STUFF')
    //     theme.then(req => JSON.parse(req)).then(json => { if (json !== null) console.log((json)) })
    // }, [theme])




    const [state, dispatch] = useReducer(themeReducer, false);

    return <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</ThemeContext.Provider>;
}