const redux = require('redux');
/* 
Store :- Holds the state of the application 
Action :- describes the changes in the state of the application  
Reducer :- Ties store and action together and carries out state transistion depending on the action ,
            it's a function that accepts state and actions as arguments , returns the next state of the application 
Principles 
 1. The state of the whole application is and object tree within a single store 
 2. The only way to change a state is to emit an action , an object describing the action 
 3. The only way to specify how the state tree is transformed by actions , pure reducers are written 
Action creator :- function that reutrns an action object with type property 
Redux store :-
 1. Holds the application state 
 2. Allows access to state via getstate()
 3. Allows state to be updated via dispatch(action)
 4. Registers listners via subscribe(listener) 
 5. Handles unregistering of via funtion returned by subscribe(listener)
*/
const CreateStore = redux.createStore;
const UPDATE_DATA = "fetch";
//action creator function 
const updateData = () => {
    return {
        type : UPDATE_DATA
    }
}
const initialState = {
    currentData : 20
}
const reducer = (prevState=initialState,action) =>{
    switch(action.type){
        case UPDATE_DATA : return {
            ...prevState,//for persisting the previous state other properties 
           currentData: prevState.currentData + 1
        }
        default : return prevState;
    }
};
const store = CreateStore(reducer)
console.log("Initial state",store.getState());
const unsubscribe = store.subscribe(()=>console.log("updated store",store.getState()));
store.dispatch(updateData())
store.dispatch(updateData())
store.dispatch(updateData())
unsubscribe();