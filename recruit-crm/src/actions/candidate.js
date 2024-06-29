import axios from "axios";
import { CANDIDATE } from "../reducers/reduxConstants";

export const updateCandidate = (payload)=>{
    return {
        type: CANDIDATE,
        payload: payload
    }
}

export const getCandidateDetails = () => {
    return (dispatch) => { axios.get('http://localhost:3001/candidate-details').then((response) => {
        dispatch(updateCandidate(response?.data?.candidate));
        });
    }
}