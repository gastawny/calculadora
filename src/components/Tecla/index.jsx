import './Tecla.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'

const Tecla = ({ children }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <button className={`Tecla ${theme}`}>{children}</button>
    )
}

export default Tecla