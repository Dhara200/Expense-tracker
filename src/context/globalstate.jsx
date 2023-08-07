import React,{createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//initial state

const InitialState = {
    transactions: []
}

//craeting context

export const GlobalContext = createContext(InitialState);

//provider
export const GlobalProvider = ({children}) => {
 const[state, dispatch] = useReducer(AppReducer, InitialState);


//Actions
function deletetransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload: id
    })
}

function addtransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload: transaction
    })
}

 return (<GlobalContext.Provider value = {{
    transactions: state.transactions,
    deletetransaction,
    addtransaction
 }}>
    {children}
 </GlobalContext.Provider>)
}