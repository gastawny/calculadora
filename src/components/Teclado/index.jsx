import Tecla from '../Tecla'
import './Teclado.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { InputContext } from '../../contexts/input-context'

const Teclado = ({ teclas }) => {
    const { theme } = useContext(ThemeContext)
    const { changeInput } = useContext(InputContext)
    let a = 0
    document.addEventListener('keydown', e => {
        teclas.forEach(teclas => teclas.forEach(tecla => {
            if (a) return
            if (e.key == tecla.teclado) {
                changeInput(tecla.tecla)
                a++
            }
            else if (e.key == 'Enter')
                changeInput('=')
        }))

    })

    return (
        <div className={`Teclado ${theme}`}>
            <div className='Conteudo'>
                <div className='leftSideBar'>
                    <div className='topBar'>
                        {teclas[0].map((tecla, index) => <Tecla teclado={tecla.teclado} key={index}>{tecla.tecla}</Tecla>)}
                    </div>
                    <div className='numeros'>
                        {teclas[1].map((tecla, index) => <Tecla teclado={tecla.teclado} key={index}>{tecla.tecla}</Tecla>)}
                    </div>
                </div>
                <div className='rightSideBar'>
                    {teclas[2].map((tecla, index) => <Tecla teclado={tecla.teclado} key={index}>{tecla.tecla}</Tecla>)}
                </div>
            </div>
        </div>
    )
}

export default Teclado