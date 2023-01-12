import './Display.css'
import Toggle from '../Toggle'
import { AiOutlineHistory } from 'react-icons/ai'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'

const Display = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`Display ${theme}`}>
            <div className='toggle'><Toggle /></div>
            <button className='btn-history'>
                <AiOutlineHistory className='history' />
            </button>
            <input readOnly type="text" className='expressao' value={'1000x4+2x1'} />
            <h1 className='igual'>=</h1>
            <input readOnly type="text" className='resultado' value={4002} />
        </div>
    )
}

export default Display