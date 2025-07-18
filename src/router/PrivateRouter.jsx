import React, { useContext } from 'react';
import AuthContext from '../components/contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className='loading loading-infinity loading-xl mx-auto flex justify-center my-[209px]'></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRouter;