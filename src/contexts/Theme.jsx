import { useContext } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: 'Light',
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('Light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    function changeTheme() {
        setTheme(theme === 'Dark' ? 'Light' : 'Dark');
    }

    return {
        theme,
        changeTheme
    }
}