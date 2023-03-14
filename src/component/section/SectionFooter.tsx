import React, {ReactNode} from 'react';

interface Props {
	children: ReactNode
}

function SectionFooter({children}: Props) {
	return (
		<div className="box-footer">
			<div className="box-center">
				{children}
			</div>
		</div>
	);
}

export default SectionFooter;