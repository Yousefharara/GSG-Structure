import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { PATHS } from "../../../router/paths";
import { ROLES } from "../../../constant";

const AdminGuard = ({ role }) => {
  // return <Outlet />
  if (role === ROLES.ADMIN) return <Outlet />;
  return (
    <>
      <Navigate to={PATHS.HOME} replace />
    </>
  );
};

export default AdminGuard;
