import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Setting extends Component {
    static navigationOptions = {
        title: "Settings"
    }
    render() {
        return ( 
            <Text>
                settings
            </Text>
        )
    }
}