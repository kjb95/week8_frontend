import React from "react";
import {JWT_TOKEN} from "../../utils/Const";
import {Navigate, Outlet} from "react-router-dom";

function AuthenticationNoneRequiredRouter() {
    const isAuthenticated = sessionStorage.getItem(JWT_TOKEN);

    return isAuthenticated ? <Navigate replace to="/"/> : <Outlet/>;
}

export default AuthenticationNoneRequiredRouter;
