import { useEffect } from "react";
import Details from "../Details/Details";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import { getCandidateDetails } from "../../actions/candidate";
import { useDispatch, useSelector } from 'react-redux';
import './Candidate.css'

const Candidate = () => {
    const dispatch = useDispatch();
    const candidate = useSelector((state) => state?.candidateDetails?.candidate) || {};

    useEffect(() => {
        dispatch(getCandidateDetails());
    }, [])
    return (
        <div className="candidate">
            <ProfileHeader candidate={candidate} />
            <Details candidate={candidate?.job_details} />
        </div>
    )
}

export default Candidate;