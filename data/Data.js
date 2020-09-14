import React, {Component} from "react";

import storage from '@react-native-firebase/storage';
import firestore from "@react-native-firebase/firestore"
import {FlatList, Image, Dimensions, View, Text} from 'react-native';
class Images extends Component {
        state = {
            profileImageUrl: "image"
        }
        render(){
            
        const imageRef = storage().ref('/images/imgpic.png');
        imageRef
          .getDownloadURL()
          .then((url) => {
            //from url you can fetched the uploaded image easily
            this.setState({profileImageUrl: url});
          })
          .catch((e) => console.log('getting downloadURL of image errorys => ', e));
    
        
        
      return (
          <View>
      
    <Image source={{uri: this.state.profileImageUrl}} style={{
            width: Dimensions.get('window').width / 4,
            height: Dimensions.get('window').width / 4,
          }} />
        </View>
      )
        }
    }
    
export const dummyData =
        [{
                title: 'Anise Aroma Art Bazar', url: this.state.profileImageUrl,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                id: 1

        },
        {
                title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                id: 2
        },
        {
                title: 'Vegatable Salad', url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                id: 3
        }]