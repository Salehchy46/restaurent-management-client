import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthContext from './AuthContext';
import auth from '../../../firebase/firebase.config';


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        loading,
        signUp,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;