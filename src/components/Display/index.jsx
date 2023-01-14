import './Display.css'
import Toggle from '../Toggle'
import { AiOutlineHistory } from 'react-icons/ai'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { InputContext } from '../../contexts/input-context'

const Display = () => {
    const { theme } = useContext(ThemeContext)
    const { input } = useContext(InputContext)
    const { result } = useContext(InputContext)

    return (
        <div className={`Display ${theme}`}>
            <div className='toggle'><Toggle /></div>
            <button className='btn-history'>
                <AiOutlineHistory className='history' />
            </button>
            <input readOnly type="text" className='expressao' value={input} />
            <h1 className='igual'>=</h1>
            <input readOnly type="text" className='resultado' value={result} />
        </div>
    )
}

export default Display