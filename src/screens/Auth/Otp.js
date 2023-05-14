import {
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import Text from "../../components/customComponents/Text";
  import colors from "../../../colors";
  import { useNavigation } from "@react-navigation/native";
  import AppBackground from "../../components/HOC/BackGroudImage";
  import { TextInput } from "react-native";
  import CustomButton from "../../components/customComponents/CustomBtn";
  
  export default function Otp() {
    const navigation = useNavigation();
  
    return (
      <AppBackground>
        <View style={styles.container}>
          <Image
            source={require("../../../assets/logo.png")}
            style={{ width: wp(70), height: hp(20), marginBottom: hp(2) }}
          />
  
          <Text style={styles.mainTx}>Get OTP from +91-1234567890</Text>
  
          <View style={{ marginVertical: hp(4) }}>
            <TextInput maxLength={6} keyboardType="number-pad" placeholder="6 - Digit OTP" style={styles.txtInp} />
           
          </View>
  
          <CustomButton  onPress={()=>navigation.navigate("AddMoneyInWallet")} style={{ width: wp(65) }} title={"Login"} />
          <TouchableOpacity>
            <Text style={{ marginVertical: hp(3), color: colors.secondoryCoor }}>
              Login with OTP
            </Text>
          </TouchableOpacity>
  
          <Text style={[styles.lowerTxt]}>By signing in you agree to Our</Text>
          <TouchableOpacity>
            <Text style={[styles.lowerTxt, styles.underLinedTxt]}>
              Terms & Conditions and Privacy
            </Text>
          </TouchableOpacity>
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
  
    mainTx: {
      fontSize: wp(5),
      marginTop: hp(4),
      fontWeight: "800",
    },
  
    img: { width: wp(50), height: hp(15), marginBottom: hp(2) },
    lowerTxt: {
      fontSize: wp(3.8),
      marginVertical: hp(0.2),
      // fontWeight: "800",
      alignSelf: "center",
      marginHorizontal: wp(2),
      color: "#575757",
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
    txtInp: {
      backgroundColor: "white",
      width: wp(80),
      height: hp(6),
      paddingHorizontal: wp(2),
      borderColor: "grey",
      borderWidth: 1,
      marginBottom: hp(2),
      alignItems:"center",
      textAlign:"center"
    },
    underLinedTxt: {
      textDecorationLine: "underline",
    },
  });
  