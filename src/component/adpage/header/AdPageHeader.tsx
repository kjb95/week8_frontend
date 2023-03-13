import {Header} from "antd/es/layout/layout";
import React from 'react';
import {AUTHENTICATED_MEMBER_ID, ROLE_ADMIN, ROLE_ADV} from '../../../constants/Constant';
import {Button, Divider, Layout, Menu, MenuProps, Space} from 'antd';
import {useLocation} from 'react-router';

function createItem(label: string, key: string, icon: JSX.Element) {
	return {label: label, key: key, icon: icon};
}

function createItems(roleAdv: string | null, roleAdmin: string | null) {
	const items = []
	if (roleAdv) {
		items.push(createItem('광고 등록', 'adReg', <i className="ico ico-menu-01"/>));
	}
	if (roleAdmin) {
		items.push(createItem('광고 관리', 'adMng', <i className="ico ico-menu-02"/>));
	}
	return items;
}

export function logout() {
	sessionStorage.clear();
	window.location.href = "/";
}

const movePage: MenuProps['onClick'] = (e) => {
	window.location.href = e.key;
}

function AdPageHeader() {
	const roleAdv = sessionStorage.getItem(ROLE_ADV);
	const roleAdmin = sessionStorage.getItem(ROLE_ADMIN);
	const location = useLocation()
		.pathname
		.substring(1);
	const menuItems: MenuProps['items'] = createItems(roleAdv, roleAdmin);

	return (
		<Header>
			<a href={"#/"} className="logo"><span>NHNAD</span> Bidding Solution</a>
			<Menu onClick={movePage} selectedKeys={[location]} mode="horizontal" items={menuItems}/>
			<div className="user-info">
				<Space split={<Divider type="vertical"/>}>
					<Space>
						<i className="ico ico-user-info"/>
						<span className="fz-16 fc-gray-300">{sessionStorage.getItem(AUTHENTICATED_MEMBER_ID)}</span>
					</Space>
					<Button className="gray" size="small" onClick={logout}>로그아웃</Button>
				</Space>
			</div>
		</Header>);
}

export default AdPageHeader;