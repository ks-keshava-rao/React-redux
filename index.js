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
*/