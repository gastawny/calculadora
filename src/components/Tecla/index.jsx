import './Tecla.scss'
import { useThemeContext } from '../../contexts/Theme'
import { useExpressaoContext } from '../../contexts/Expressao'

const Tecla = ({ children }) => {
    const { theme } = useThemeContext()
    const { changeInput } = useExpressaoContext()

    return (
        <button
            onClick={() => changeInput(children)}
            className={`Tecla ${theme}`}
        >
            {children}
        </button>
    )
}

export default Tecla