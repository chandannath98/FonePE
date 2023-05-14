import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { TouchableOpacity } from 'react-native';



export default function NotificationScreen() {



const ListItem=({item})=>{
    return(
        <TouchableOpacity style={styles.itemConatiner}>
      <Text style={styles.boldTxt}>{item}</Text>
            
        </TouchableOpacity>
    )
}




  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>

      <Text style={styles.boldTxt}>Notification</Text>

<View style={{marginTop:hp(5)}}>

<ListItem item={"Your order is Processing"} />
<ListItem item={"Your Refund Approval"} />


</View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"white",
        flex:1
    },
    innerContainer:{
        marginHorizontal:wp(5),
        marginTop:hp(5)
    },
    boldTxt:{
        fontWeight:"bold"
    },
    itemConatiner:{
        borderColor:"grey",
        borderWidth:1,
        padding:10,
        borderRadius:2,
        marginVertical:hp(0.5)
    }

})