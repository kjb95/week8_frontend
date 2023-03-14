import React, {ReactNode} from 'react';

interface Props {
	children: ReactNode
}

function Dd({children}: Props) {
	return (
		<dd>
			<div className="form-group">
				{children}
			</div>
		</dd>
	);
}

export default Dd;