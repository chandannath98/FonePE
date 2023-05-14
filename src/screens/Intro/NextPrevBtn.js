import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native";
import colors from "../../../colors";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";


export default function NextPrevBtn({onPress,title}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.btn}
    >
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({

    btn: {
        backgroundColor: colors.secondoryCoor,
        paddingVertical: hp(1),
        paddingHorizontal: wp(5),
        borderRadius: 50,
        marginVertical: hp(5),
        position:"absolute",
        bottom:10,
        right:10
      },
      btnTxt: {
        color: "white",
        fontSize: wp(5),
      },
      
});
