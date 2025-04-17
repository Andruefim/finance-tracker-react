import React from 'react';
import { Routes, Route } from "react-router";

import MinimalLayout from './layouts/MinimalLayout';
import AuthLayout from './features/auth/AuthLayout';
import Login from './pages/Login';
import { AUTH, LOGIN, REGISTER, CONFIRM_EMAIL } from './constants/routes';


function AppRoutes() {
  return (
    <Routes>
      <Route element={<MinimalLayout />}>
        <Route path={AUTH} element={<AuthLayout />}>
          <Route path={LOGIN} element={<Login />} />
          {/* <Route path={REGISTER} element={<Register />} />
          <Route path={CONFIRM_EMAIL} element={<ConfirmEmail />}/> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
