import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AuthenticationNoneRequiredRouter from "./component/router/AuthenticationNoneRequiredRouter";
import AuthenticationRequiredRouter from "./component/router/AuthenticationRequiredRouter";
import RoleRequiredRouter from "./component/router/RoleRequiredRouter";
import {JWT_TOKEN, ROLE, ROLE_ADMIN, ROLE_ADV} from "./constants/Constant";
import "./css/common.css";
import "./css/fonts/NanumSquareNeo/fonts.css";
import "./css/layout.css";
import "./css/plugin.css";
import AdMng from './pages/AdMng';
import AdReg from './pages/AdReg';
import Login from "./pages/Login";
import SimplePage from "./pages/SimplePage";

function App() {
	const jwtToken = sessionStorage.getItem(JWT_TOKEN);
	const roles = sessionStorage.getItem(ROLE)
		?.split(",");
	const roleAdv = roles?.includes(ROLE_ADV);
	const roleAdmin = roles?.includes(ROLE_ADMIN);
	if (!jwtToken) {
		sessionStorage.clear();
	}

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<AuthenticationRequiredRouter/>}>
						<Route path="/" element={<SimplePage title="Home"/>}></Route>
						<Route element={<RoleRequiredRouter role={roleAdv}/>}>
							<Route path="/adReg" element={<AdReg/>}/>
							<Route path="/adMng" element={<AdMng/>}/>
						</Route>
						<Route element={<RoleRequiredRouter role={roleAdmin}/>}>

						</Route>
					</Route>
					<Route element={<AuthenticationNoneRequiredRouter/>}>
						<Route path="/login" element={<Login/>}/>
					</Route>
					<Route path="*" element={<SimplePage title="404 Not Found"/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
