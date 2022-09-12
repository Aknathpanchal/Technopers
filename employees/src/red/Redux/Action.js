import * as types from "./ActionTypes"
import axios from 'axios'

const getListRequest=()=>{
    return {type:types.GET_LISTS_REQUEST}
}

const getListSuccess=(payload)=>{
    return {type:types.GET_LISTS_SUCCESS, payload}
}

const getListFailure=()=>{
    return {type:types.GET_LISTS_FAILURE}
}


const addRequest=()=>{
    return {type:types.ADD_REQUEST}
}

const addSuccess=(payload)=>{
    return {type:types.ADD_SUCCESS,payload}
}
console.log(types.ADD_SUCCESS)

const addFailure=()=>{
    return {type:types.ADD_FAILURE}
}


// const toggleRequest=()=>{
//     return {type:types.TOGGLE_REQUEST}
// }

// const toggleSuccess=(payload)=>{
//     return {type:types.TOGGLE_SUCCESS,payload}
// }
// console.log(types.TOGGLE_SUCCESS)

// const toggleFailure=()=>{
//     return {type:types.TOGGLE_FAILURE}
// }


export{
         getListRequest,
         getListSuccess,
         getListFailure,
    
         addRequest,
         addSuccess,
         addFailure,

        //  toggleTodoRequest,
        //  toggleTodoSuccess,
        //  toggleTodoFailure
      };


      export const deletedata =(id)=> (dispatch) =>{
        dispatch({type:types.DELETE_REQUEST});
        return axios.delete(`http://localhost:8080/datas/${id}`)
        .then((r)=>{ 
        dispatch({type:types.DELETE_SUCCESS})})
        .catch((err)=>{
         dispatch({type:types.DELETE_FAILURE,payload:err})})
    }
    export const update = (id,payload) => (dispatch) =>{
        dispatch({type:types.EDIT_REQUEST});
        return axios.patch(`http://localhost:8080/datas/${id}`,payload)
        .then((r)=>{ 
        dispatch({type:types.EDIT_SUCCESS, payload:r.data})})
        .catch((err)=>{
         dispatch({type:types.EDIT_FAILURE})})
     } 