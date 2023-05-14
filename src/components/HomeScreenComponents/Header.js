import React from "react";
import { TouchableOpacity } from "react-native";

import { Image, StyleSheet, Text, View,TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../../colors";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation=useNavigation()



  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={{ width: wp(30), height: hp(8) }}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.HeaderTxtAndIcons}>
          <Text style={{ textAlign: "center", alignSelf: "center" }}>
            Deliver to 121001
          </Text>
          <View style={styles.iconConatiner}>
            <TouchableOpacity onPress={()=>navigation.navigate("AddMoneyInWallet")} style={styles.iconBtn}>
              <Icon name="wallet-outline" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("MyCart")} style={styles.iconBtn}>
              <Icon name="cart-outline" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={styles.iconBtn}>
              <Icon name="person" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
          <TextInput style={styles.Txtinput} placeholder="Search Here" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    flexDirection: "row",
  },
  HeaderTxtAndIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconConatiner: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconBtn: {
    marginHorizontal: wp(1),
  },
  Txtinput:{
    borderColor:colors.pink,
    borderWidth:1,
    height:hp(5),
    marginVertical:hp(0.5),
    paddingHorizontal:wp(2)
  }
});
