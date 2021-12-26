import { configureStore } from '@reduxjs/toolkit'
import postsReducer from "./reducers/postsReducer";

export const store = configureStore({
    reducer: {
        postsReducer
    },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())