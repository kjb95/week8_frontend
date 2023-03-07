import React from "react";

interface SimplePageFormProps {
    title: string;
}

function SimplePageForm({title}: SimplePageFormProps) {
    return (
        <div>
            {title}
        </div>
    );
}

export default SimplePageForm;
