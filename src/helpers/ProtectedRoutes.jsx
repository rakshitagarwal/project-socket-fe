import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getUserData } from './Utils';

const ProtectedRoutes = () => {
    const location = useLocation();
    const getUser = getUserData();
    // const { currentUser } = useSelector((state) => state);
    return (
        <>
            { getUser ? (
                <Outlet />
            ) : (
                <Navigate to="/login" state={{ from: location }} replace />
            )}
        </>
    );
}

export default ProtectedRoutes