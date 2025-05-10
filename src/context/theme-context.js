import {createContext, useContext, useReducer, useEffect} from "react"
import themeReducer from "./themeReducer";
export const ThemeContext = createContext();


const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || {primary: 'color-1', background: 'bg-1'}

export const ThemeProvider = ({children}) => {
    useReducer(themeReducer, initialThemeState);
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);

    const themeHandler = (buttonClassName) => {
        dispatchTheme({type: buttonClassName})
    }

    // Save theme settings to local storage

    useEffect(() => {
        localStorage.setItem('themeSettings', JSON.stringify(themeState))
    }, [themeState.primary, themeState.background])

    return <ThemeContext.Provider value={{themeState, themeHandler}}>{children}</ThemeContext.Provider>
}

//custom hook to use our theme  context whenever

export const useThemeContext = () => {
    return useContext(ThemeContext);
}