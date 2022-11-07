const redux = require('redux');
const CreateStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const combineReducers = redux.combineReducers;
// //action creator function 
let  cakeAC = () => {
    return {
        type : BUY_CAKE
    }
}
let  iceAC = () => {
    return {
        type : BUY_ICECREAM
    }
}
const initialCakeState = {
    noOfCakes : 20
}
const initialIceState = {
    noOfIceCreams : 20
}
const cakeReducer = (currentState = initialCakeState , action) =>{
    switch(action.type){
        case BUY_CAKE : return {
            ...currentState,
            noOfCakes : currentState.noOfCakes - 1 
        }
        default : return currentState;
    }
}
const iceReducer = (currentState = initialIceState , action) =>{
    switch(action.type){
        case BUY_ICECREAM : return {
            ...currentState,
            noOfIceCreams : currentState.noOfIceCreams - 1 
        }
        default : return currentState;
    }
}
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceReducer
})
const store = CreateStore(rootReducer);
console.log("Initial state",store.getState());
const unsubscribe = store.subscribe(()=>console.log("updated store",store.getState()));
store.dispatch(cakeAC())
store.dispatch(cakeAC())
store.dispatch(cakeAC())
store.dispatch(iceAC())
store.dispatch(iceAC())
store.dispatch(iceAC())
unsubscribe();
