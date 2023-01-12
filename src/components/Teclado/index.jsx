import Tecla from '../Tecla'
import './Teclado.css'

const Teclado = ({ teclas }) => {
    return (
        <div className='Teclado'>
            <div className='Conteudo'>
                <div className='leftSideBar'>
                    <div className='topBar'>
                        {teclas[0].map((tecla, index) => <Tecla key={index}>{tecla.tecla}</Tecla>)}
                    </div>
                    <div className='numeros'>
                        {teclas[1].map((tecla, index) => <Tecla key={index}>{tecla.tecla}</Tecla>)}
                    </div>
                </div>
                <div className='rightSideBar'>
                    {teclas[2].map((tecla, index) => <Tecla key={index}>{tecla.tecla}</Tecla>)}
                </div>
            </div>
        </div>
    )
}

export default Teclado