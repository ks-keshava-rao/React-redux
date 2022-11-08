const redux = require('redux');
const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const initialState ={
    loading :false,
    users : [],
    error : ""
}
const  FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const  FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

const fetchUsersRequest =  () =>{
    return {
        type : FETCH_USER_REQUEST
    }
}
const fetchUsersSuccess = users =>{
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}
const fetchUsersFailure = error => {
    return {
        type : FETCH_USER_FAILURE,
        payload : error 
    }
}
const reducer = (state = initialState , action ) =>{
    switch(action.type){
        case FETCH_USER_REQUEST : 
        return {
            ...state ,
            loading:true
        }
        case FETCH_USER_SUCCESS : 
        return {
            ...state ,
            users : action.payload,
            loading:false
        }
        case FETCH_USER_FAILURE : 
        return {
            ...state ,
            loading:false,
            users:[],
            error : action.error
        }
        default : return state
    }
}
const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data.map(user => user.id);
            dispatch(fetchUsersSuccess(users))
        })
        .catch((error)=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
//thunk middleware allows an action creator to return a function instead of an action object
// which can perform side effect like aynchronous tasks and also can dispatch reuglar actions which can be handled with reducer 
const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=> {console.log(store.getState())});
store.dispatch(fetchUser());
