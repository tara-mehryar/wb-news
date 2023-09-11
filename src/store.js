import { configureStore } from '@reduxjs/toolkit'
import hackerNewsReducer from './reducers/hackerNewsReducer'
import mediumReducer from './reducers/mediumReducer.js'

export default configureStore ({
    reducer: {
        hackerNews: hackerNewsReducer,
        medium: mediumReducer
    }
})