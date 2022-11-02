import load from '../../img/load.svg'
import './load.css'

export function Load() {
    return(
        <div className='loading'>
            <img src={load} className="load" />
        </div>
    )
}