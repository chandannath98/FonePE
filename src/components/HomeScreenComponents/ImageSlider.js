import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";


export default function ImageSlider({bgColor,imgList}) {

const ImageCard=({item})=>{
   const bg="white"
    return(
        <TouchableOpacity style={{padding:4}}>

        <Image source={item} style={{height:hp(12),width:wp(35)}}   />
        </TouchableOpacity>
    )
}

  return (
    <View style={{flex:1,backgroundColor:bgColor}}>
    

<FlatList contentContainerStyle={{paddingLeft:wp(3)}} horizontal renderItem={({item})=><ImageCard item={item}/>} data={imgList} />

    </View>
  )
}

const styles = StyleSheet.create({})