import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import ModalExample from '../screens/ModalExample';

export default class Categories extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
	constructor(props) {
		super(props);
		this.state = {
			categories : [
				{ id: 1, name: "Dụng cụ trượt tuyết" },
				{ id: 2, name: "Quần áo trượt tuyết" },
				{ id: 3, name: "Kính mũ" },
				{ id: 4, name: "Kính mũ 1" },
				{ id: 5, name: "Kính mũ 2" },
				{ id: 6, name: "Kính mũ 2" },
				{ id: 7, name: "Kính mũ 2" },
				{ id: 8, name: "Kính mũ 2" },
			]
		}
	}
	render() {
		var { categories } = this.state;
		return (
			<View >
				<FlatList data={ categories } keyExtractor={ item => item.id.toString() } renderItem={ ({ item }) => <CategoryListItem name={ item.name } onPress={ () => this.props.navigation.navigate('Category', { categoryName: item.name }) }/> }  contentContainerStyle={ styles.container }/>
				<ModalExample/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
	},
});
