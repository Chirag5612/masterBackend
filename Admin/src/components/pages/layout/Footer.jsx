import React from 'react';
import { Layout } from 'antd';
const FooterPage = () => {
    const { Footer } = Layout;
    let date = new Date()
    date = date.getFullYear()
    return (

        <Footer
            style={{
                textAlign: 'center',
                bottom: "0"
            }}
        >
            eBiztrait ©{date} Created by eBiztrait Technology
        </Footer>
    )

}
export default FooterPage;