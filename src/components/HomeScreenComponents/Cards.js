import { Text } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../colors";
import CustomButton from "../customComponents/CustomBtn";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const DoctorsCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        paddingHorizontal: 6,
        paddingTop: 3,
        borderColor: colors.pink,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: wp(2),
        alignItems: "center",
      }}
    >
      <Image source={item.img} style={{ height: hp(8), aspectRatio: 1 }} />
      <Text style={{ color: "grey", fontSize: wp(3), paddingVertical: hp(1) }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export const PriceCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        paddingHorizontal: 6,
        padding: hp(1.5),
        borderColor: colors.pink,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: wp(2),
      }}
    >
      <Text style={{ fontSize: wp(3), fontWeight: "800" }}>
        Thyroid Profile
      </Text>
      <Text style={{ fontSize: wp(3), fontWeight: "800" }}>Price : 1</Text>
      <CustomButton
        title={"Add"}
        style={{
          paddingHorizontal: 1,
          alignSelf: "flex-start",
          marginTop: hp(1),
        }}
      />
    </TouchableOpacity>
  );
};

export const ArticalCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        paddingHorizontal: 6,
        padding: hp(1.5),
        borderColor: colors.pink,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: wp(2),
        width: wp(35),
        alignItems: "center",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <Text
        style={{ fontSize: wp(4.5), fontWeight: "800", textAlign: "center" }}
      >
        Benefits of Yoga
      </Text>

      <CustomButton
        title={"View"}
        style={{
          paddingHorizontal: 1,
          // alignSelf: "flex-start",
          marginTop: hp(1),
          width: wp(20),
        }}
      />
    </TouchableOpacity>
  );
};

export const LargeImageCard = ({ item }) => {
  return (
    <TouchableOpacity style={{ padding: 4 }}>
      <Image source={item} style={{ height: hp(10), width: wp(40) }} />
    </TouchableOpacity>
  );
};

export const ProductCard = ({ item }) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.productCard}>
      <Image
        source={require("../../../assets/medicine.png")}
        style={{ height: hp(8), aspectRatio: 1 }}
      />
      <Text style={styles.bolTxt}>Eye Care Tablet</Text>

      <View style={{ marginHorizontal: wp(2), marginVertical: hp(1) }}>
        <Text style={styles.priceTxt}>
          MRP &#8377;{" "}
          <Text style={{ textDecorationLine: "line-through" }}>1499</Text>{" "}
          <Text style={{ color: "green" }}>50% off </Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: hp(0.5),
          }}
        >
          <Text>&#8377; 749</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("AddToCart")} >
            <Text style={{ color: "red" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};


export const ShopCategoryCard = ({ item }) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ShopCategory")} style={styles.shopCateCard}>
      <Image
        source={require("../../../assets/eye-drop.webp")}
        style={{ height: hp(8), aspectRatio: 1,borderWidth:0.4,borderColor:"black" }}
      />
      <Text style={[styles.bolTxt,{marginVertical:hp(0.5)}]}>Eye Care</Text>

      
    </TouchableOpacity>
  );
};




const styles = StyleSheet.create({
  productCard: {
    width: wp(28),
    height: hp(16),
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.3,
    marginHorizontal: wp(1.3),
    alignItems: "center",
  },
  bolTxt: { fontSize: wp(3), fontWeight: "800" },
  priceTxt: {
    fontSize: wp(2),
    color: "#878787",
    alignSelf: "flex-start",
  },
  shopCateCard: {
    width: wp(20),
    height: hp(16),
    borderRadius: 5,
    // borderColor: "grey",
    // borderWidth: 0.3,
    marginHorizontal: wp(1.3),
    alignItems: "center",
  },
});
