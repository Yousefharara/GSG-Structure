import React, { Component } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import HomePage from "../pages/HomePage";
import PostsTableListPage from "../pages/PostsTableListPage";
import ViewPostPage from "../pages/ViewPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";

class Router extends Component {
  render() {
    return (
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={PATHS.ABOUT} element={<h1>about page</h1>} />
        <Route path={PATHS.POST.ROOT} element={<Outlet />}>
          <Route index element={<PostsTableListPage />} />
          <Route path={PATHS.POST.VIEW} element={<ViewPostPage />} />
          <Route path={PATHS.POST.CREATE} element={<CreatePostPage />} />
          <Route path={PATHS.POST.EDIT} element={<EditPostPage />} />
        </Route>
        <Route path={PATHS.ERRORS.PAGE_NOT_FOUND} element={<h1>Oopsi !!</h1>} />
        <Route path={PATHS.ERRORS.PAGE_NOT_COMPLETED} element={<h1>Page Not Completed Yet!!</h1>} />
        <Route
          path="/*"
          element={<Navigate to={PATHS.ERRORS.PAGE_NOT_FOUND} />}
        />
      </Routes>
    );
  }
}

export default Router;
