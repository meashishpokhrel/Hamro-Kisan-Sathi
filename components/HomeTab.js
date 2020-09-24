import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import Carousel from './Carousel'
import Category from "./Category"
import { render } from 'react-dom'
import firestore from "@react-native-firebase/firestore"
import storage from '@react-native-firebase/storage';

export default class RefreshTab extends React.Component{
   
    state = {
        user:[{
            title: "", url: 'a',
            description: ".",
            id: 1
    
    },
    {
            title: '', url: 'a',
            description: "",
            id: 2
    },
    {
            title: '', url: 'a',
            description: "",
            id: 3
    }],
    date:{
        value: ""
    },
    topics:{
        t1: "", //Title ek dine chala
        t1k:"",     //kathmandu PRice
        t1c:"",    // Chitwan PRice
        t1p:"",     //pokhara Price
        t1d:"",     //Dhangadi Price
        t1b:"",   //Biratnagar Price
    
        t2: "", //Title ek dine chala
        t2k:"",     //kathmandu PRice
        t2c:"",    // Chitwan PRice
        t2p:"",     //pokhara Price
        t2d:"",     //Dhangadi Price
        t2b:"",     //Biratnagar Pric
    
        t3: "", //Title ek dine chala
        t3h:"",     //kathmandu PRice
        t3l:"",    // Chitwan PRice
        t3b:"",     //pokhara Price

        t4: "", //Title ek dine chala
        t4b:"",     //kathmandu PRice
        t4s:"",    // Chitwan PRice

        t5: "", //Title ek dine chala
        t5a:"",
        t5b:"",     //kathmandu PRice
        t5c:"",    // Chitwan PRice
        t5d:"",
        t5e:"",
        t5f:"",
        t5g:"",
        t5b:"",
        t5av:"", 
        t5bv:"",    //kathmandu PRice
        t5cv:"",    // Chitwan PRice
        t5dv:"",
        t5ev:"",
        t5fv:"",
        t5gv:"",
        t5bv:"",
        t5bv:"",
  
      }
    }
      constructor(props){
        super (props);
        this.getUser();
        
        this.subscriber1 = firestore().collection("updatedDate").doc("yYVQMdJ1Argb0uuZMfYq").onSnapshot(doc => {
            this.setState({
                date:{
                    value: doc.data().date,
                }
            })
        })
            this.subscriber1 = firestore().collection("rates").doc("d4zCzT3U8UvRh9bam0mP").onSnapshot(doc => {
                this.setState({
                    topics:{
                        t1: doc.data().Topic1title, //Title ek dine chala
                        t1k:doc.data().Topic1kat,     //kathmandu PRice
                        t1c:doc.data().Topic1chi,    // Chitwan PRice
                        t1p:doc.data().Topic1pok,     //pokhara Price
                        t1d:doc.data().Topic1dhan,     //Dhangadi Price
                        t1b:doc.data().Topic1birat,   //Biratnagar Price
                    
                        t2: doc.data().Topic2title, //Title ek dine chala
                        t2k:doc.data().Topic2kat,     //kathmandu PRice
                        t2c:doc.data().Topic2chi,    // Chitwan PRice
                        t2p:doc.data().Topic2pok,     //pokhara Price
                        t2d:doc.data().Topic2dhan,     //Dhangadi Price
                        t2b:doc.data().Topic2birat,  
                    
                        t3: doc.data().Topic3title, //Title ek dine chala
                        t3h:doc.data().Topic3hyline,     //kathmandu PRice
                        t3b:doc.data().Topic3bovan,    // Chitwan PRice
                        t3l:doc.data().Topic3loh,   //pokhara Price
                
                        t4: doc.data().Topic4title, //Title ek dine chala
                        t4b:doc.data().Topic4large,     //kathmandu PRice
                        t4s:doc.data().Topic4small,      // Chitwan PRice
                
                        t5: doc.data().Topic5title, //Title ek dine chala
                        t5a:doc.data().Topic5item1,
                        t5b:doc.data().Topic5item2,     //kathmandu PRice
                        t5c:doc.data().Topic5item3,    // Chitwan PRice
                        t5d:doc.data().Topic5item4,
                        t5e:doc.data().Topic5item5,
                        t5f:doc.data().Topic5item6,
                        t5g:doc.data().Topic5item7,
                        t5h:doc.data().Topic5item8,

                        t5av:doc.data().Topic5val1, 
                        t5bv:doc.data().Topic5val2,    //kathmandu PRice
                        t5cv:doc.data().Topic5val3,    // Chitwan PRice
                        t5dv:doc.data().Topic5val4,
                        t5ev:doc.data().Topic5val5,
                        t5fv:doc.data().Topic5val6,
                        t5gv:doc.data().Topic5val7,
                        t5hv:doc.data().Topic5val8,
                  
                      }
                  })
                })

    const image1 = storage().ref('/images/image1.jpg');	
    const image2 = storage().ref('/images/image2.jpg');	
    const image3 = storage().ref('/images/image3.jpg');	
    image1.getDownloadURL().then((url) => {	
        //from url you can fetched the uploaded image easily	
        this.addURL = firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").update({
          url1: url,
        }) 
      })
      image2.getDownloadURL().then((url) => {	
        //from url you can fetched the uploaded image easily	
        this.addURL = firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").update({
          url2: url,
        }) 
      })
      image3.getDownloadURL().then((url) => {	
        //from url you can fetched the uploaded image easily	
        this.addURL = firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").update({
          url3: url,
        }) 
      })

            this.subscriber = firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").onSnapshot(doc => {
          this.setState({
            user:[{
                title: doc.data().Title1, url: doc.data().url1,
                description: doc.data().Detail1,
                id: 1
        
        },
        {
                title: doc.data().Title2, url: doc.data().url2,
                description: doc.data().Detail2,
                id: 2
        },
        {
                title: doc.data().Title3, url: doc.data().url3,
                description: doc.data().Detail3,
                id: 3
        }],
          })
        })
        
      }

      getUser = async () =>{
        const userDocument = await firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").get()
        const userDocument22 = await firestore().collection("updatedData").doc("yYVQMdJ1Argb0uuZMfYq").get()
        const userDocument2 = await firestore().collection("rates").doc("d4zCzT3U8UvRh9bam0mP").get()
    }
    
    render(){
    return (
        
        <ScrollView scrollEventThrottle={16}>
        <View>
            {/* <Carousel data = {dummyData}/> */}
        {/* <Images /> */}
            
            {/* <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    /> */}
     

            <Carousel data = {this.state.user}
            />
            <ScrollView
                        scrollEventThrottle={16}
                    >
                        <Text>  Data Last Updated on: {this.state.date.value}</Text>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                {this.state.topics.t1}
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/ktm.jpg')}
                                        name="Kathmandu" name2={this.state.topics.t1k}
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2={this.state.topics.t1p}
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2={this.state.topics.t1d}
                                    />
                                    <Category imageUri={require('../assets/chitwan.jpg')}
                                        name="Chitwan" name2={this.state.topics.t1c}
                                    />
                                    <Category imageUri={require('../assets/itahari.jpg')}
                                        name="Biratnagar" name2={this.state.topics.t1b}
                                    />
                                </ScrollView>
                            </View>
                        </View>


                        <View style={{ flex: 1, backgroundColor: '#ecf3f9', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                {this.state.topics.t2}
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/ktm.jpg')}
                                        name="Kathmandu" name2={this.state.topics.t2k}
                                    />
                                    
                                    <Category imageUri={require('../assets/pokhara.jpg')}
                                        name="Pokhara" name2={this.state.topics.t2p}
                                    />
                                    <Category imageUri={require('../assets/dhangadi.jpg')}
                                        name="Dhangadi" name2={this.state.topics.t2d}
                                    />
                                    <Category imageUri={require('../assets/chitwan.jpg')}
                                        name="Chitwan" name2={this.state.topics.t2c}
                                    />
                                    <Category imageUri={require('../assets/itahari.jpg')}
                                        name="Biratnagar" name2={this.state.topics.t2b}
                                    />
                                </ScrollView>
                            </View>
                        </View>


                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            {this.state.topics.t3}
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                   <Category imageUri={require('../assets/chicken.jpg')}
                                        name="Hy-line" name2={this.state.topics.t3h}
                                    />
                                    
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                        name="Lohmann" name2={this.state.topics.t3l}
                                    />
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                        name="Bovens Brown" name2={this.state.topics.t3b}
                                    />
                                </ScrollView>
                            </View>
                        </View>


                        <View style={{ flex: 1, backgroundColor: '#ecf3f9', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            {this.state.topics.t4}
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/eggs.jpg')}
                                        name="Large size" name2={this.state.topics.t4b}
                                    />
                                    
                                    <Category imageUri={require('../assets/eggs.jpg')}
                                        name="Medium size" name2={this.state.topics.t4s}
                                    />
                                    
                                </ScrollView>
                            </View>
                        </View>


                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            {this.state.topics.t5}
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                        name={this.state.topics.t5a} name2={this.state.topics.t5av}
                                    />
                                    
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                        name={this.state.topics.t5b} name2={this.state.topics.t5bv}
                                    />
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                        name={this.state.topics.t5c} name2={this.state.topics.t5cv}
                                    />
                                    
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                       name={this.state.topics.t5d} name2={this.state.topics.t5dv}
                                    />
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                       name={this.state.topics.t5e} name2={this.state.topics.t5ev}
                                    />
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                       name={this.state.topics.t5f} name2={this.state.topics.t5fv}
                                    />
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                       name={this.state.topics.t5g} name2={this.state.topics.t5gv}
                                    />
                                    <Category imageUri={require('../assets/chicken.jpg')}
                                       name={this.state.topics.t5h} name2={this.state.topics.t5hv}
                                    />
                                </ScrollView>
                            </View>
                        </View>



                    </ScrollView>




        </View>  
        </ScrollView>
    )
    }
    }


  

const styles=StyleSheet.create({
    marketPrice:{
      flex:1,
      backgroundColor: "black",
      flexDirection: "row",
      
    },
  });

