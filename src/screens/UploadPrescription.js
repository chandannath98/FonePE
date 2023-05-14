import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../components/HomeScreenComponents/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  ArticalCard,
  DoctorsCard,
  LargeImageCard,
  PriceCard,
  ProductCard,
  ShopCategoryCard,
} from "../components/HomeScreenComponents/Cards";
import colors from "../../colors";
import CustomButton from "../components/customComponents/CustomBtn";

// import { ArticalCard, DoctorsCard, LargeImageCard, PriceCard } from "../../../components/HomeScreenComponents/Cards";

export default function UploadPrescription() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{ flex: 1 }}
      >
        <View style={{ backgroundColor: "white", marginTop: hp(2) }}>
          <FlatList
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <LargeImageCard item={item} />}
            data={[
              require("../../assets/family-nutrition.jpg"),
              require("../../assets/herbal-supplements.jpg"),
              require("../../assets/proteins-supplements.jpg"),
              require("../../assets/6274e1051c0fc.jpg"),
              require("../../assets/6274e1051c0fc.jpg"),
            ]}
          />
        </View>

        <TouchableOpacity style={styles.uploadImageCard}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontWeight: "900" }}>Upload your Prescription</Text>
            <Text style={{ color: "grey" }}>{"(pdf , jpg, png)"}</Text>
          </View>
          <View
            style={{
              backgroundColor: colors.lightPink,
              height: hp(15),
              width: wp(30),
            }}
          ></View>
        </TouchableOpacity>



<View style={{marginHorizontal:wp(10)}}>

<Text>All uploaded Prescription will eb stored in My Prescriptions so that you can conveniently select in subsequent orders</Text>
</View>

        <View style={{ marginVertical: hp(1) }}>


          <FlatList
            style={{ marginBottom: hp(2) }}
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <ProductCard item={item} />}
            data={[1, 1, 1, 1, 1, 1]}
          />
          <FlatList
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <ProductCard item={item} />}
            data={[1, 1, 1, 1, 1, 1]}
          />
        </View>
        <CustomButton title={"Submit"} style={{alignSelf:"center",marginVertical:hp(2)}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  uploadImageCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(10),
    marginVertical: hp(5),
  },
});
