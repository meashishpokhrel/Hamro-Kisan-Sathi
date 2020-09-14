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

export default Images