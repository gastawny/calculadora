import './Calculadora.scss'
import Teclado from '../Teclado'
import Display from '../Display'
import { useCallback, useEffect, useState } from 'react'
import { InputContext } from '../../contexts/Input'
import teclas from './teclas.js'
import { ThemeProvider } from '../../contexts/Theme'
import { useThemeContext } from '../../contexts/Theme'

const Calculadora = () => {
    const { theme } = useThemeContext()
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
        <div className={`Calculadora`}>
            <ThemeProvider>
                <InputContext.Provider value={{ input, changeInput, result }}>
                    <Display />
                    <Teclado teclas={teclas} />
                </InputContext.Provider>
            </ThemeProvider>
        </div>
    )
}

export default Calculadora