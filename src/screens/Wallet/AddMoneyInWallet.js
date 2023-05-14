import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../../components/HomeScreenComponents/Header";
// import { TextInput } from 'react-native-paper'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import colors from "../../../colors";
import Icon from "react-native-vector-icons/Fontisto";
import CustomButton from "../../components/customComponents/CustomBtn";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { RNDatePicker } from "@react-native-community/datetimepicker";

export default function AddMoneyInWallet() {
  const navigation = useNavigation();
  const [selectedRate, setSelectedRate] = useState(0);

  const makeCall = () => {
    navigation.navigate("App");
    Linking.openURL("tel:1234567890");
  };

  const RateCart = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedRate(item)}
        style={[
          styles.rateCard,
          selectedRate === item ? { backgroundColor: "grey" } : {},
        ]}
      >
        <Text style={{ fontWeight: "800" }}>Rs. {item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <View style={{ alignSelf: "flex-start", marginVertical: hp(5) }}>
          <Text>
            You Wallet Amount Rs.{" "}
            <Text style={{ color: colors.secondoryCoor, fontWeight: "700" }}>
              0.00
            </Text>
          </Text>
          <Text style={styles.boldTxt}>Add Money</Text>
        </View>

        <View style={{ height: hp(20) }}>
          <FlatList
            numColumns={3}
            data={[50, 100, 200, 500, 1000]}
            renderItem={({ item }) => <RateCart item={item} />}
          />
        </View>

        <Text style={styles.boldTxt}>OR</Text>

        <View style={styles.txtInpContaniner}>
          <Text>Rs. </Text>
          <TextInput
            keyboardType="phone-pad"
            placeholder="Enter Amount"
            style={styles.txtInp}
          />
        </View>

        <Text style={[styles.lowerTxt]}>GST will be charged extra 18%</Text>

        <CustomButton
          onPress={makeCall}
          title={"Proceed"}
          style={{ width: wp(70), alignSelf: "center" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    marginHorizontal: wp(5),
    flex: 1,
    alignItems: "center",
  },
  txtInpContaniner: {
    backgroundColor: "white",
    width: wp(80),
    height: hp(6),
    paddingHorizontal: wp(2),
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: hp(2),
    marginVertical: hp(3),
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 3,
  },
  txtInp: {
    width: "100%",
  },
  boldTxt: {
    // fontSize: wp(4.5),
    fontWeight: "800",
    marginVertical: hp(2.5),
  },
  rateCard: {
    borderColor: "grey",
    borderWidth: 0.5,
    marginHorizontal: wp(3),
    width: wp(25),
    marginVertical: hp(1.5),
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(2),
  },
  lowerTxt: {
    alignSelf: "flex-start",
    color: "grey",
    marginVertical: hp(5),
  },
});
