import { ImArrowLeft2 } from 'react-icons/im'

export const teclas = [
    [
        {
            tecla: 'AC',
            teclado: null,
        },
        {
            tecla: 'C',
            teclado: null,
        },
        {
            tecla: <ImArrowLeft2 size={24} />,
            teclado: 'Backspace',
        }
    ],
    [
        {
            tecla: '7',
            teclado: '7',
        },
        {
            tecla: '8',
            teclado: '8',
        },
        {
            tecla: '9',
            teclado: '9',
        },
        {
            tecla: '4',
            teclado: '4',
        },
        {
            tecla: '5',
            teclado: '5',
        },
        {
            tecla: '6',
            teclado: '6',
        },
        {
            tecla: '1',
            teclado: '1',
        },
        {
            tecla: '2',
            teclado: '2',
        },
        {
            tecla: '3',
            teclado: '3',
        },
        {
            tecla: '.',
            teclado: '.'
        },
        {
            tecla: '0',
            teclado: '0'
        },
        {
            tecla: '%',
            teclado: '%'
        },
    ],
    [
        {
            tecla: '÷',
            teclado: '/',
        },
        {
            tecla: 'x',
            teclado: '*',
        },
        {
            tecla: '-',
            teclado: '-',
        },
        {
            tecla: '+',
            teclado: '+',
        },
        {
            tecla: <span className='igual'>=</span>,
            teclado: '='
        },
    ]
]

export const operacoes = ['x', '÷', '-', '+', '%']