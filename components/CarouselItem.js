import React from 'react'
import FastImage from 'react-native-fast-image'
import CachedImage from 'react-native-image-cache-wrapper';

import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import storage from '@react-native-firebase/storage';
const { width, height } = Dimensions.get('window')

function getUriImage(uri) {
    return uri !== null && uri !== undefined && uri.includes("/") && uri.includes(".") ? uri : ""
    }
const CarouselItem = ({ item }) => {
    
    return (
        <View style={styles.cardView}>
            {/* <CachedImage source={{uri:"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"}}/> */}
            <Image style={styles.image} source={{ uri: item.url,  }}/>
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 3.5,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width - 20,
        height: height / 3.5,
        borderRadius: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})

export default CarouselItem