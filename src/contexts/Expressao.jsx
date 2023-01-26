import { useContext, useEffect, useState, createContext } from "react";
import teclas from '../components/Calculadora/teclas.js'

export const ExpressaoContext = createContext()

export const ExpressaoProvider = ({ children }) => {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    return (
        <ExpressaoContext.Provider value={{ input, setInput, result, setResult }}>
            {children}
        </ExpressaoContext.Provider>
    )
}

export const useExpressaoContext = () => {
    const { input, setInput, result, setResult } = useContext(ExpressaoContext)

    const calcular = expressao => {
        if (expressao === '') return
        expressao = expressao.replaceAll('÷', '/')
        expressao = expressao.replaceAll('x', '*')
        return eval(expressao)
    }

    const changeInput = newInput => {
        if (newInput?.props?.children === '=')
            setResult(calcular(input))
        else if (newInput == 'Backspace')
            setInput(input.slice(0, input.length - 1))
        else if (newInput?.type?.name === 'ImArrowLeft2')
            setInput(input.slice(0, input.length - 1))
        else teclas.forEach(teclas => teclas.forEach(tecla => {
            if (newInput == tecla.tecla)
                setInput(input + newInput)
        }))

    }

    const inputTeclado = e => {
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
    }

    useEffect(() => {
        setInput(result)
    }, [result])

    return {
        input,
        result,
        calcular,
        inputTeclado,
        changeInput
    }
}