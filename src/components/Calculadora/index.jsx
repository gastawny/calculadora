import './Calculadora.css'
import Teclado from '../Teclado'
import { ImArrowLeft2 } from 'react-icons/im'

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

    return (
        <div className='Calculadora'>
            <Teclado teclas={teclas} />
        </div>
    )
}

export default Calculadora