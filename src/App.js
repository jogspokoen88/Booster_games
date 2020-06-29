import React from 'react';
import './App.less';
import 'antd/dist/antd.less';
import {Layout} from 'antd';
import style from "./Components/styles/sider.module.css";
import "./Components/styles/_sider.less"
import MenuList from "./Components/menu/menu"
import GeneralPage from "./Components/sider-menu/general";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SubGeneralPage from "./Components/sider-menu/subGeneralPage";
import WowClassicPage from "./Components/sider-menu/wowClassicPage";
import WowBfa from "./Components/sider-menu/WowBfa";
import Fortnite from "./Components/sider-menu/Fortnite";
import Hearthstone from "./Components/sider-menu/Hearthstone";
import Overwatch from "./Components/sider-menu/overwatch";
import ForBoosters from "./Components/sider-menu/forBoosters";


const {Sider, Content} = Layout;


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Layout className={"main-layout"}>
                    <Sider className="sider-wrap">
                        <MenuList/>
                    </Sider>
                    <Layout>
                        <Content className="content">
                            <div className={style.container}>
                            <Switch>
                                <Route path="/general-page" render={() => <GeneralPage/>}/>
                                <Route path="/sub-general-page" render={() => <SubGeneralPage/>}/>
                                <Route path="/wow-classic" render={() => <WowClassicPage/>}/>
                                <Route path="/wow-bfa" render={() => <WowBfa/>}/>
                                <Route exact path="/fortnite" render={() => <Fortnite />}/>
                                <Route path="/hearthstone" render={() => <Hearthstone/>}/>
                                <Route path="/overwatch" render={() => <Overwatch/>}/>
                                <Route path="/for-boosters" render={() => <ForBoosters/>}/>
                            </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </BrowserRouter>
    );
}

export default App;
