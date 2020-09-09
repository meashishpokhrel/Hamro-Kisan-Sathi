import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import Carousel from '../component/Carousel'
import Category from "../component/Category"
import { dummyData } from '../data/Data'




const Home = ({navigation}) =>{
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
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Kathmandu"
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara"
                                    />
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Dhangadi"
                                    />
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Butwal"
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
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Kathmandu"
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara"
                                    />
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Dhangadi"
                                    />
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Butwal"
                                    />
                                </ScrollView>
                            </View>
                        </View>




                    </ScrollView>




        </View>  
        </ScrollView>
    )
}


  

const styles=StyleSheet.create({
    marketPrice:{
      flex:1,
      backgroundColor: "black",
      flexDirection: "row",
      
    },
  });

export default Home




// exit_function = () => {
//     BackHandler.exitApp();
// }

// <Button
// title="Exit Button"
// onPress={this.exit_function}
// />