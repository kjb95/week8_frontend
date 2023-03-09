import React from 'react';
import './App.css';
import "./css/common.css";
import "./css/layout.css";
import "./css/plugin.css";
import "./css/fonts/NanumSquareNeo/fonts.css";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import SimplePageForm from "./page/SimplePageForm";
import AuthenticationNoneRequiredRouter from "./component/router/AuthenticationNoneRequiredRouter";
import {JWT_TOKEN, ROLE_ADMIN, ROLE_ADV} from "./const/Const";
import AuthenticationRequiredRouter from "./component/router/AuthenticationRequiredRouter";
import RoleRequiredRouter from "./component/router/RoleRequiredRouter";
import Login from "./page/Login";
import AdReg from './page/AdReg';
import AdMng from './page/AdMng';
import Home from "./page/Home";

function App() {
	const roleAdv = sessionStorage.getItem(ROLE_ADV);
	const roleAdmin = sessionStorage.getItem(ROLE_ADMIN);
	const jwtToken = sessionStorage.getItem(JWT_TOKEN);
	if (!jwtToken) {
		sessionStorage.clear();
	}

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<AuthenticationRequiredRouter/>}>
						<Route path="/" element={<Navigate to="/home"/>}/>
						<Route path="/home" element={<Home/>}/>
						<Route element={<RoleRequiredRouter role={roleAdv}/>}>
							<Route path="/adReg" element={<AdReg/>}/>
						</Route>
						<Route element={<RoleRequiredRouter role={roleAdmin}/>}>
							<Route path="/adMng" element={<AdMng/>}/>
						</Route>
					</Route>
					<Route element={<AuthenticationNoneRequiredRouter/>}>
						<Route path="/login" element={<Login/>}/>
					</Route>
					<Route path="*" element={<SimplePageForm title="404 Not Found"/>}></Route>
				</Routes>

			</BrowserRouter>
		</>
	);
}

export default App;
