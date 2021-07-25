import React, { createContext, useContext, useReducer } from 'react';


const UserContext = createContext();
const UserProvider = ({ reducer, initialState, children }) => {

    return(
        <UserContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </UserContext.Provider>
    )
}
const useUserContextValue = () => useContext(UserContext);

export { UserProvider, useUserContextValue }