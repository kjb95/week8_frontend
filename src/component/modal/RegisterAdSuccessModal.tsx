import {Modal} from "antd";
import React from 'react';

interface Props {
	isModalOpen: boolean,
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function RegisterAdSuccessModal({isModalOpen, setIsModalOpen}: Props) {
	return (
		<Modal title="광고 등록 성공" open={isModalOpen} onCancel={() => setIsModalOpen(false)}></Modal>
	);
}

export default RegisterAdSuccessModal;