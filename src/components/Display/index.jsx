import './Display.scss'
import Toggle from '../Toggle'
import { AiOutlineHistory } from 'react-icons/ai'
import { useContext } from 'react'
import { useThemeContext } from '../../contexts/Theme'
import { InputContext } from '../../contexts/Input'

const Display = () => {
    const { theme } = useThemeContext()
    const { input } = useContext(InputContext)
    const { result } = useContext(InputContext)

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