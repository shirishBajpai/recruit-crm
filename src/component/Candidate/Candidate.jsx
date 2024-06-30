import { useEffect } from "react";
import Details from "../Details/Details";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import { getCandidateDetails } from "../../actions/candidate";
import { useDispatch, useSelector } from 'react-redux';
import './Candidate.css'

const Candidate = () => {
    const dispatch = useDispatch();
    const { candidate, isFetching, isError } = useSelector((state) => state?.candidateDetails) || {};

    useEffect(() => {
        dispatch(getCandidateDetails());
    }, [])

    return (
        <div className="candidate">
            {isFetching ?
                <div className="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> : isError ? "Error-occured" :
                    <>
                        <ProfileHeader candidate={candidate} />
                        <Details candidate={candidate?.job_details} />
                    </>
            }
        </div >
    )
}

export default Candidate;