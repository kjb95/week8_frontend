import React, {useState} from 'react';
import {Button, Input} from "antd";
import {findAuthorities, jwtAuthenticate} from "../api/customApi";
import {AUTHENTICATED_MEMBER_ID, JWT_TOKEN, ROLE_ADV} from "../const/Const";

export interface LoginForm {
	username: string;
	password: string;
}

const LoginFormDefault: LoginForm = {
	username: "", password: ""
}

function findAuthoritiesSuccess(roles: string[]) {
	roles.forEach((role: string) => sessionStorage.setItem(role, role));
	const nextHref = roles.includes(ROLE_ADV) ? "/adReg" : "/adMng";
	window.location.href = nextHref;
}

function loginSuccess(data: LoginForm, token: string) {
	sessionStorage.setItem(JWT_TOKEN, token);
	sessionStorage.setItem(AUTHENTICATED_MEMBER_ID, data.username);
	findAuthorities(data.username)
		.then((res) => findAuthoritiesSuccess(res.data.roles))
		.catch((e) => console.log(e));
}

function loginFail(e: unknown, setIsLoginFail: React.Dispatch<React.SetStateAction<boolean>>) {
	setIsLoginFail(true);
	console.log(e);
}

function login(data: LoginForm, setIsLoginFail: React.Dispatch<React.SetStateAction<boolean>>) {
	jwtAuthenticate(data)
		.then((res) => loginSuccess(data, res.data.token))
		.catch((e) => loginFail(e, setIsLoginFail));
}

function Login() {
	const [isLoginFail, setIsLoginFail] = useState<boolean>(false);
	const [loginForm, setLoginForm] = useState<LoginForm>(LoginFormDefault);

	return (
		<div className="wrap login">
			<div className="box-inner">
				<div className="box-left">
					<div className="box-top">
						<div className="logo">NHNAD Bidding Solution</div>
						<div className="logo-sub">NHNAD 자동입찰 솔루션 로그인</div>
					</div>
					<div className="box-middle">
						<div className="company-name">
							<i className="ico ico-check"/>
							<span className="txt-company">DB손해보험</span>
						</div>
						<Input
							name="email"
							placeholder="아이디를 입력해주세요."
							size="large"
							prefix={<i className="ico ico-id"/>}
							onChange={(e) => setLoginForm({username: e.target.value, password: loginForm.password})}
							value={loginForm.username}
						/>
						<Input.Password
							name={"password"}
							placeholder="비밀번호를 입력해주세요."
							size="large"
							prefix={<i className="ico ico-pw"/>}
							onChange={(e) => setLoginForm({username: loginForm.username, password: e.target.value})}
							value={loginForm.password}
							onPressEnter={() => login(loginForm, setIsLoginFail)}
						/>
						{isLoginFail && <p className="txt-error show">아이디 또는 비밀번호가 일치하지 않습니다.</p>}
					</div>
					<div className="box-bottom">
						<Button type="primary" className="pink" size="large" block onClick={() => login(loginForm, setIsLoginFail)}>로그인</Button>
					</div>
				</div>
				<div className="box-right">
					<img src={require('../images/img-login-object.jpg')} alt="NBS 솔루션 화면 이미지"/>
				</div>
			</div>
		</div>);
}

export default Login;