import React, {ReactNode} from 'react';

interface Props {
	children: ReactNode
}

function SectionBody({children}: Props) {
	return (
		<div className="box-body">
			<div className="tbl">
				{children}
			</div>
		</div>
	);
}
export default SectionBody;