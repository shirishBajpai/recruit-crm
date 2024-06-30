import { useState } from 'react';
import InputDetails from '../../InputDetails/InputDetails';
import './ProfileActions.css';

const ProfileActions = ({ candidate }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='buttons'>
            <button className="button2">Contact Linked</button>
            <button className="button1">&#9733;</button>
            <button className="button1">&#x2726;</button>
            <button className="button1" onClick={handleShow}>&#9998;</button>
            <button className="button1">&#9479;</button>
            <InputDetails show={show} handleClose={handleClose} candidate={candidate} />
        </div>
    )
}

export default ProfileActions;