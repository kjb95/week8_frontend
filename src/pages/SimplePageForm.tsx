import React from "react";

interface Props {
	title: string;
}

function SimplePageForm({title}: Props) {
	return (
		<div style={{fontSize: 50}}>
			{title}
		</div>
	);
}

export default SimplePageForm;
