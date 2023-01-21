import './Calculadora.scss'
import Teclado from '../Teclado'
import Display from '../Display'
import { useCallback, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { InputContext } from '../../contexts/input-context'
import teclas from './teclas.js'

const Calculadora = () => {
    const [theme, setTheme] = useState(false)
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    const inputTeclado = useCallback(e => {
        teclas.forEach(teclas => teclas.forEach(tecla => {
            if (e.key === '=' || e.key == 'Enter')
                setResult(calcular(input).toString())
            else if (e.key == 'Backspace')
                setInput(input.slice(0, input.length - 1))
            else if (e.key?.type?.name === 'ImArrowLeft2')
                setInput(input.slice(0, input.length - 1))
            else if (e.key == tecla.teclado)
                setInput(input + e.key)
        }))
    })

    const calcular = expressao => {
        expressao = expressao.replaceAll('÷', '/')
        expressao = expressao.replaceAll('x', '*')
        return eval(expressao)
    }

    function changeTheme(theme) {
        setTheme(theme === 'Dark' ? 'Light' : 'Dark');
    }

    useEffect(() => {
        window.addEventListener('keydown', inputTeclado)
        return () => {
            window.removeEventListener("keydown", inputTeclado);
        }
    }, [inputTeclado])

    useEffect(() => {
        setInput(result)
    }, [result])

    function changeInput(newInput) {
        if (newInput?.props?.children === '=')
            setResult(calcular(input))
        else if (newInput == 'Backspace')
            setInput(input.slice(0, input.length - 1))
        else if (newInput?.type?.name === 'ImArrowLeft2')
            setInput(input.slice(0, input.length - 1))
        else if (newInput == newInput.teclado)
            setInput(input + newInput)
    }

    return (
        <div className={`Calculadora ${theme}`}>
            <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
                <InputContext.Provider value={{ input: input, changeInput: changeInput, result: result }}>
                    <Teclado teclas={teclas} />
                    <Display />
                </InputContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export default Calculadora