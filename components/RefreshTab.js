import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import Carousel from './Carousel'
import Category from "./Category"
// import { dummyData } from '../data/Data'
import { render } from 'react-dom'
import firestore from "@react-native-firebase/firestore"
import storage from '@react-native-firebase/storage';

export default class RefreshTab extends React.Component{
   
    state = {
        user:[{
            title: "name2yes", url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
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
      }
      constructor(props){
        super (props);
        this.getUser();
        this.subscriber = firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").onSnapshot(doc => {
            image3=storage().ref('/images/image3.jpg');
            image2=storage().ref('/images/image2.jpg');
            image1 = storage().ref('/images/image1.jpg');
        image1
      .getDownloadURL()
      .then((url1) => {
          image2.getDownloadURL().then((url2) => {
            image3.getDownloadURL().then((url3) => {
          this.setState({
            user:[{
                title: doc.data().Title1, url: url1,
                description: doc.data().Detail1,
                id: 1
        
        },
        {
                title: doc.data().Title2, url: url2,
                description: doc.data().Detail2,
                id: 2
        },
        {
                title: doc.data().Title3, url: url3,
                description: doc.data().Detail3,
                id: 3
        }]
          })
        })
    })
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

            {/* <Carousel data = {dummyData}/> */}

            
            <Carousel data = {this.state.user}
            />
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

