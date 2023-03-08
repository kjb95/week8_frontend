import React from 'react';
import {Button} from "antd";

function ProductLookUpFooter() {
    return (
        <div className="box-footer">
            <div className="box-center">
                <Button type="primary" size="large" className="pink"><span>조회</span></Button>
            </div>
        </div>
    );
}

export default ProductLookUpFooter;