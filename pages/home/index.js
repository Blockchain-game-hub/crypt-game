import React from 'react';
import styles from './style.module.scss'
import { Tabs } from 'antd';
import Shop from '@/components/Shop';
import Market from '@/components/Market';
import MyANT from '@/components/My ANT';
import Fight from '@/components/Fight';
const { TabPane } = Tabs;
const Home = () => {

    return (
        <div className={styles.home}>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Shop" key="1">
                    <Shop />
                </TabPane>
                <TabPane tab="Market" key="2">
                    <Market />
                </TabPane>
                <TabPane tab="My ANT" key="3">
                    <MyANT />
                </TabPane>
                <TabPane tab="Fight" key="4">
                    <Fight />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Home;
