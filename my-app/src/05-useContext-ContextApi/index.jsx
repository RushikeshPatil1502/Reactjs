import { createContext, useState } from "react";

//Create context
// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext(null)

function GlobalState({children}){

    const [theme , setTheme] = useState('light')

    function handleChange(){
        setTheme(
            theme === 'light' ? 'dark' : 'light'
        )
    }

    return <GlobalContext.Provider value={{theme , handleChange}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalState
