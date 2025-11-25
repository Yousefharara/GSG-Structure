import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";

const AdminGuard = ({ role }) => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (role !== "admin") {
  //     // navigate to home page
  //     console.log("navigate to home page");
  //     navigate(PATHS.HOME);
  //   }
  // }, [role]);

  // return <Outlet />
  if (role === "admin")
    return (
      <>
        {console.log("Admin is active !!")}
        <Outlet />
      </>
    );
  return (
    <>
      {console.log("Admin is not Active")}
      <Navigate to={PATHS.HOME} replace />
    </>
  );
};

export default AdminGuard;
