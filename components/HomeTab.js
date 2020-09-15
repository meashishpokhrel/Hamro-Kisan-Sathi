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
    }],
    topic1:{
        title: "", //Title ek dine chala
        kat:"",     //kathmandu PRice
        dhan:"",    // Dhangadi PRice
        pok:"",     //pokhara Price
        ita:"",     //Itahari Price
        chit:""     //Chitwan Price
    },
    topic2:{
        title: "", //Title ek dine chala
        kat:"",     //kathmandu PRice
        dhan:"",    // Dhangadi PRice
        pok:"",     //pokhara Price
        ita:"",     //Itahari Price
        chit:""     //Chitwan Price
    },
    topic3:{
        title: "", //Title ek dine chala
        kat:"",     //kathmandu PRice
        dhan:"",    // Dhangadi PRice
        pok:"",     //pokhara Price
        ita:"",     //Itahari Price
        chit:""     //Chitwan Price
    },
    topic4:{
        title: "", //Title ek dine chala
        kat:"",     //kathmandu PRice
        dhan:"",    // Dhangadi PRice
        pok:"",     //pokhara Price
        ita:"",     //Itahari Price
        chit:""     //Chitwan Price
    },
    topic5:{
        title: "", //Title ek dine chala
        kat:"",     //kathmandu PRice
        dhan:"",    // Dhangadi PRice
        pok:"",     //pokhara Price
        ita:"",     //Itahari Price
        chit:""     //Chitwan Price
    },
    topic6:{
        title: "", //Title ek dine chala
        kat:"",     //kathmandu PRice
        dhan:"",    // Dhangadi PRice
        pok:"",     //pokhara Price
        ita:"",     //Itahari Price
        chit:""     //Chitwan Price
    },
    topic7:{
        title: "", //Title ek dine chala
        kat:"",     //kathmandu PRice
        dhan:"",    // Dhangadi PRice
        pok:"",     //pokhara Price
        ita:"",     //Itahari Price
        chit:""     //Chitwan Price
    },
      }
      constructor(props){
        super (props);
        this.getUser();
        this.subscriber = firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").onSnapshot(doc => {
            this.subscriber1 = firestore().collection("topic1").doc("YNLFsTS0fqqvlF9C0qsy").onSnapshot(doc => {
            this.setState({
                topic1:{
                  title: doc.data().title,
                  kat: doc.data().kat,     
                    dhan:doc.data().dhan,    
                    pok:doc.data().pok,     
                    ita:doc.data().ita,     
                    chit:doc.data().chit  
                }
              })
            })
            this.subscriber2 = firestore().collection("topic2").doc("70Oo3WVDuZBkEpW57RlS").onSnapshot(doc => {
                this.setState({
                    topic2:{
                      title: doc.data().title,
                      kat: doc.data().kat,     
                        dhan:doc.data().dhan,    
                        pok:doc.data().pok,     
                        ita:doc.data().ita,     
                        chit:doc.data().chit  
                    }
                  })
                })

                this.subscriber3 = firestore().collection("topic3").doc("l8kY2PHIh8SWxAb9A41V").onSnapshot(doc => {
                    this.setState({
                        topic3:{
                          title: doc.data().title,
                          kat: doc.data().kat,     
                            dhan:doc.data().dhan,    
                            pok:doc.data().pok,     
                            ita:doc.data().ita,     
                            chit:doc.data().chit  
                        }
                      })
                    })

                    this.subscriber4 = firestore().collection("topic4").doc("pD72V8KxiA8KyZTvURBD").onSnapshot(doc => {
                        this.setState({
                            topic4:{
                              title: doc.data().title,
                              kat: doc.data().kat,     
                                dhan:doc.data().dhan,    
                                pok:doc.data().pok,     
                                ita:doc.data().ita,     
                                chit:doc.data().chit  
                            }
                          })
                        })

                        this.subscriber4 = firestore().collection("topic5").doc("JvrMXKeuuj9e5hQ5ctv4").onSnapshot(doc => {
                            this.setState({
                                topic5:{
                                  title: doc.data().title,
                                  kat: doc.data().kat,     
                                    dhan:doc.data().dhan,    
                                    pok:doc.data().pok,     
                                    ita:doc.data().ita,     
                                    chit:doc.data().chit  
                                }
                              })
                            })


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
        const userDocument2 = await firestore().collection("topic1").doc("YNLFsTS0fqqvlF9C0qsy").get()
        const userDocument3 = await firestore().collection("topic2").doc("70Oo3WVDuZBkEpW57RlS").get()
        const userDocument4 = await firestore().collection("topic3").doc("l8kY2PHIh8SWxAb9A41V").get()
        const userDocument5 = await firestore().collection("topic4").doc("pD72V8KxiA8KyZTvURBD").get()
        const userDocument6 = await firestore().collection("topic5").doc("JvrMXKeuuj9e5hQ5ctv4").get()
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
                                {this.state.topic1.title}
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/kathmandu.jpeg')}
                                        name="Kathmandu" name2={this.state.topic1.kat}
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
                                    <Category imageUri={require('../assets/itahari.jpg')}
                                        name="Itahari" name2="879"
                                    />
                                </ScrollView>
                            </View>
                        </View>


                        <View style={{ flex: 1, backgroundColor: '#ecf3f9', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                {this.state.topic2.title}
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


                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            {this.state.topic3.title}
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
                            {this.state.topic4.title}
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


                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            {this.state.topic5.title}
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

