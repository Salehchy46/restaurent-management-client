import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { FaGoogle } from "react-icons/fa";

const SocialLogins = () => {

    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <div className="divider divider-neutral">OR</div>
            <button onClick={handleGoogleSignIn} className='btn w-full'><FaGoogle></FaGoogle>Google</button>
        </div>
    );
};

export default SocialLogins;