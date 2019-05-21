import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Setting from './screens/Setting';
import Order from './screens/Order';

const CategoryStack = createStackNavigator({
	Categories: {
		screen: Categories
	},
	Category: {
		screen: Category
	},
});

CategoryStack.navigationOptions = {
	tabBarLabel: 'Home',	
};

const CartStack = createStackNavigator({
	Cart
});

CartStack.navigationOptions = {
	tabBarLabel: 'Cart'
};

const OrderStack = createStackNavigator({
	Order
});

OrderStack.navigationOptions = {
	tabBarLabel: 'Order'
};

const SettingStack = createStackNavigator({
	Setting
});

SettingStack.navigationOptions = {
	tabBarLabel: 'Settings'
};

const AppNavigator = createBottomTabNavigator({
	CategoryStack,
	CartStack,
	OrderStack,
	SettingStack
});

export default AppNavigator;