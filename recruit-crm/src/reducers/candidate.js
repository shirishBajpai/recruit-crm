import {
	CANDIDATE
} from './reduxConstants';


const initialState = {

};

const candidateDetails = (state = initialState, action) => {
	switch (action.type) {
		case CANDIDATE:
			return { candidate: action.payload };

		default:
			return state;
	}
};

export default candidateDetails;
