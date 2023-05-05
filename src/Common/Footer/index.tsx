import { Footer as Footers} from 'antd/lib/layout/layout'
import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const footerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'white',
    };

    return (
        <Footers style={footerStyle}>Ant Design ©{currentYear} Created by Dinh Hieu</Footers>
    )
}
