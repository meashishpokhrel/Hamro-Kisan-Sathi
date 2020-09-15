// import React, {Component} from "react";
// import {View, Text, Button} from "react-native";

// import firestore from "@react-native-firebase/firestore"

// class dummyData extends Component {
//   state = {
//     user:{
//       name:""
//     }
//   }
//   constructor(props){
//     super (props);
//     this.getUser();
//     this.subscriber = firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").onSnapshot(doc => {
//       this.setState({
//         user:{
//           name: doc.data().name
//         }
//       })
//     })
//   }
//   getUser = async () =>{
//     const userDocument = await firestore().collection("users").doc("v7Qq6snlsKgbk1OfTnJ3").get()
//     console.log(userDocument)
//   }
//   render(){
        
//   return(
//     <View>
//       <Text> Name: {this.state.user.name}</Text>
//       {/* <Welcome /> */}
//       <Images />
//     </View>
//   )
//   }
// }

// export default Welcome;


export const dummyData =
[{
        title: 'Anise Aroma Art Bazarr', url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
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