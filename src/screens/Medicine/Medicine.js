import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../../components/HomeScreenComponents/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native";
import ImageSlider from "../../components/HomeScreenComponents/ImageSlider";
import SecondBanner from "../../components/HomeScreenComponents/SecondBanner";
import colors from "../../../colors";
import CustomButton from "../../components/customComponents/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import {
  ArticalCard,
  DoctorsCard,
  LargeImageCard,
  PriceCard,
  ProductCard,
  ShopCategoryCard,
} from "../../components/HomeScreenComponents/Cards";
import UploadImg from "../../components/UploadImg";
// import { ArticalCard, DoctorsCard, LargeImageCard, PriceCard } from "../../../components/HomeScreenComponents/Cards";

export default function Medicines() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{ flex: 1 }}
      >
        <Image
          source={require("../../../assets/slider-2.webp")}
          style={{ width: wp(100), height: hp(10) }}
        />

        <View style={{ backgroundColor: "white", marginTop: hp(2) }}>
          <Text
            style={{
              fontSize: wp(4.5),
              marginHorizontal: wp(3),
              paddingVertical: hp(1),
              fontWeight: "800",
            }}
          >
            Best Seller Products
          </Text>

          <FlatList
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <ProductCard item={item} />}
            data={[1, 1, 1, 1, 1, 1]}
          />
        </View>



      
        <View style={{ backgroundColor: colors.lightPink, marginTop: hp(2) }}>
          <Text
            style={{
              fontSize: wp(4.5),
              marginHorizontal: wp(3),
              paddingVertical: hp(1),
              fontWeight: "800",
            }}
          >
            Shop Category
          </Text>

          <FlatList
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <ShopCategoryCard item={item} />}
            data={[1, 1, 1, 1, 1, 1]}
          />
        </View>

        <View style={{ backgroundColor: "white", marginTop: hp(2) }}>
          <FlatList
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <LargeImageCard item={item} />}
            data={[
              require("../../../assets/family-nutrition.jpg"),
              require("../../../assets/herbal-supplements.jpg"),
              require("../../../assets/proteins-supplements.jpg"),
              require("../../../assets/6274e1051c0fc.jpg"),
              require("../../../assets/6274e1051c0fc.jpg"),
            ]}
          />
        </View>

       <UploadImg/>

      

       
      

    
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
