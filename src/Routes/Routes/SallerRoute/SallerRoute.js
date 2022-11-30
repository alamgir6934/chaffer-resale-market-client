import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useSaller from '../../../Hooks/useSaller';
import Loading from '../../../Pages/Shared/Loading/Loading';

const SallerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSaller, isAdminLoading] = useSaller(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    // if (loading) {
    //     return <progress className='progress w-56'></progress>
    // }


    if (user && isSaller) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SallerRoute;