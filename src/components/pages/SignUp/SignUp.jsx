import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import GreenLogin from '../../../assets/lotties/Greenlogin.json'

const SignUp = () => {

    const { signUp } = useContext(AuthContext);

    const [regError, setRegErro] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        const upperCase = /[A-Z]/.test(password);
        const lowerCase = /[a-z]/.test(password);
        const number = /[0-9]/.test(password);
        const specialChar = /[!@#$%^&*(|/)]/.test(password);

        setRegErro('');
        setSuccess('');

        
        if (!upperCase) {
            setRegErro('Password must contain an Uppercase Character.');
            return;
        }
        
        if (!lowerCase) {
            setRegErro('Password must contain a Lowercase Character.');
            return;
        }
        
        if (!number) {
            setRegErro('Password must contain a Number.');
            return;
        }
        
        if (!specialChar) {
            setRegErro('Password must contain a Special Character.');
            return;
        }
        
        if (password.length < 10) {
            setRegErro('Password must be at least 10 Character.');
            return;
        }

        signUp(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Congratulations! You successfully signed-up');
            })
            .catch(error => {
                setRegErro(error.message);
            })


    }

    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse my-10">
                <div className='ml-4 mb-10 lg:m-3'>
                    <Lottie className='w-96' animationData={GreenLogin}></Lottie>
                    <p className="text-red-600 ml-4 text-center">{regError}</p>
                    <p className="text-green-600 ml-4 text-center">{success}</p>
                </div>
                <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Sign-up now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Sign-up</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;