import React from "react";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../../router/paths";
import { ROLES } from "../../../constant";

const GuestGuard = ({ role, children }) => {
  if (role === ROLES.USER) return <Navigate to={PATHS.POST.ROOT} replace={true} />;
  if (role === ROLES.ADMIN)
    return <Navigate to={PATHS.ADMIN.ROOT} replace={true} />;
  return children;
};

export default GuestGuard;
