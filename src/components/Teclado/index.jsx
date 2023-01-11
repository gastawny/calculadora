import Tecla from '../Tecla'
import './Teclado.css'

const Teclado = ({ teclas }) => {
    return (
        <div className='Teclado'>
            <div className='topBar'>
                {teclas[0].map(tecla => <Tecla>{tecla.tecla}</Tecla>)}
            </div>
            <div className='numeros'>
                {teclas[1].map(tecla => <Tecla>{tecla.tecla}</Tecla>)}
            </div>
            <div className='sideBar'>
                {teclas[2].map(tecla => <Tecla>{tecla.tecla}</Tecla>)}
            </div>
        </div>
    )
}

export default Teclado