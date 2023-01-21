import './Tecla.scss'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { InputContext } from '../../contexts/input-context'

const Tecla = ({ children }) => {
    const { theme } = useContext(ThemeContext)
    const { changeInput } = useContext(InputContext)

    return (
        <button
            onClick={() => changeInput(children)}
            className={`Tecla ${theme}`}
        >{children}</button >
    )
}

export default Tecla