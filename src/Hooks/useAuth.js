import {AuthContextProvider} from "../Context/AuthContext";
import {useContext} from "react";
const useAuth = () => {
    return useContext(AuthContextProvider)
};
export default useAuth;