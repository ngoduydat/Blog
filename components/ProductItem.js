import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ImageSki from '../assets/skii.png';

export default function ProductItem(props) {
    const itemWidth = props.width;
    const shadow = { 
        width: itemWidth,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8, 
    }
    return (
        <View style={shadow}>
            <View style={ styles.container }>
                <Image style={styles.img} source={ImageSki} />
                <View style={ styles.info }>
                    <Text style={ styles.name }> { props.product.name }</Text>
                    <View style={ styles.rowPrice }>
                        <Text style={ styles.price }>12</Text>
                        <TouchableOpacity activeOpacity={0.3} onPress={ props.onPress }>
                            <Text style={ styles.cartText }>Mua +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    info: {
        padding: 8
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 4,
        marginBottom: 20,
        overflow: 'hidden',
    },
    name: {
        fontSize:15,
        marginBottom: 8,
        fontWeight: '700',
    },
    img: {
        marginTop: 8,
        marginLeft: 'auto',
        marginRight: 'auto',
        height:64,
        width:64,
    },
    rowPrice: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 15,
        color: 'gray',
        flex: 1,
    }
});
