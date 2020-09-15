import React,  { Component } from "react";
import { ImageBackground,View, StyleSheet, Button, Alert, BackHandler,Text, Linking, Image, TouchableOpacity } from "react-native";
const image = { uri: "https://reactjs.org/logo-og.png" };
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import firestore from "@react-native-firebase/firestore"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class App extends Component {

  state = {
    user:{
      name:""
    }
  }
  constructor(props){
    super (props);
    this.getUser();
    this.subscriber = firestore().collection("contactmsg").doc("CkZLtwQtTGghvp2zGVxf").onSnapshot(doc => {
      this.setState({
        user:{
          name: doc.data().msg
        }
      })
    })
  }
  getUser = async () =>{
    const userDocument = await firestore().collection("contactmsg").doc("CkZLtwQtTGghvp2zGVxf").get()
    console.log(userDocument)
  }
  render(){
    const openDialviber=()=>{
        Linking.openURL("tel:9865121372")
      }
      const openDialwhatsapp=()=>{
        Linking.openURL("tel:9809213377")
      }
    

  return (
    <View style={styles.container}>
        {/* <ImageBackground source={require('../assets/exit.jpg')} style={styles.image}>
    </ImageBackground> */}
    <Image source={require('../assets/contact.jpg')} style={styles.image}>
    </Image>
    <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20, paddingTop: 20 }}>
    {this.state.user.name}
    </Text>
    <TouchableOpacity style={styles.navBarLeftButton}>
        <Ionicons.Button name="logo-facebook" style={styles.icon} style={{paddingLeft: 20}} size={30}  onPress={ () => Linking.openURL("fb://page/2140081466321865")}  />
        <Fontisto.Button name="viber" style={styles.icon} size={30} onPress={ () => openDialviber()}  />
        <Ionicons.Button name="logo-whatsapp" style={styles.icon}size={30} style={{paddingLeft: 20}}onPress={ () => openDialwhatsapp()}  />
        <MaterialCommunityIcons.Button name="gmail" style={styles.icon} size={30}onPress={ () => Linking.openURL("mailto: thesachinregmi@gmail.com")}  />
        <Ionicons.Button name="logo-youtube" style={styles.icon} style={{paddingLeft: 20}} size={30} onPress={ () => Linking.openURL("vnd.youtube://c/KisankoPathsala")}  />
        </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    },
    buttonStyle: {
        color: 'red',
        backgroundColor: 'green'
    },
    navBarLeftButton: {
      
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-around",
      // width: "45%",
      paddingLeft: 10,
      fontSize: 5,
      borderRadius: 164,
    },

    buttonText: {
      color: 'rgba(255,255,255,0.70)',
      fontSize: 14
    },
    icon:{
    
      backgroundColor: "green",
      
      paddingLeft: 20,
      

    }
  });


// { text: "Exit", onPress: () => Linking.openURL("fb://profile/100003400344144") }
// Hamro kisan facebook page{ text: "Exit", onPress: () => Linking.openURL("fb://page/2140081466321865") }
//Hamro Kisan youtube channel { text: "Exit", onPress: () => Linking.openURL('vnd.youtube://c/KisankoPathsala') }