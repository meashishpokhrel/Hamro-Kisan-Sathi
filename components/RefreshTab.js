import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import firestore from "@react-native-firebase/firestore"
import { ScrollView } from 'react-native-gesture-handler';
export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:{
        value:""
      },
      tableHead: ['', 'KAT', 'CHI', 'POK',],
      tableData: [
        []
      ]
    }
    this.subscriber10 = firestore().collection("updatedDate").doc("yYVQMdJ1Argb0uuZMfYq").onSnapshot(doc => {
      this.setState({
          date:{
              value: doc.data().date,
          }
      })
  })
    this.subscriber2 = firestore().collection("topic2").doc("70Oo3WVDuZBkEpW57RlS").onSnapshot(doc => {
    this.subscriber1 = firestore().collection("rates").doc("d4zCzT3U8UvRh9bam0mP").onSnapshot(doc => {
      this.setState({
        tableData: [
          
          [doc.data().Topic1title,doc.data().Topic1kat,doc.data().Topic1chi,doc.data().Topic1pok],
          [doc.data().Topic2title,doc.data().Topic2kat,doc.data().Topic2chi,doc.data().Topic2pok],
          ['','BIRAT','DHAN',''],
          [doc.data().Topic1title,doc.data().Topic1birat,doc.data().Topic1dhan,''],
          [doc.data().Topic2title,doc.data().Topic2birat,doc.data().Topic2dhan,''],
          [''],
          [doc.data().Topic3title,'Hyline',doc.data().Topic3hyline,''],
          ['','Bovans-Brown',doc.data().Topic3bovan,''],
          ['','Lohmann',doc.data().Topic3loh,,''],
      
          [doc.data().Topic4title,'Large Size',doc.data().Topic4large,''],
          ['','Small Size',doc.data().Topic4small,,''],
          [''],
          [doc.data().Topic5title,doc.data().Topic5item1,doc.data().Topic5val1,''],
          ['',doc.data().Topic5item2,doc.data().Topic5val2,''],
          ['',doc.data().Topic5item3,doc.data().Topic5val3,''],
          ['',doc.data().Topic5item4,doc.data().Topic5val4,''],
          ['',doc.data().Topic5item5,doc.data().Topic5val5,''],
          ['',doc.data().Topic5item6,doc.data().Topic5val6,''],
          ['',doc.data().Topic5item7,doc.data().Topic5val7,''],
          ['',doc.data().Topic5item8,doc.data().Topic5val8,''],
          [''],


          
          
        ]
        })
      })
    })
      
          this.subscriber3 = firestore().collection("topic3").doc("l8kY2PHIh8SWxAb9A41V").onSnapshot(doc => {
              this.setState({
                tableData: [
                  [doc.data().title,doc.data().title,doc.data().title,doc.data().title],
                  [doc.data().title2,doc.data().title2,doc.data().title2,doc.data().title2],
                  [doc.data().title,doc.data().title,doc.data().title,doc.data().title],
                  [doc.data().title,doc.data().title,doc.data().title,doc.data().title],
                ]
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
  }
  getUser = async () =>{
    const userDocument0 = await firestore().collection("updatedDate").doc("yYVQMdJ1Argb0uuZMfYq").get()
    const userDocument2 = await firestore().collection("rates").doc("d4zCzT3U8UvRh9bam0mP").get()
    const userDocument3 = await firestore().collection("topic2").doc("70Oo3WVDuZBkEpW57RlS").get()
    const userDocument4 = await firestore().collection("topic3").doc("l8kY2PHIh8SWxAb9A41V").get()
    const userDocument5 = await firestore().collection("topic4").doc("pD72V8KxiA8KyZTvURBD").get()
    const userDocument6 = await firestore().collection("topic5").doc("JvrMXKeuuj9e5hQ5ctv4").get()
}

 
  render() {
    const state = this.state;
    return (
      <ScrollView>
      <View style={styles.container}>
      <Text>  Data Last Updated on: {this.state.date.value}</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
      </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});