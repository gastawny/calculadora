import './Display.scss'
import Toggle from '../Toggle'
import { AiOutlineHistory } from 'react-icons/ai'
import { useThemeContext } from '../../contexts/Theme'
import { useExpressaoContext } from '../../contexts/Expressao'

const Display = () => {
    const { theme } = useThemeContext()
    const { input, result } = useExpressaoContext()

    return (
        <div className={`Display ${theme}`}>
            <div className='container'>
                <div className='toggle'><Toggle /></div>
                <button className='btn-history'>
                    <AiOutlineHistory className='history' />
                </button>
                <input readOnly type="text" className='expressao' value={input} />
                <h1 className='igual'>=</h1>
                <input readOnly type="text" className='resultado' value={result} />
            </div>
        </div>
    )
}

export default Display