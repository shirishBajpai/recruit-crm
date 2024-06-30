import Translations from '../Common/Translations';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { putCandidateDetails, updateCandidate } from '../../actions/candidate';
import './InputDetails.css';
import { getCurrentDate } from '../Common/helper';
import Modal from "https://cdn.skypack.dev/react-modal@3.16.1";

const customStyles = {
    content: {
        margin: '5%',
        border: '0.5px ridge black',
        boxShadow: '0.5rem 0.5rem 2rem 0.5rem rgb(161, 161, 161)',
    },
};

const InputDetails = ({ handleClose, show, candidate }) => {
    const dispatch = useDispatch();
    const [basicInfo, setBasicInfo] = useState({})
    const [jobDetails, setJobDetails] = useState({})
    const { basic_info = {}, job_details = {} } = candidate || {}

    useEffect(() => {
        setBasicInfo(basic_info)
        setJobDetails(job_details)
    }, [candidate])

    const handleBasicInfo = (e, detail) => {
        setBasicInfo({ ...basicInfo, [detail]: e.target.value, last_update: getCurrentDate() })
    }

    const handleJobDetails = (e, detail) => {
        setJobDetails({ ...jobDetails, [detail]: e.target.value })
        setBasicInfo({ ...basicInfo, last_update: getCurrentDate() })
    }

    const handleSave = () => {
        dispatch(updateCandidate({ basic_info: basicInfo, job_details: jobDetails }))
        dispatch(putCandidateDetails({ basic_info: basicInfo, job_details: jobDetails }))
        handleClose()
    }


    return (

        <Modal
            isOpen={show}
            onRequestClose={handleClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {Object.keys(basicInfo).map((detail) =>
                !['last_update'].includes(detail) && <div className="form-field" key={detail}>
                    <label className="form-label">
                        <Translations id={detail} />
                    </label><br />
                    <input type="email" className="form-input" value={basicInfo[detail]} onChange={(e) => handleBasicInfo(e, detail)} />
                </div>
            )}
            {Object.keys(jobDetails).map((detail) =>
                <div className="form-field" key={detail}>
                    <label className="form-label">
                        <Translations id={detail} />
                    </label><br />
                    <input type="email" className="form-input" value={jobDetails[detail]} onChange={(e) => handleJobDetails(e, detail)} />
                </div>
            )}
            <div className='button'>
                <button onClick={handleClose} className="close-button">Close</button>
                <button onClick={handleSave} className="save-button">Save Changes</button>
            </div>
        </Modal >


    );
}

export default InputDetails;