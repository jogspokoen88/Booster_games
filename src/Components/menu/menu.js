import React, {Component} from "react";
import {Menu} from "antd";
import 'antd/dist/antd.less';
import { Link} from "react-router-dom";
import '../styles/_sider.less'


const {SubMenu} = Menu

export default class MenuList extends Component {
    render() {

        return (
                <Menu className="menu"
                      defaultSelectedKeys={['5']}
                      mode="inline">
                    <Menu.Item className="menu-item" key="1">General
                        <Link to={"/general-page"}></Link>
                    </Menu.Item>
                    <SubMenu className="submenu" key="sub1" title="About games">
                        <Menu.Item className="menu-item" key="2">General
                            <Link to={"/sub-general-page"}></Link>
                        </Menu.Item>
                        <Menu.Item className="menu-item" key="3">WOW Classic
                            <Link to={"/wow-classic"}></Link>
                        </Menu.Item>
                        <Menu.Item className="menu-item" key="4">WOW BFA
                            <Link to={"/wow-bfa"}></Link>
                        </Menu.Item>
                        <Menu.Item className="menu-item" key="5">Fortnite
                            <Link to={"/fortnite"}></Link>
                        </Menu.Item>
                        <Menu.Item className="menu-item" key="6">Hearthstone
                            <Link to={"/hearthstone"}></Link>
                        </Menu.Item>
                        <Menu.Item className="menu-item" key="7">Overwatch
                            <Link to={"/overwatch"}></Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item className="menu-item" key="8">For Boosters
                        <Link to={"/for-boosters"}></Link>
                    </Menu.Item>
                </Menu>
        )
    }

}