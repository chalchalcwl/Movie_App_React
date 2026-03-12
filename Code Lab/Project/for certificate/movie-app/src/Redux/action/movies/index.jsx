import { ActionType } from "../action-type";

export const fetchMovies = (movies) => {
    // console.log(movies)
    return {
        type: ActionType.FETCH_MOVIES,
        payload: movies,
    }
}

export const selectMovie = (movie) => {
    return {
        type: ActionType.SELECT_MOVIE,
        payload: movie,
    }
}
export const RemoveSelectMovie = (movie) => {
    return {
        type: ActionType.REMOVE_SELECTED_MOVIE,
        payload: movie,
    }
}