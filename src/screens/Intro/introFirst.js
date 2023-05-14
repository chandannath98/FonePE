import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Text from "../../components/customComponents/Text";
import colors from '../../../colors';
import AppBackground from "../../components/HOC/BackGroudImage";
import { useNavigation } from "@react-navigation/native";
import NextPrevBtn from "./NextPrevBtn";
import StartNowBtn from "./StartNowBtn";

export default function IntroFirst() {
const navigation=useNavigation()

  return (
    <AppBackground>
      <View style={styles.container}>
        <Image source={require("../../../assets/logo.png")} style={styles.img} />
        <Image
          source={require("../../../assets/consult-doctor.png")}
          style={styles.img}
        />
        <Text style={styles.mainTxt}>Consult doctors</Text>
        <Text style={styles.lowerTxt}>Get instant appoinmentst</Text>
        <Text style={styles.lowerTxt}>Schedule you appoinment</Text>
        <Text style={styles.lowerTxt}>Book offline appoinment</Text>

        <StartNowBtn />
        <NextPrevBtn title={"Next"} onPress={()=>navigation.navigate("IntroSecond")} />
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
  mainTxt: {
    fontSize: wp(5),
    marginVertical: hp(2),
    fontWeight: "800",
  },
  img: { width: wp(70), height: hp(20), marginBottom: hp(2) },
  lowerTxt: {
    fontSize: wp(4.2),
    marginVertical: hp(0.2),
    fontWeight: "800",
    alignSelf: "flex-start",
    marginHorizontal: wp(22),
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
