import './Toggle.scss'
import { WiDaySunny } from 'react-icons/wi'
import { MdOutlineNightlight } from 'react-icons/md'
import { useThemeContext } from '../../contexts/Theme'

const Toggle = () => {
    const { changeTheme } = useThemeContext()

    return (
        <div className='Toggle'>
            <label>
                <input type="checkbox" className='checkbox-toggle' onChange={() => changeTheme()} />
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