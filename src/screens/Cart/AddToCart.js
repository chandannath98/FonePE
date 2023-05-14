import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../../components/customComponents/CustomBtn";

export default function AddToCart() {
    const [selectedPrice, setSelectedPrice] = useState("first")
    const [selectedQty, setSelectedQty] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.boldTxt}>Product Name</Text>

        <View style={{ alignItems: "center", marginVertical: hp(2) }}>
          <Image
            source={require("../../../assets/medicine.png")}
            style={{ height: hp(18), aspectRatio: 1 }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image
              source={require("../../../assets/medicine.png")}
              style={styles.belowImg}
            />
            <Image
              source={require("../../../assets/medicine.png")}
              style={styles.belowImg}
            />
            <Image
              source={require("../../../assets/medicine.png")}
              style={styles.belowImg}
            />
          </View>
        </View>

        <View>
          <Text style={styles.boldTxt}>Product Highlights</Text>
          <View style={{ marginVertical: hp(2) }}>
            <Text style={styles.highlightTxt}>
              This supplement can promote healthy vision
            </Text>
            <Text style={styles.highlightTxt}>
              It can protect the eyes from retina damage
            </Text>
            <Text style={styles.highlightTxt}>
              It may protect from dry and watery eyes
            </Text>
            <Text style={styles.highlightTxt}>
              It might protect from red and stressed eyes
            </Text>
          </View>
        </View>

        <View style={{ alignSelf: "center", marginHorizontal: wp(20) }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="first"
              status={ selectedPrice==="first"? "checked":"unchecked"}
              onPress={() => setSelectedPrice('first')}
            />
            <Text
              style={{
                backgroundColor: "#c2c2c2",
                color: "white",
                fontSize: wp(5),
                marginHorizontal: wp(1),
              }}
            >
              &#8377; 749
            </Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                backgroundColor: "#c2c2c2",
                color: "white",
                fontSize: wp(4),
                marginHorizontal: wp(1),
              }}
            >
              &#8377; 1499
            </Text>
            <Text
              style={{
                backgroundColor: "#c2c2c2",
                color: "white",
                fontSize: wp(3.7),
                marginHorizontal: wp(1),
              }}
            >
              50% off
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: hp(2),
            }}
          >
            <RadioButton
              value="second"
              status={ selectedPrice==="second"? "checked":"unchecked"}

              onPress={() => setSelectedPrice('second')}
            />
            <Text
              style={{
                color: "black",
                fontSize: wp(5),
                marginHorizontal: wp(1),
              }}
            >
              &#8377; 749
              <Text
                style={{
                  // backgroundColor: "#c2c2c2",
                  // color: "white",
                  fontSize: wp(3),
                  marginHorizontal: wp(2),
                }}
              >
                + free shipping and 3% Extra NeuCoins with{" "}
                <Text style={{ color: "white", backgroundColor: "#6e093b" }}>
                  Care Plan{" "}
                </Text>
              </Text>
            </Text>

            <TouchableOpacity
              style={{ alignItems: "center", marginHorizontal: wp(1) }}
            >
              <AntDesign name="infocirlceo" size={wp(3)} color="black" />
            </TouchableOpacity>
          </View>
        <Text style={{color:"grey",marginVertical:hp(2)}}>Inclusive Of all taxes</Text>


<View style={{flexDirection:"row",alignItems:'center'}}>
<Picker
style={{borderColor:"grey",borderWidth:3,width:wp(40)}}
  selectedValue={selectedQty}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedQty(itemValue)
  }>
  <Picker.Item label="1 Bottle" value="1" />
  <Picker.Item label="2 Bottle" value="2" />
</Picker>
<Text>of 90 tablets</Text>
</View>

<CustomButton  title={"ADD TO CART"} style={{alignSelf:"center",width:wp(70)}} />
        </View>



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
    marginHorizontal: wp(3),
  },
  boldTxt: {
    fontWeight: "800",
  },
  belowImg: {
    width: wp(25),
    aspectRatio: 1,
    marginHorizontal: wp(2),
  },
  highlightTxt: {
    marginVertical: hp(0.3),
  },
});
