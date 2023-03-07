import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import SimplePageForm from "./page/SimplePageForm";
import AuthenticationNoneRequiredRouter from "./component/router/AuthenticationNoneRequiredRouter";
import Login from "./component/content/login/Login";
import {JWT_TOKEN, ROLE_ADMIN, ROLE_USER} from "./const/Const";
import AuthenticationRequiredRouter from "./component/router/AuthenticationRequiredRouter";
import RoleRequiredRouter from "./component/router/RoleRequiredRouter";
import Home from "./page/Home";


import "./css/common.css";
import "./css/layout.css";
import "./css/plugin.css";
import "./css/fonts/NanumSquareNeo/fonts.css";

function App() {
    const roleUser = sessionStorage.getItem(ROLE_USER);
    const roleAdmin = sessionStorage.getItem(ROLE_ADMIN);
    const jwtToken = sessionStorage.getItem(JWT_TOKEN);
    if (!jwtToken) {
        sessionStorage.clear();
    }

    return (
        <div className="wrap">
            <BrowserRouter>
                <Routes>
                    <Route element={<AuthenticationRequiredRouter/>}>
                        <Route path="/" element={<Navigate to="/home"/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route element={<RoleRequiredRouter role={roleUser}/>}>
                            <Route path="/authority/user" element={<SimplePageForm title="유저 이상만"/>}/>
                        </Route>
                        <Route element={<RoleRequiredRouter role={roleAdmin}/>}>
                            <Route path="/authority/admin" element={<SimplePageForm title="관리자 이상만"/>}/>
                        </Route>
                    </Route>
                    <Route element={<AuthenticationNoneRequiredRouter/>}>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                    <Route path="*" element={<SimplePageForm title="404 Not Found"/>}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
