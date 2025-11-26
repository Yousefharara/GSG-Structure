import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useState } from "react";

// ? New Version Functional Component

const Router = () => {
  const [role] = useState("user");

  const router = useRoutes(routes(role));

  return router;

  // ! Old version Class Component

  // return (
  //   <Routes>
  //     {/* <Route index element={<HomePage />} /> */}
  //     <Route index element={<Hooks />} />
  //     <Route path={PATHS.ABOUT} element={<h1>about page</h1>} />
  //     <Route path={PATHS.POST.ROOT} element={<Outlet />}>
  //       <Route index element={<PostsTableListPage />} />
  //       <Route path={PATHS.POST.VIEW} element={<ViewPostPage />} />
  //       <Route path={PATHS.POST.CREATE} element={<CreatePostPage />} />
  //       <Route path={PATHS.POST.EDIT} element={<EditPostPage />} />
  //     </Route>
  //     <Route path={PATHS.ERRORS.PAGE_NOT_FOUND} element={<h1>Oopsi !!</h1>} />
  //     <Route
  //       path={PATHS.ERRORS.PAGE_NOT_COMPLETED}
  //       element={<h1>Page Not Completed Yet!!</h1>}
  //     />
  //     <Route
  //       path="/*"
  //       element={<Navigate to={PATHS.ERRORS.PAGE_NOT_FOUND} />}
  //     />
  //   </Routes>
  // );
};

export default Router;
