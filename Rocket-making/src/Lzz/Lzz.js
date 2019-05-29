
        import React,{Component} from 'react';
        import { Layout, Menu, Breadcrumb, Icon } from 'antd';
        import 'antd/dist/antd.css';
        import logo from '../logo.svg';

    /*     import functionimg from '../functionimg.jpg';
        import cloudServer from '../cloudServer.jpg'; */
        import { BrowserRouter as Router, Route, Link } from "react-router-dom";
        import Home from "./home/home"
        import Configure from "./configure/configure"
        import Control from "./control/control"
        import Auth from "./auth/auth"

        import './Lzz.css'
        const { Header, Content, Footer, Sider } = Layout;
         
        //自定义组件SiderDemo
        class SiderDemo extends Component {
            state = {
                collapsed: false,
                mode: 'inline',
            };
         
            toggle = () => {
                this.setState({
                    collapsed: !this.state.collapsed,
                });
            }
         
            render() {
                return (
                    <Router>
                    <Layout>
                        <Sider
                            trigger={null}
                            collapsible
                            collapsed={this.state.collapsed}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="home">
                                    <Icon type="home" />
                                    <span className="nav-text">
                                        <Link to="/">机器管理</Link>
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="configure">
                                    <Icon type="file" />
                                    <span className="nav-text">
                                        <Link to="configure">配置管理</Link>
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="control">
                                    <Icon type="control" />
                                    <span className="nav-text">
                                    <Link to="control">流程管理</Link>
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="auth">
                                    <Icon type="team" />
                                    <span className="nav-text">
                                    <Link to="auth">权限管理</Link>
                                    </span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#000', padding: 0 }}>
                                <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                                    <Icon
                                        className="trigger"
                                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                        onClick={this.toggle}
                                        style={{cursor: 'pointer'}}
                                    />
                                </span>
                                <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>造火箭ing</span>
                                <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                                    <img src={logo} className="App-logo" alt="logo" />
                                </span>
                            </Header>
                            <Content style={{ margin: '0 16px' }}>
                                <Breadcrumb style={{ margin: '12px 0' }}>
                                    <Breadcrumb.Item>待开发</Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/configure" component={Configure} />
                                <Route exact path="/control" component={Control} />
                                <Route exact path="/auth" component={Auth} />
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                Ant Design ©2016 Created by Ant UED
                            </Footer>
                        </Layout>
                    </Layout>
                    </Router>
                );
            }
        }
         
        //输出组件
        export default SiderDemo;