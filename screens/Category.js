import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Dimensions } from 'react-native';
import ProductItem from '../components/ProductItem';

const ITEM_WIDTH = Dimensions.get('window').width;
export default class Category extends React.Component {

	static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('categoryName')
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: 'Áo phông', price: 12000},
                { id: 2, name: 'Áo phông 1', price: 13000},
                { id: 3, name: 'Áo phông 2', price: 14000},
                { id: 4, name: 'Áo phông 2', price: 14000},
                { id: 5, name: 'Áo phông 2', price: 14000},
            ]
        }
    }
	render() {
        var { products } = this.state;
		return (
            <FlatList 
                data={ products } 
                contentContainerStyle={ styles.container }
                numColumns={2} 
                keyExtractor={ item => item.id.toString() } 
                renderItem={ 
                    ({ item }) => <View style={ styles.wrap}><ProductItem product={ item } width={ITEM_WIDTH/2 - 26 } onPress={ () => Alert.alert('click12') 
                }/></View> }
            />
		);
	}
}

const styles = StyleSheet.create({
	container: {
        paddingHorizontal: 8,
        paddingTop: 16,
    },
    wrap: {
        flex: 1,
        flexWrap: 'wrap',
        paddingHorizontal: 8,
        // paddingVertical: 8,
    }
});
