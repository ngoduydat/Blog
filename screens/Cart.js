import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Cart extends Component {
    static navigationOptions = {
        title: "Cart",
        tabBarLabel: "cart"
    }

    render() {
        return (
            <Text>
                cart
            </Text>
        )
    }
}