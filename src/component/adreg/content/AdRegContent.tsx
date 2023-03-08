import React from 'react';
import {Layout} from 'antd';
import ProductLookUpHeader from "./contentbody/productlookup/ProductLookUpHeader";
import ProductLookUpBody from "./contentbody/productlookup/ProductLookUpBody";
import ProductLookUpFooter from "./contentbody/productlookup/ProductLookUpFooter";
import ProductLookUpResultHeader from "./contentbody/productlookupresult/ProductLookUpResultHeader";

function AdRegContent() {
    const {Content} = Layout;
    return (
        <Content>
            <div className="site-layout-content">
                <div className="inner-content">
                    <div className="content-header"><h1 className="fz-32 fc-gray-900">광고 등록</h1></div>
                    <div className="content-body">
                        <section className="wrap-section wrap-tbl">
                            <ProductLookUpHeader/>
                            <ProductLookUpBody/>
                            <ProductLookUpFooter/>
                        </section>
                        <section className="wrap-section wrap-datagrid">
                            <ProductLookUpResultHeader/>
                        </section>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default AdRegContent;