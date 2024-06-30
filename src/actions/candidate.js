import axios from "axios";
import { CANDIDATE, CANDIDATE_ERROR } from "../reducers/reduxConstants";

export const updateCandidate = (payload)=>{
    return {
        type: CANDIDATE,
        payload: payload
    }
}

export const getCandidateDetails = () => {
    return (dispatch) => { 
        axios.get('http://localhost:3001/candidate-details').then((response) => {
            dispatch(updateCandidate(response?.data?.candidate));
        }).catch(()=> {
            dispatch({type: CANDIDATE_ERROR})
        });
    }
}

export const putCandidateDetails = (payload) => {
    return (dispatch) => {
        axios.put('http://localhost:3001/candidate-details', payload).catch(()=> {
            console.log("not able to put Data");
            // dispatch({type: CANDIDATE_ERROR})
        });
    }
}