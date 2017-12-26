import { ADD_COMPETITION, DELETE_COMPETITION } from './../actions/competitionsAction';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_COMPETITION:
            if (state.map(competition => competition.id).includes(action.competition.id)) {
                return state;
            }
            return [action.competition, ...state];


        case DELETE_COMPETITION: {
            const newState = [...state];
            const index = newState.findIndex(c => c.id === action.competition.id);
            if (index !== -1) {
                newState.splice(index, 1);
                console.log(`competition deleted at ${index}`);
            }
            return newState;
        }

        default:
            return state;
    }
};