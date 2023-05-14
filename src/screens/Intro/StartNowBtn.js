import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import colors from '../../../colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native'



export default function StartNowBtn() {

    const navigation=useNavigation()

    const [isLoading, setIsLoading] = useState(false)

    const setItem = async () => {
        setIsLoading(true)
        try {
          await AsyncStorage.setItem('appStatus', "true");
          navigation.navigate("App")
        } catch (error) {
          console.error('Error saving item:', error);
        }
      }

      if(isLoading){
        return(
<ActivityIndicator size={"large"} color={colors.secondoryCoor} />

        )
      }


  return (
    <TouchableHighlight onPress={setItem} style={styles.btn}>
    <Text style={styles.btnTxt}>Start Now</Text>
  </TouchableHighlight>
  )
}

const styles = StyleSheet.create({

    btn: {
        backgroundColor: colors.secondoryCoor,
        paddingVertical: hp(1),
        paddingHorizontal: wp(15),
        borderRadius: 5,
        marginVertical: hp(5),
      },
      btnTxt: {
        color: "white",
        fontSize: wp(5),
      },
})