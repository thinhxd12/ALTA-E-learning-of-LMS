import React, { PropsWithChildren, useState } from "react";
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { logo1 } from "@assets/images";
const { Header, Sider, Content } = Layout;



interface IDefaultLayoutProps {
}



const DashboardLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = (props) => {
    const [state, setState] = useState({
        collapsed: true,
    })
    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    return (
        <div className="dashboard__layout">
            <Layout>
                <Sider trigger={null} collapsible collapsed={state.collapsed} style={{width:'112px'}}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: '100vh',
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default React.memo(DashboardLayout);
