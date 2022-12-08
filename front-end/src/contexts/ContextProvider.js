import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [busqueda, setBusqueda] = useState('');
    const [palabra, setPalabra] = useState([]);
    
    return (
        <StateContext.Provider value={{ busqueda, setBusqueda, palabra, setPalabra }}>
        {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);