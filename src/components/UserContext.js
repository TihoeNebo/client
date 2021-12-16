import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const userData = {
        name: null,
        level: 0
    }
    const [context, setContext] = useState(userData);

    return (
        <UserContext.Provider value={[context, setContext]}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    return useContext(UserContext);
}