import React from 'react';

interface Props {
	data: string
}

function DdTableCell({data}: Props) {
	return (
		<dd>
			<div className="form-group">
				<span className="comp-txt">
					<span className="table">
						<span className="table-cell">
							<b className="fz-14 fc-gray-400">{data}</b>
						</span>
					</span>
				</span>
			</div>
		</dd>
	);
}

export default DdTableCell;