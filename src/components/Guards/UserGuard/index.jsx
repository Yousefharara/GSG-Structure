import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../../router/paths';
import { ROLES } from '../../../constant';

const UserGuard = ({role}) => {
    if(role === ROLES.USER) return <Outlet />
    return <Navigate to={PATHS.HOME} replace={true}/>
}

export default UserGuard;
