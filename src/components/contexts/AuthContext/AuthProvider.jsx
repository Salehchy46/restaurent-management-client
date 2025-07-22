import React, { useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import AuthContext from './AuthContext';
import auth from '../../../firebase/firebase.config';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('User is authinticated with:', currentUser);

            if(currentUser?.email) {
                const user = {email : currentUser.email}
                axios.post('http://localhost:5000/jwt', user, {
                    withCredentials: true,
                })
                .then(res => {
                    console.log('login with token', res.data);
                    setLoading(false);
                })
            }
            else 
            {
                axios.post('http://localhost:5000/logout', {}, {
                    withCredentials: true,
                })
                .then(res => {
                    console.log('logged out', res.data);
                    setLoading(false)
                })
            }
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const forgetPass = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSignIn,
        githubSignIn,
        forgetPass,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;