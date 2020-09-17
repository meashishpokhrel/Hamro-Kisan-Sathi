import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import LinearGradient from "react-native-linear-gradient"
export default class Category extends React.Component {


    render() {
        return (
            
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', opacity: 0.4 }}
                    />
                    <View>
                        <Text style={styles.rateText}>{this.props.name2}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rateText:{
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 30,
        color: 'black',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 5,
        shadowRadius: 8,
        fontWeight: "bold",
        elevation: 8
    }
});