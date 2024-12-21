import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "../constants/paths";

import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import Main from "../pages/main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<SignUp />} />
        <Route path={paths.main} element={<Main /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
