import Translations from '../Common/Translations'
import './Details.css'

const Details = ({ candidate = {} }) => {
    return (
        <div className="grid-container">
            {Object.keys(candidate).map((detail) =>
                <div className="grid-item" key={detail}>
                    <div className='label'><Translations id={detail} /></div>
                    <div className='value'>{candidate[detail]}</div>
                </div>
            )}
        </div>
    )
}

export default Details;