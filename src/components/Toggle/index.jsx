import './Toggle.css'
import { WiDaySunny } from 'react-icons/wi'
import { MdOutlineNightlight } from 'react-icons/md'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'

const Toggle = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className='Toggle'>
            <label>
                <input type="checkbox" className='checkbox-toggle' onChange={() => theme.changeTheme(theme.theme)} />
                <div className='btn-toggle'>
                    <span className='slider'></span>
                    <div className='icons'>
                        <WiDaySunny className='sol' />
                        <MdOutlineNightlight className='lua' />
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Toggle