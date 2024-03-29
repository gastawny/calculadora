import Tecla from '../Tecla'
import './Teclado.scss'
import { useThemeContext } from '../../contexts/Theme'
import { useEffect } from 'react'
import { useExpressaoContext } from '../../contexts/Expressao'

const Teclado = ({ teclas }) => {
    const { theme } = useThemeContext()
    const { inputTeclado } = useExpressaoContext()

    useEffect(() => {
        window.addEventListener('keydown', inputTeclado)
        return () => {
            window.removeEventListener("keydown", inputTeclado);
        }
    }, [inputTeclado])

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