import './Tecla.scss'
import { useContext } from 'react'
import { useThemeContext } from '../../contexts/Theme'
import { InputContext } from '../../contexts/Input'

const Tecla = ({ children }) => {
    const { theme } = useThemeContext()
    const { changeInput } = useContext(InputContext)

    return (
        <button
            onClick={() => changeInput(children)}
            className={`Tecla ${theme}`}
        >{children}</button >
    )
}

export default Tecla