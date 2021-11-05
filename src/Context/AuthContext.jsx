import React, {createContext} from 'react';
import useFirebase from "../Hooks/useFirebase";
export const AuthContextProvider = createContext('');
const AuthContext = ({children}) => {
    const allContext = useFirebase()
    return (
        <AuthContextProvider.Provider value={allContext}>
            {children}
        </AuthContextProvider.Provider>
    );
};
export default AuthContext;