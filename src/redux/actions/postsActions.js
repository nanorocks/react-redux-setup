// postsActions.js
import { CREATE_POST, UPDATE_POST, DELETE_POST, READ_POST } from './../types/postConstants'

export function readPosts(posts) {
    return {
        type: READ_POST,
        payload: [...posts],
    }
}

export function addPost(item) {
    return {
        type: CREATE_POST,
        payload: item,
    }
}

export function updatePost(item) {
    return {
        type: UPDATE_POST,
        payload: item,
    }
}

export function deletePost(item) {
    return {
        type: DELETE_POST,
        payload: item,
    }
}
