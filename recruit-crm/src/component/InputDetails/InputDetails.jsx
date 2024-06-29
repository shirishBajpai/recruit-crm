import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Translations from '../Common/Translations';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCandidate } from '../../actions/candidate';
import './InputDetails.css';
import { getCurrentDate } from '../Common/helper';

const InputDetails = ({ handleClose, handleShow, show, candidate }) => {
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
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Object.keys(basicInfo).map((detail) =>
                    !['last_update'].includes(detail) && <div className="mb-3" key={detail}>
                        <label for="exampleFormControlInput1" className="form-label">
                            <Translations id={detail} />
                        </label>
                        <input type="email" className="form-control" value={basicInfo[detail]} onChange={(e) => handleBasicInfo(e, detail)} />
                    </div>
                )}
                {Object.keys(jobDetails).map((detail) =>
                    <div className="mb-3" key={detail}>
                        <label for="exampleFormControlInput1" className="form-label">
                            <Translations id={detail} />
                        </label>
                        <input type="email" className="form-control" value={jobDetails[detail]} onChange={(e) => handleJobDetails(e, detail)} />
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InputDetails;