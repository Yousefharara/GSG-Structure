import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useState } from "react";
import { ROLES } from "../constant";

const Router = () => {
  const [role] = useState(ROLES.USER);

  const router = useRoutes(routes(role));

  return router;
};

export default Router;
