import axios from 'axios';

const initialState = {
    loading: false,
    articles: []
};

const PENDING = 'PENDING';
const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING})
    let articles = await axios.get('/api/medium').then(res => res.data);
    dispatch({type: REQUEST_ARTICLES, payload: articles})
};


// const mediumReducer = (state = initialState, action) => {
//     return state
// }

export default function mediumReducer(state = initialState, action) {
    switch (action.type) {
        case PENDING:
            return {...state, loading: true};
        case REQUEST_ARTICLES:
            return {loading: false, articles: action.payload};
        default:
            return state;
    }
}