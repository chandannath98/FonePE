import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import colors from '../../../colors';
import CustomButton from '../customComponents/CustomBtn';
import { useNavigation } from '@react-navigation/native';


export default function SecondBanner() {

const navigation=useNavigation()

  return (
    <View style={styles.container}>
        <View style={{justifyContent:"center"}}>
      <Text>Online Doctor Consultation</Text>
      <Text>Call with the doctor</Text>

      <CustomButton title="Call Now" onPress={()=>navigation.navigate("Auth")} style={styles.customButton} />

        </View>
     <Image source={require("../../../assets/docCall.png")} style={{aspectRatio:1,width:wp(25)}} />

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white",
        paddingVertical:hp(1),
        paddingHorizontal:wp(3)
    },
    callNowBtn:{
        color:colors.secondoryCoor
    },
    customButton:{
        marginVertical:hp(1)
    }

})