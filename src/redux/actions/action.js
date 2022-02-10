import { ADD_MOVIE, DELETE_MOVIE } from "./actionsTypes"

export const AddNewMovie=(AddNewMovies)=>{
    return{
        type:ADD_MOVIE,
        payload:AddNewMovies
    }
}
export const DeleteMovie=(id)=>{
    return{
        type:DELETE_MOVIE,
        payload:id
    }
}