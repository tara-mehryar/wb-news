const initialState = {
    loading: false,
    articles: []
};

const hackerNewsReducer = (state = initialState, action) => {
    return state
}

export default hackerNewsReducer

// Different solution below:
// export default function hackerNewsReducer(state = initialState, action){
//     return state
// }