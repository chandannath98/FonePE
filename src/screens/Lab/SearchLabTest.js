import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/HomeScreenComponents/Header'
// import { TextInput } from 'react-native-paper'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import colors from '../../../colors';
import Icon from "react-native-vector-icons/Fontisto";
import { useNavigation } from '@react-navigation/native';


  
export default function SearchLabTest() {

  const navigation=useNavigation()


    const PriceCard =()=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate("BookApointment")} style={styles.priceCard}>
                <Text style={[styles.cardHeader,styles.cardTxt]}>Full Body Checkup</Text>
              <Icon name="laboratory" size={18} color="black" style={{alignSelf:"center",marginVertical:hp(0.5)}} />
                
                <Text style={styles.cardTxt}>E-Repots in 2 days</Text>
                <Text style={styles.cardTxt}>Price : 250</Text>
                <Text style={[styles.cardTxt,styles.cardColordTxt]}>Book Now</Text>
            </TouchableOpacity>
        )
    }



  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>

      <TextInput   placeholder="Search Lab Test" style={styles.txtInp} />

    <Text style={styles.boldTxt}>Lab Name</Text>
    <Text style={styles.boldTxt}>Address : Noida</Text>
    <Text style={styles.boldTxt}>Phone : +91 - 7052653652</Text>
<FlatList  contentContainerStyle={{justifyContent:"space-between",width:"100%"}} data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] } numColumns={3} renderItem={({item})=><PriceCard />} />








      </View>



    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"white"
    },
    innerContainer:{
        marginHorizontal:wp(2),
        flex:1
    },
    txtInp: {
        backgroundColor: "white",
        width: wp(90),
        height: hp(6),
        paddingHorizontal: wp(2),
        borderColor: "grey",
        borderWidth: 1,
        marginBottom: hp(2),
        alignSelf:"center"
      //   alignItems:"center",
      //   textAlign:"center"
      },
      boldTxt:{
        fontSize:wp(4.5),
        fontWeight:"800",
        marginVertical:hp(1)
      },
      cardTxt:{
        fontSize:wp(2.7),
        marginVertical:hp(0.2)
      },
      cardHeader:{
        alignSelf:"center"
      },
      cardColordTxt:{
        color:colors.secondoryCoor,
        fontWeight:"600"
      },
      priceCard:{
        width:wp(30),
        borderColor:"grey",
        borderWidth:0.4,
        paddingHorizontal:wp(1.2),
        paddingVertical:hp(1.2),
        marginHorizontal:wp(1),
        marginVertical:hp(1.2)


      },

})