import { useContext, useEffect, useState, createContext } from "react";
import { teclas, operacoes } from '../components/Calculadora/teclas.js'

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

    const getMatches = (string, regex) => {
        let i = 1
        let matches = [];
        let match;
        while (match = regex.exec(string))
            matches.push(match[i]);
        return matches;
    }

    const enviarResultado = resultado => {
        if (Number.isInteger(resultado))
            return resultado
        const numeroDeCasasDecimais = getMatches(`${resultado}`, /(?:\.)(\d+)(?:$)/gm)[0].length
        console.log(numeroDeCasasDecimais)
        if (numeroDeCasasDecimais > 8)
            return resultado.toFixed(8)
        return resultado.toFixed(numeroDeCasasDecimais)
    }

    const calcular = expressao => {
        if (expressao === '') return
        expressao = expressao.replaceAll('÷', '/')
        expressao = expressao.replaceAll('x', '*')
        if (expressao.includes('%')) {
            let novaExpressao = expressao
            let matches = getMatches(novaExpressao, /(?:^|[\+\-*\/])(\d+)(?:%)/gm)
            while (matches.length > 0) {
                novaExpressao = novaExpressao.replace('%', '')
                novaExpressao = novaExpressao.replace(matches[0], matches[0] + '*1/100')
                matches.shift()
            }
            return enviarResultado(eval(novaExpressao))
        }
        return enviarResultado(eval(expressao))
    }

    const inserirInput = newInput => {
        if (newInput === '=') {
            if (input === '') return
            return setResult(calcular(input).toString())
        }
        if (operacoes.includes(newInput)) {
            for (let i = 0; i < operacoes.length; i++) {
                if (input.length === 0) {
                    if (newInput === '+' || newInput === '-')
                        setInput(input => input + newInput)
                    return
                }
                if (input[input.length - 1] === operacoes[i])
                    return
                if (newInput === '%')
                    return setInput(input => input + '%x')
            }
            return setInput(input => input + newInput)
        }
        if (newInput === 'Backspace') {
            if (input[input.length - 1] === 'x' && input[input.length - 2] === '%')
                return setInput(input => input.slice(0, input.length - 2))
            return setInput(input => input.slice(0, input.length - 1))
        }
        if (newInput === 'AC')
            return setInput(() => '')
        if (newInput === 'C') {
            if (input[input.length - 1] === 'x' && input[input.length - 2] === '%')
                return setInput(input => input.slice(0, input.length - 2))
            if (operacoes.includes(input[input.length - 1]))
                return setInput(input => input.slice(0, -1))
            let expressao = input
            while (!operacoes.includes(expressao[expressao.length - 1]) && expressao !== '')
                expressao = expressao.slice(0, -1)
            return setInput(() => expressao)
        }
        if (newInput === '0' && getMatches(input, /(?:^|[\+\-*\/])(0+)$/gm).length !== 0)
            return
        if (input[input.length - 1] === '0')
            return setInput(input => input.replace(/.$/, newInput))
        return setInput(input => input + newInput)
    }

    const InputTecla = newInput => {
        if (newInput?.props?.children === '=')
            inserirInput('=')
        else if (newInput?.type?.name === 'ImArrowLeft2')
            inserirInput('Backspace')
        else teclas.forEach(teclas => teclas.forEach(tecla => {
            if (newInput == tecla.tecla)
                inserirInput(newInput)
        }))
    }

    const inputTeclado = e => {
        if (e.key === 'Enter')
            inserirInput('=')
        else if (e.key?.type?.name === 'ImArrowLeft2')
            inserirInput('Backspace')
        else if (e.key === '*')
            inserirInput('x')
        else if (e.key === '/')
            inserirInput('÷')
        else teclas.forEach(teclas => teclas.forEach(tecla => {
            if (e.key == tecla.teclado)
                inserirInput(e.key)
        }))
    }

    useEffect(() => {
        setInput(result)
    }, [result])

    return {
        input,
        result,
        inputTeclado,
        InputTecla
    }
}