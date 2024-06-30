import {
	CANDIDATE,
	CANDIDATE_ERROR
} from './reduxConstants';


const initialState = {
	candidate : {},
	isFetching : true,
	isError: false
};

const candidateDetails = (state = initialState, action) => {
	switch (action.type) {
		
		case CANDIDATE:
			return { candidate: action.payload, isFetching: false };
		case CANDIDATE_ERROR:
			return { isError: true, isFetching: false };
		default:
			return state;
	}
};

export default candidateDetails;
