import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { PATHS } from "../../../router/paths";

const AdminGuard = ({ role }) => {
  // return <Outlet />
  if (role === "admin") return <Outlet />;
  return (
    <>
      <Navigate to={PATHS.HOME} replace />
    </>
  );
};

export default AdminGuard;
