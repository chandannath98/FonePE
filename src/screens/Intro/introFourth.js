import { Image, StyleSheet,  TouchableHighlight,  View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Text from "../../components/customComponents/Text";
import colors from '../../../colors';
import { useNavigation } from '@react-navigation/native';
import NextPrevBtn from './NextPrevBtn';
import AppBackground from '../../components/HOC/BackGroudImage';
import StartNowBtn from './StartNowBtn';



export default function IntroFourth() {
    const navigation=useNavigation()

  return (
    <AppBackground>

    <View style={styles.container}>
    <Image source={require("../../../assets/logo.png")} style={{width:wp(70),height:hp(20),marginBottom:hp(2)}} />
    <Image source={require("../../../assets/track.png")} style={styles.img} />
    <Text style={styles.mainTxt} >Track Your Health</Text>
    <Text style={styles.lowerTxt} >Free personalised diet chart</Text>
    <Text style={styles.lowerTxt} >Free dietician consultation</Text>
    <Text style={styles.lowerTxt} >Measure your calories</Text>

    <StartNowBtn/>

    </View>
    </AppBackground>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center",
        paddingTop:hp(12)
        // justifyContent:"center"
    },
    mainTxt:{
        fontSize:wp(5),
        marginVertical:hp(2),
        fontWeight:"800"
    },
    img:{aspectRatio:1,height:hp(19),
    marginBottom:hp(2)
    },
    lowerTxt:{
        fontSize:wp(3.8),
        marginVertical:hp(0.2),
        fontWeight:"800",
        alignSelf:"center",
        marginHorizontal:wp(2)

    },
    btn:{
        backgroundColor:colors.secondoryCoor,
        paddingVertical:hp(1),
        paddingHorizontal:wp(15),
        borderRadius:5,
        marginVertical:hp(5)
    },
    btnTxt:{
        color:"white",
        fontSize:wp(5)
    }

})