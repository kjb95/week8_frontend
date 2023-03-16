import React, {ReactNode} from 'react';

interface Props {
	children: ReactNode
}
function DdTableCell({children}: Props) {
	return (
		<dd>
			<div className="form-group">
				<span className="comp-txt">
					<span className="table">
						<span className="table-cell">
							<b className="fz-14 fc-gray-400">{children}</b>
						</span>
					</span>
				</span>
			</div>
		</dd>
	);
}

export default DdTableCell;