import { ADD_MOVIE, DELETE_MOVIE } from '../actions/actionsTypes';
import { moviesData } from '../../constant/data';

const initialeState={liste:moviesData}

const movieReducer=(state=initialeState,action)=>{
    const {type,payload}=action
    switch (type){
        case ADD_MOVIE:
            return {...state,liste:[...state.liste,payload] }
        case DELETE_MOVIE:
            return {...state,
                liste:state.liste.filter((el)=>el.id!==payload) }
            default:
                return state
    }
}
export default movieReducer;


