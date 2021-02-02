import * as actionTypes from '../action/actions';

const initial_state = {
    input:''
};

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case actionTypes.INPUT:
            return {
                ...state,
                input: true
            };
        default:
            return state;
    }
}

export default reducer;