import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import Carousel from './Carousel'
import Category from "./Category"
import { dummyData } from '../data/Data'
import { render } from 'react-dom'
import firestore from "@react-native-firebase/firestore"

export default class RefreshTab extends React.Component{
   
    state = {
        user:{
          tite:""
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
        
    return (
        
        <ScrollView scrollEventThrottle={16}>
        <View>
            <Carousel data = {dummyData}/>



            <ScrollView
                        scrollEventThrottle={16}
                    >

                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Ek Dinne Challa
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/kathmandu.jpeg')}
                                        name="Kathmandu" name2={this.state.user.name}
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2="879"
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2="879"
                                    />
                                    <Category imageUri={require('../assets/butwal.jpg')}
                                        name="Butwal" name2="879"
                                    />
                                </ScrollView>
                            </View>
                        </View>


                        <View style={{ flex: 1, backgroundColor: '#ecf3f9', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Arko Dinne Challa
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/kathmandu.jpeg')}
                                        name="Kathmandu" name2="879"
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2="879"
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2="879"
                                    />
                                    <Category imageUri={require('../assets/butwal.jpg')}
                                        name="Butwal" name2="879"
                                    />
                                </ScrollView>
                            </View>
                        </View>


                        <View style={{ flex: 1, backgroundColor: '#ecf3f9', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Third Dinne Challa
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                   <Category imageUri={require('../assets/kathmandu.jpeg')}
                                        name="Kathmandu" name2="879"
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2="879"
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2="879"
                                    />
                                    <Category imageUri={require('../assets/butwal.jpg')}
                                        name="Butwal" name2="879"
                                    />
                                </ScrollView>
                            </View>
                        </View>


                        <View style={{ flex: 1, backgroundColor: '#ecf3f9', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Fourth Dinne Challa
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/kathmandu.jpeg')}
                                        name="Kathmandu" name2="879"
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2="879"
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2="879"
                                    />
                                    <Category imageUri={require('../assets/butwal.jpg')}
                                        name="Butwal" name2="879"
                                    />
                                </ScrollView>
                            </View>
                        </View>




                    </ScrollView>




        </View>  
        </ScrollView>
    )
}}


  

const styles=StyleSheet.create({
    marketPrice:{
      flex:1,
      backgroundColor: "black",
      flexDirection: "row",
      
    },
  });

