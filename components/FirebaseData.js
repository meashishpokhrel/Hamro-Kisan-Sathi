import React, {Component} from "react";
import {View, Text, Button} from "react-native";

import firestore from "@react-native-firebase/firestore"
import Welcome from "./Welcome";
import Images from "./Images"
class FirebaseData extends Component {
  state = {
    user:{
      name:""
    }
  }
  constructor(props){
    super (props);
    this.getUser();
    this.subscriber = firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").onSnapshot(doc => {
      this.setState({
        user:{
          name: doc.data().name
        }
      })
    })
  }
  getUser = async () =>{
    const userDocument = await firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").get()
    console.log(userDocument)
  }
  render(){
  return(
    <View>
      <Text> Name: {this.state.user.name}</Text>
      {/* <Welcome /> */}
      <Images />
    </View>
  )
  }
}

export default FirebaseData