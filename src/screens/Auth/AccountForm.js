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
  
  export default function AccountForm() {
    const navigation = useNavigation();
  
    return (
      <AppBackground>
        <View style={styles.container}>
         
  
          {/* <Text style={styles.mainTx}>Get OTP from +91-1234567890</Text> */}
          <Text style={styles.mainTx}>Setup Your Account</Text>
  
            <TextInput   placeholder="First Name" style={styles.txtInp} />
            <TextInput   placeholder="Last Name" style={styles.txtInp} />
           
           <View style={{flexDirection:"row",justifyContent:"space-between"}}>
           <TextInput   placeholder="Date of Birth" style={styles.txtInpSmall} />
           <TextInput   placeholder="Gender" style={styles.txtInpSmall} />

           </View>
        
           <TextInput   placeholder="Full Address" style={[styles.txtInp,{height:hp(10)}]} />
  


           <View style={{flexDirection:"row",justifyContent:"space-between"}}>
           <TextInput   placeholder="City" style={styles.txtInpSmall} />
           <TextInput   placeholder="Zip Code" style={styles.txtInpSmall} />

           </View>

           <TextInput   placeholder="Enter Your Email id" style={styles.txtInp} />
           <TextInput  keyboardType="number-pad"  placeholder="Enter Your Phone No." style={styles.txtInp} />
           <TextInput   placeholder="Set Your Pin" style={styles.txtInp} />






          <CustomButton onPress={()=>navigation.navigate("Otp")} style={{ width: wp(60),alignSelf:"center" }} title={"Submit"} />
          

        </View>
      </AppBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: "center",
      paddingTop: hp(5),
      paddingHorizontal:wp(5)
      // justifyContent:"center"
    },
  
    mainTx: {
      fontSize: wp(5),
      marginTop: hp(4),
      fontWeight: "800",
      marginVertical:hp(2)
    //   alignSelf:"center"
    },
  
    img: { width: wp(50), height: hp(15), marginBottom: hp(2) },
    lowerTxt: {
      fontSize: wp(3.8),
      marginVertical: hp(4),
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
      width: wp(90),
      height: hp(6),
      paddingHorizontal: wp(2),
      borderColor: "grey",
      borderWidth: 1,
      marginBottom: hp(2),
    //   alignItems:"center",
    //   textAlign:"center"
    },
    txtInpSmall: {
      backgroundColor: "white",
      width: wp(40),
      height: hp(6),
      paddingHorizontal: wp(2),
      borderColor: "grey",
      borderWidth: 1,
      marginBottom: hp(2),
    //   alignItems:"center",
    //   textAlign:"center"
    },
    underLinedTxt: {
      textDecorationLine: "underline",
    },
  });
  