import { Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import HomePage from "../pages/HomePage";
import PostsTableListPage from "../pages/PostsTableListPage";
import ViewPostPage from "../pages/ViewPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import AdminGuard from "../components/Guards/AdminGuard";
import GuestGuard from "../components/Guards/GuestGuard";
import AboutPage from "../pages/AboutPage";
import UserGuard from "../components/Guards/UserGuard";

// availabel for admins only
const adminRoutes = (role) => [
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
const userRoutes = (role) => [
  {
    path: PATHS.POST.ROOT,
    element: <UserGuard role={role}  />,
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

const guestRoutes = (role) => [
  {
    index: true,
    element: (
      <GuestGuard role={role}>
        <HomePage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.ABOUT,
    element: (
      <GuestGuard role={role}>
        <AboutPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.ERRORS.PAGE_NOT_FOUND,
    element: <h1>PAGE NOT FOUND </h1>,
  },
];

// available for every one
const routes = (role) => [
  ...guestRoutes(role),
  ...userRoutes(role),
  ...adminRoutes(role),
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.PAGE_NOT_FOUND} replace={true} />,
  },
];

export { adminRoutes, userRoutes, routes };
