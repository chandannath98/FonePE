import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Text from "../../components/customComponents/Text";
import colors from "../../../colors";
import { useNavigation } from "@react-navigation/native";
import AppBackground from "../../components/HOC/BackGroudImage";
import NextPrevBtn from "./NextPrevBtn";
import StartNowBtn from "./StartNowBtn";

export default function IntroZero() {
  const navigation = useNavigation();

  return (
    <AppBackground>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/logo.png")}
          style={{ width: wp(70), height: hp(20), marginBottom: hp(2) }}
        />
       
        <Text style={styles.mainTxtLeft}>Consult Doctors</Text>
        <Text style={styles.mainTxtRight}>Order medicines</Text>
        <Text style={styles.mainTxtLeft}>Get Your Lab tests</Text>
        <Text style={styles.mainTxtRight}>Track your health</Text>
        <Text style={styles.mainTx}>From your comfort</Text>
        <Text style={styles.mainTx}>of your home</Text>
       
        <NextPrevBtn title={"Next"} onPress={()=>navigation.navigate("IntroFirst")} />

        <StartNowBtn/>


        

      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: hp(12),
    // justifyContent:"center"
  },
  mainTxtLeft: {
    fontSize: wp(5),
    marginVertical: hp(2),
    fontWeight: "800",
    alignSelf:"flex-start",
    marginHorizontal:wp(10)
  },
  mainTx: {
    fontSize: wp(5),
    marginVertical: hp(0.2),
    fontWeight: "800",
   
  },
  mainTxtRight: {
    fontSize: wp(5),
    marginVertical: hp(2),
    fontWeight: "800",
    alignSelf:"flex-end",
    marginHorizontal:wp(10)


  },



  img: { width: wp(50), height: hp(15), marginBottom: hp(2) },
  lowerTxt: {
    fontSize: wp(3.8),
    marginVertical: hp(0.2),
    fontWeight: "800",
    alignSelf: "center",
    marginHorizontal: wp(2),
  },
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
});
