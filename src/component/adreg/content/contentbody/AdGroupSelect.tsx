import React from 'react';
import {Button, Select} from "antd";

function AdGroupSelect() {
	return (
		<section className="wrap-section wrap-tbl">
			<div className="box-header">
				<div className="box-left">
					<h2 className="fz-24 fc-gray-700">광고 그룹 선택</h2>
				</div>
				<div className="box-right">
					<Button type="primary" size="large" className="gray">
						<span>신규 그룹 생성</span>
					</Button>
				</div>
			</div>
			<div className="box-body">
				<div className="tbl">
					<dl>
						<dt>
							<div className="dt-inner">
								<span className="fz-15 fc-gray-500">광고 그룹</span>
							</div>
						</dt>
						<dd>
							<div className="form-group">
								<Select
									style={{width: 250}}
									options={[
										{value: 'adGroup01', label: '광고그룹01'},
										{value: 'adGroup02', label: '광고그룹02'},
									]}
									placeholder="광고그룹을 선택해주세요"
								/>
							</div>
						</dd>
					</dl>
				</div>
			</div>
		</section>
	);
}

export default AdGroupSelect;