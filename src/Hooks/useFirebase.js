import { useState, useEffect } from "react";
import {signOut,updateProfile, onAuthStateChanged, signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,createUserWithEmailAndPassword  } from "firebase/auth";
import Authentication from "../Firebase/Initialize";
import { useHistory } from 'react-router'
Authentication()
const useFirebase = () =>{
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    const history = useHistory()
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    // Sine In With Google 
    const googleSineIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    // Sine In With Facebook
    const facebookSineIn = () =>{
        return signInWithPopup(auth, facebookProvider)
        // .then(result =>{
        //     const user = result.user
        //     setUser(user)
        // }).catch(error =>{
        //     console.log(error.message)
        // })
    }

    // Sine In With email and Password
    const emailAndPasswordSineIn = () =>{
        return signInWithEmailAndPassword(auth, email, password)
        // .then(result =>{
        //     const user = result.user
        //     setUser(user)
        // }).catch(error =>{
        //     console.log(error.message)
        // })
    }



    // Logout Function

    const logOut = () =>{
        return signOut(auth)
        // signOut(auth).then(() => {
        //     setUser({})
        // }).catch((error) => {
        //     console.log(error)
        // });
    }

    // Full Name Get
    const fullNameHandle = e =>{
        setFullName(e.target.value)
    }
    // Email Get
    const emailHandle = e =>{
        setEmail(e.target.value)
    }
    // Password Get
    const passwordHandle = e =>{
        setPassword(e.target.value)
    }

    // SetDisplay Name
    const setDisplayName = () =>{
        updateProfile(auth.currentUser,{
            displayName: fullName,
            photoURL: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
        }).then(result =>{
            console.log(result)
        }).catch(error =>{
            console.log(error.message)
        })
    }

    // Registration With Email & Password
    const newRegistration = () =>{
        return createUserWithEmailAndPassword(auth, email, password)
        // .then(result =>{
        //     const user = result.user
        //     setDisplayName()
        //     console.log('Userinfo: ',user)
        // }).catch(error =>{
        //     console.dir(error.message)
        // })
    }



    // onAuthStateChanged 
    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }
        })
    }, [])


    return {logOut,user,setUser, fullNameHandle, setDisplayName, googleSineIn, facebookSineIn, newRegistration, passwordHandle, emailHandle, emailAndPasswordSineIn}
}
export default useFirebase;
