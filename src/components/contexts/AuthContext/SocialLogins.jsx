import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogins = () => {

    const {googleSignIn, githubSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
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
            <button onClick={handleGoogleSignIn} className='btn w-full mb-1'><FaGoogle></FaGoogle>Google</button>
            <button onClick={handleGithubSignIn} className='btn w-full'><FaGithub></FaGithub>Github</button>
        </div>
    );
};

export default SocialLogins;