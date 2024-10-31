import {  useEffect, useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import Cover from '../../Components/Cover/Cover';
import OrderTap from './OrderTab/OrderTab';
import useMenu from '../../hooks/useMenu';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const [menu, loading] = useMenu();

    const categories = ['salad', 'pizza', 'soup', 'dessert','drinks']
    const {category} = useParams();
    
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)


    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    if(loading){
        return <div>loading...</div>
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title='Order Food' />

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                   <OrderTap items={salad}/>
                </TabPanel>
                <TabPanel>
                   <OrderTap items={pizza}/>
                </TabPanel>
                <TabPanel>
                   <OrderTap items={soup}/>
                </TabPanel>
                <TabPanel>
                   <OrderTap items={dessert}/>
                </TabPanel>
                <TabPanel>
                   <OrderTap items={drinks}/>
                </TabPanel>
 
            </Tabs>

        </div>

    );
};

export default Order;