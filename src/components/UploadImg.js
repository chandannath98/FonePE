import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';




export default function UploadImg() {

const navigation = useNavigation()

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate("UploadPrescription")}
            style={{
              paddingVertical: hp(2),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: wp(60), height: hp(7) }}
              source={require("../../assets/upload.png")}
            />
          </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})