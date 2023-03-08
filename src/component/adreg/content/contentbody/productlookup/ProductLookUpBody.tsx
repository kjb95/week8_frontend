import React from 'react';
import {Input} from "antd";

function ProductLookUpBody() {
    return (
        <div className="box-body">
            <div className="tbl">
                <dl>
                    <dt>
                        <div className="dt-inner"><span className="fz-15 fc-gray-500">상품명</span></div>
                    </dt>
                    <dd>
                        <div className="form-group">
                            <Input name="itemName" placeholder="상품명을 입력하세요." style={{width: 500}}/>
                        </div>
                    </dd>

                </dl>
                <dl>
                    <dt>
                        <div className="dt-inner"><span className="fz-15 fc-gray-500">상품번호</span></div>
                    </dt>
                    <dd>
                        <div className="form-group">
                            <Input name="itemNo" placeholder="상품번호를 입력하세요." style={{width: 500}}/>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    );
}

export default ProductLookUpBody;