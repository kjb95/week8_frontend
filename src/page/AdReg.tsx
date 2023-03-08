import React from 'react';
import {Layout} from 'antd';
import AdRegHeader from '../component/adreg/header/AdRegHeader';
import AdRegContent from '../component/adreg/content/AdRegContent';
import AdRegFooter from '../component/adreg/footer/AdRegFooter';

function AdReg() {
    return (
        <Layout>
            <AdRegHeader/>
            <AdRegContent/>
            <AdRegFooter/>
        </Layout>
    );

}

export default AdReg;