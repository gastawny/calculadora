import './Calculadora.scss'
import Teclado from '../Teclado'
import Display from '../Display'
import teclas from './teclas.js'
import { ThemeProvider } from '../../contexts/Theme'
import { ExpressaoProvider } from '../../contexts/Expressao'

const Calculadora = () => {
    return (
        <div className='Calculadora'>
            <ThemeProvider>
                <ExpressaoProvider>
                    <Display />
                    <Teclado teclas={teclas} />
                </ExpressaoProvider>
            </ThemeProvider>
        </div>
    )
}

export default Calculadora