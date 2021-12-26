/* eslint-disable no-duplicate-case */
import { CREATE_POST, UPDATE_POST, DELETE_POST, READ_POST } from './../types/postConstants'

const initialState = {
    posts: [],
    post: {}
}

export default function postsReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case READ_POST:
            return {
                ...state,
                posts: action.payload
            }

        case CREATE_POST:

            return {
                ...state,
                post: action.payload,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }
        case UPDATE_POST: // todo 
            return {
                ...state
            }
        case DELETE_POST:
            return {
                ...state,
                post: action.payload,
                posts: state.posts.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}