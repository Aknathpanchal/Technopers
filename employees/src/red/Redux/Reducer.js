import * as types from "./ActionTypes"

const initialState={
    datas:[],
    isLoading:false,
    isError:false,
}
const reducer = (state = initialState, action)=>{
    const {type,payload}=action;
    console.log(payload)
    switch(type){

        case types.GET_LISTS_REQUEST:
        return{

            ...state,
            todos:[],
            isLoading:true,
            isError:false,
        }

        case types.GET_LISTS_SUCCESS:
        return{
            ...state,
            todos:payload,
            isLoading:false,
            isError:false,
        }

        case types.GET_LISTS_FAILURE:
        return{
            ...state,
            todos:[],
            isLoading:false,
            isError:true,
        }


        case types.ADD_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
    
            case types.ADD_SUCCESS:
                let newTodos=[...state.todos,payload]
            return{
                ...state,
                todos:newTodos,
                isLoading:false,
                isError:false,
            }
    
            case types.ADD_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }


            // case types.TOGGLE_REQUEST:
            //     return{
            //         ...state,
            //         isLoading:true,
            //         isError:false,
            //     }
        
                // case types.TOGGLE_TODO_SUCCESS:
                //     let newToggleTodos=state.todos.map((item) =>
                //      item.id === payload.id ? payload : item
                //         );
                // return{
                //     ...state,
                //     todos:newToggleTodos,
                //     isLoading:false,
                //     isError:false,
                // }
        
                // case types.TOGGLE_TODO_FAILURE:
                // return{
                //     ...state,
                //     isLoading:false,
                //     isError:true,
                // }
        default:
            return state;
    }
}

export{reducer}