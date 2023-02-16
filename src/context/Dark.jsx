import { createContext, useState } from "react";

export const Dark = createContext(true)

export const DarkProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)   
    }           

    return(
        <Dark.Provider value={{darkMode,toggleDarkMode}}>
            {children}
        </Dark.Provider>
    )
}