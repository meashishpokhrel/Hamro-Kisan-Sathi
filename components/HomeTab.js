import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import Carousel from './Carousel'
import Category from "./Category"
import { dummyData } from '../data/Data'
import { render } from 'react-dom'


export default class HomeTab extends React.Component{
   

    state={
        kathmandu:4,
        pokhara:6,
        dhangadi:8,
        butwal:10
    }

    componentDidMount(){

        firebasedata.database().ref('users/ekdine').on('value', (snapshot) =>{
            this.setState({
           ktm1: snapshot.val().kathmandu,
           pok1: snapshot.val().pokhara,
           dha1: snapshot.val().dhangadi,
           but1: snapshot.val().butwal,

          })
        })
         

        firebasedata.database().ref('users/twodine').on('value', (snapshot) =>{
            this.setState({
           ktm2: snapshot.val().kathmandu,
           pok2: snapshot.val().pokhara,
           dha2: snapshot.val().dhangadi,
           but2: snapshot.val().butwal,

          })

        })

        firebasedata.database().ref('users/thirddine').on('value', (snapshot) =>{
            this.setState({
           ktm3: snapshot.val().kathmandu,
           pok3: snapshot.val().pokhara,
           dha3: snapshot.val().dhangadi,
           but3: snapshot.val().butwal,

          })
        })

        firebasedata.database().ref('users/fourthdine').on('value', (snapshot) =>{
            this.setState({
           ktm4: snapshot.val().kathmandu,
           pok4: snapshot.val().pokhara,
           dha4: snapshot.val().dhangadi,
           but4: snapshot.val().butwal,

          })
        })


        
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
                                        name="Kathmandu" name2={this.state.ktm1}
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2={this.state.pok1}
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2={this.state.dha1}
                                    />
                                    <Category imageUri={require('../assets/butwal.jpg')}
                                        name="Butwal" name2={this.state.but1}
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
                                        name="Kathmandu" name2={this.state.ktm2}
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2={this.state.pok2}
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2={this.state.dha2}
                                    />
                                    <Category imageUri={require('../assets/butwal.jpg')}
                                        name="Butwal" name2={this.state.but2}
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
                                        name="Kathmandu" name2={this.state.ktm3}
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2={this.state.pok3}
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2={this.state.dha3}
                                    />
                                    <Category imageUri={require('../assets/butwal.jpg')}
                                        name="Butwal" name2={this.state.but3}
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
                                        name="Kathmandu" name2={this.state.ktm4}
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2={this.state.pok4}
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2={this.state.dha4}
                                    />
                                    <Category imageUri={require('../assets/butwal.jpg')}
                                        name="Butwal" name2={this.state.but4}
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

