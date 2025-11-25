import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";
import HomePage from "../pages/HomePage";
import PostsTableListPage from "../pages/PostsTableListPage";
import ViewPostPage from "../pages/ViewPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import AdminGuard from "../components/AdminGuard";


// availabel for admins only
const adminPages = (role) => [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard role={role} />,
    children: [
      {
        index: true,
        element: <h1>Admin Home Page</h1>,
      },
      {
        path: PATHS.ADMIN.USERS,
        element: <h2>Admin Users Page</h2>,
      },
    ],
  },
];

// availabel for every users only have an account
const userPages = [
  {
    path: PATHS.POST.ROOT,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <PostsTableListPage />,
      },
      {
        path: PATHS.POST.VIEW,
        element: <ViewPostPage />,
      },
      {
        path: PATHS.POST.CREATE,
        element: <CreatePostPage />,
      },
      {
        path: PATHS.POST.EDIT,
        element: <EditPostPage />,
      },
    ],
  },
];

// available for every one
const routes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: PATHS.ABOUT,
    element: <h1>About Page</h1>,
  },
  {
    path: PATHS.ERRORS.PAGE_NOT_FOUND,
    element: <h1>PAGE NOT FOUND </h1>,
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.PAGE_NOT_FOUND} replace={true} />,
  },
];


export {adminPages, userPages, routes}