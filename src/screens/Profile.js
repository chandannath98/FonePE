import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { TouchableOpacity } from 'react-native';
import colors from '../../colors';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default function Profile() {



const ListItem=({item})=>{
    return(
        <TouchableOpacity style={styles.itemConatiner}>
      <Text style={styles.boldTxt}>{item}</Text>
      <Text style={{color:colors.secondoryCoor}}>{">"}</Text>
            
        </TouchableOpacity>
    )
}




  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>

      <Text style={styles.boldTxt}>Notification</Text>


<View style={{flexDirection:"row",marginVertical:hp(2)}}>

<Image source={require("../../assets/consult-doctor.png")} style={{width:wp((20)),aspectRatio:1,marginRight:wp(5),justifyContent:"space-between"}} />
<View>
    <Text style={styles.boldTxt} >Prateek Goyal</Text>
    <Text style={[styles.boldTxt,{color:colors.secondoryCoor}]}>+91-1254785658</Text>
    <Text style={styles.boldTxt} >Prateek@demo.com</Text>

</View>

</View>

<ScrollView contentContainerStyle={{paddingBottom:100}} style={{marginTop:hp(5)}}>

<ListItem item={"my Order"} />
<ListItem item={"Manage Address"} />
<ListItem item={"My Wallet"} />
<ListItem item={"My offers"} />
<ListItem item={"Orders"} />
<ListItem item={"Membership"} />
<ListItem item={"Supports"} />
<ListItem item={"Refer & Earn"} />
<ListItem item={"Rate Us"} />
<ListItem item={"Share"} />
<ListItem item={"FAQ"} />
<ListItem item={"Logout"} />


</ScrollView>

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
        marginTop:hp(5),
        flex:1
    },
    boldTxt:{
        fontWeight:"bold"
    },
    itemConatiner:{
        borderColor:"grey",
        borderWidth:1,
        padding:10,
        borderRadius:2,
        marginVertical:hp(0.5),
        flexDirection:"row",
        justifyContent:"space-between"
    }

})