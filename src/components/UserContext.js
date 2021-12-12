import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const userData = {
        name: null,
        level: 0,
        switches: {
            createForumButton: false,
            createTopicButton: false,
            createPostButton: false
        }
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