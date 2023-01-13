import './Calculadora.css'
import Teclado from '../Teclado'
import { ImArrowLeft2 } from 'react-icons/im'
import Display from '../Display'
import { useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { InputContext } from '../../contexts/input-context'

const Calculadora = () => {
    const teclas = [
        [
            {
                tecla: 'AC',
                tipo: 0,
                teclado: null,
            },
            {
                tecla: 'C',
                tipo: 5,
                teclado: null,
            },
            {
                tecla: <ImArrowLeft2 size={24} />,
                tipo: 3,
                teclado: 'Backspace',
            }
        ],
        [
            {
                tecla: '7',
                tipo: 2,
                teclado: '7',
            },
            {
                tecla: '8',
                tipo: 2,
                teclado: '8',
            },
            {
                tecla: '9',
                tipo: 2,
                teclado: '9',
            },
            {
                tecla: '4',
                tipo: 2,
                teclado: '4',
            },
            {
                tecla: '5',
                tipo: 2,
                teclado: '5',
            },
            {
                tecla: '6',
                tipo: 2,
                teclado: '6',
            },
            {
                tecla: '1',
                tipo: 2,
                teclado: '1',
            },
            {
                tecla: '2',
                tipo: 2,
                teclado: '2',
            },
            {
                tecla: '3',
                tipo: 2,
                teclado: '3',
            },
            {
                tecla: '.',
                tipo: 2,
                teclado: '.'
            },
            {
                tecla: '0',
                tipo: 2,
                teclado: '0'
            },
            {
                tecla: '%',
                tipo: 1,
                teclado: '%'
            },
        ],
        [
            {
                tecla: '÷',
                tipo: 1,
                teclado: '/',
            },
            {
                tecla: 'x',
                tipo: 1,
                teclado: '*',
            },
            {
                tecla: '-',
                tipo: 1,
                teclado: '-',
            },
            {
                tecla: '+',
                tipo: 1,
                teclado: '+',
            },
            {
                tecla: <span className='igual'>=</span>,
                tipo: 4,
                teclado: '='
            },
        ]
    ]
    const [theme, setTheme] = useState(false)
    const [input, setInput] = useState('')
    let a = 0
    function changeTheme(theme) {
        setTheme(theme === 'Dark' ? 'Light' : 'Dark');
    }
    function changeInput(newInput) {
        // if (newInput?.props?.children === '=')
        //     calcular()
        if (newInput == 'Backspace')
            setInput(input.slice(0, input.length - 1))
        else if (newInput?.type?.name === 'ImArrowLeft2')
            setInput(input.slice(0, input.length - 1))
        else
            setInput(input + newInput)
    }

    useEffect(() => {
        console.log(input)
    }, [input])

    return (
        <div className={`Calculadora ${theme}`}>
            <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
                <InputContext.Provider value={{ input: input, changeInput: changeInput }}>
                    <Teclado teclas={teclas} />
                    <Display />
                </InputContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export default Calculadora