import React, { useState } from "react";
import { ImageBackground,View, StyleSheet, Button, Alert, BackHandler,Text } from "react-native";
const image = { uri: "https://reactjs.org/logo-og.png" };
const App = () => {


    // exit_function = () => {
    //     BackHandler.exitApp();
    // }
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Thank You for Visiting our APP!",
      "We will Miss You",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Exit", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );

  

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/exit.jpg')} style={styles.image}>
    </ImageBackground>
    <Button style={styles.buttonStyle} title = "Exit Anyway" onPress={createTwoButtonAlert} ></Button>
     
        
    </View>
  );
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
    }
  });

export default App;
