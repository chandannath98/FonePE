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
import ImageSlider from "../components/HomeScreenComponents/ImageSlider";
import SecondBanner from "../components/HomeScreenComponents/SecondBanner";
import colors from "../../colors";
import CustomButton from "../components/customComponents/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { ArticalCard, DoctorsCard, LargeImageCard, PriceCard } from "../components/HomeScreenComponents/Cards";
import UploadImg from "../components/UploadImg";

export default function Home() {

const navigation=useNavigation()

 

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{ flex: 1 }}
      >
        <Image
          source={require("../../assets/topBanner.png")}
          style={{ width: wp(100), height: hp(12) }}
        />
        <SecondBanner />

        <ImageSlider
          imgList={[
            require("../../assets/b1.jpg"),
            require("../../assets/b2.jpg"),
            require("../../assets/b3.jpg"),
            require("../../assets/b4.jpg"),
          ]}
          bgColor={"white"}
        />

        <View style={{ backgroundColor: colors.lightPink, marginTop: hp(2) }}>
          <Text
            style={{
              fontSize: wp(4.5),
              marginHorizontal: wp(3),
              paddingVertical: hp(1),
              fontWeight: "800",
            }}
          >
            Shop by category
          </Text>
          <ImageSlider
            imgList={[
              require("../../assets/p3.png"),
              require("../../assets/p4.png"),
              require("../../assets/p3.png"),
              require("../../assets/p4.png"),
            ]}
          />
        </View>

       <UploadImg/>

        <View style={{ backgroundColor: colors.lightPink, marginTop: hp(2) }}>
          <Text
            style={{
              fontSize: wp(4.5),
              marginHorizontal: wp(4.5),
              paddingVertical: hp(1),
              fontWeight: "800",
            }}
          >
            Consult for the Best Doctors
          </Text>
          <FlatList
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <DoctorsCard item={item} />}
            data={[
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
            ]}
          />
        </View>

        <View style={{ backgroundColor: "white", marginTop: hp(2) }}>
          <Text
            style={{
              fontSize: wp(4.5),
              marginHorizontal: wp(4.5),
              paddingVertical: hp(1),
              fontWeight: "800",
            }}
          >
            Lab Tests by Health Conern
          </Text>
          <FlatList
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <PriceCard item={item} />}
            data={[
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
            ]}
          />
        </View>

        <View style={{ backgroundColor: "white", marginTop: hp(2) }}>
          <FlatList
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <LargeImageCard item={item} />}
            data={[
              require("../../assets/6274e1051c0fc.jpg"),
              require("../../assets/6274e1051c0fc.jpg"),
              require("../../assets/6274e1051c0fc.jpg"),
              require("../../assets/6274e1051c0fc.jpg"),
              require("../../assets/6274e1051c0fc.jpg"),
            ]}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              width: wp(85),
              borderColor: colors.pink,
              borderWidth: 1,
              backgroundColor: colors.lightPink,
              padding: 7,
              marginVertical: 10,
            }}
          >
            <View style={{ flex: 7 }}>
              <Text>Get Membership</Text>
              <Text>Save 5% on Medicines, lab, tests & get Free Delivery</Text>
            </View>
            <View style={{ flex: 3, justifyContent: "flex-end" }}>
              <CustomButton
                title={"BUY NOW"}
                style={{
                  paddingHorizontal: wp(0),
                  width: wp(20),
                  alignSelf: "flex-start",
                  marginTop: hp(1),
                }}
              />
            </View>
          </View>
        </View>






        <View style={{ backgroundColor: "white", marginTop: hp(2) }}>
          <Text
            style={{
              fontSize: wp(4.5),
              marginHorizontal: wp(4.5),
              paddingVertical: hp(1),
              fontWeight: "800",
            }}
          >
            Health Articles
          </Text>
          <FlatList
            contentContainerStyle={{ paddingLeft: wp(3) }}
            horizontal
            renderItem={({ item }) => <ArticalCard item={item} />}
            data={[
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
              {
                name: "Gynaecologist",
                img: require("../../assets/d1.jpeg"),
              },
            ]}
          />
        </View>











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
