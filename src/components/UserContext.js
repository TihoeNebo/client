import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const userData = {
        user: { }
    }
    
    class User {
        constructor({ name = "Гость", level = 0, id = null }) {
            this.name = name;
            this.level = level;
            this.id = id;
        }
        
    }
    
    const [context, setContext] = useState({ ...userData, user: new User(userData.user) });

    return (
        <UserContext.Provider value={[context, setContext]}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    return useContext(UserContext);
}