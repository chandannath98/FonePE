import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import CustomButton from "../customComponents/CustomBtn";

export default function CartCard({item,increaseQty,decreaseQty}) {
   
  return (
    <View
      style={{
        flexDirection: "row",
        borderColor: "grey",
        borderWidth: 1,
        marginVertical: hp(1),
        borderRadius: 3,
      }}
    >
      <Image
        source={require("../../../assets/medicine.png")}
        style={{
          width: wp(25),
          aspectRatio: 1,
          marginRight: wp(2),
          marginHorizontal: wp(1),
        }}
      />
      <View
        style={{
          width: wp(60),
          justifyContent: "space-between",
          paddingVertical: hp(1),
        }}
      >
        <View>
          <Text>{item.itemName}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderColor: "black",
              borderWidth: 1,
            }}
          >
            <TouchableOpacity onPress={()=>decreaseQty(item.id)} style={styles.cartQtyCtrlBtn}>
              <Text style={styles.cartActionBtnTxt}>-</Text>
            </TouchableOpacity>
            <View style={styles.cartQtyCtrlBtn}>
              <Text>{item.qty}</Text>
            </View>
            <TouchableOpacity onPress={()=>increaseQty(item.id)} style={styles.cartQtyCtrlBtn}>
              <Text style={styles.cartActionBtnTxt}>+</Text>
            </TouchableOpacity>
          </View>
          <CustomButton title={"Update"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartQtyCtrlBtn: {
    paddingHorizontal: wp(2),
  },
  cartActionBtnTxt: {
    fontSize: wp(4),
    fontWeight: "bold",
  },
});
