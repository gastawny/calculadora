import './Toggle.css'
import { WiDaySunny } from 'react-icons/wi'
import { MdOutlineNightlight } from 'react-icons/md'

const Toggle = () => {
    return (
        <div className='Toggle'>
            <label >
                <input type="checkbox" className='checkbox-toggle' />
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