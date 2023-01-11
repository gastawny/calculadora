import './Tecla.css'
import { ImArrowLeft2 } from 'react-icons/im'

const Tecla = ({ children }) => {
    return (
        <button className='Tecla'>{children}</button>
    )
}

export default Tecla