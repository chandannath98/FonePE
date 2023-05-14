import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList } from "react-native";
import CartCard from "../../components/Cart/CartCard";
import CustomButton from "../../components/customComponents/CustomBtn";

export default function MyCart() {
  const [data, setData] = useState([
    {
      itemName: "Oziva Kids Superfood Vision Multi Gummies Strawberry",
      qty: 1,
      id: 0,
    },
    {
      itemName: "Oziva Kids Superfood Vision Multi Gummies Strawberry",
      qty: 1,
      id: 1,
    },
    {
      itemName: "Oziva Kids Superfood Vision Multi Gummies Strawberry",
      qty: 1,
      id: 2,
    },
    {
      itemName: "Oziva Kids Superfood Vision Multi Gummies Strawberry",
      qty: 1,
      id: 3,
    },
    {
      itemName: "Oziva Kids Superfood Vision Multi Gummies Strawberry",
      qty: 1,
      id: 4,
    },
    {
      itemName: "Oziva Kids Superfood Vision Multi Gummies Strawberry",
      qty: 1,
      id: 5,
    },
    {
      itemName: "Oziva Kids Superfood Vision Multi Gummies Strawberry",
      qty: 1,
      id: 6,
    },
  ]);

  function increaseQty(itemId) {
    setData(
      data.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      })
    );
  }

  function decreaseQty(itemId) {
    setData(
      data.map((item) => {
        if (item.id === itemId && item.qty > 1) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      })
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.boldTxt}>MY BAG </Text>

        <View style={{ marginTop: hp(2), flex: 1 }}>
          <FlatList
          contentContainerStyle={{paddingBottom:50}}
            data={data}
            renderItem={({ item, index }) => (
              <CartCard
                index={index}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                // ListFooterComponent ={<Text>df</Text>} 

              />
            )}
          />
          <CustomButton 
                    
                    title={"Checkout"} 
                style={{alignSelf:"center",width:wp(70),marginVertical:hp(5)}}
                
                
                />
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
    marginHorizontal: wp(5),
    marginTop: hp(3),
    flex: 1,
    
    
  },
  boldTxt: {
    fontWeight: "800",
  },
});
