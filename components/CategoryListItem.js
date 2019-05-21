import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ImageSki from '../assets/skii.png'

export default function CategoryListItem(props) {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={ props.onPress }>
            <View style={styles.container}>
                <Text style={styles.title}>{props.name}</Text>
                <Image style={styles.CategoryImage} source={ImageSki} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        marginBottom: 16,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700',
    },
    CategoryImage: {
        width: 64,
        height: 64
    }
});