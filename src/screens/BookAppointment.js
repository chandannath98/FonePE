import { Button, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import Header from "../components/HomeScreenComponents/Header";
// import { TextInput } from 'react-native-paper'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import colors from "../../colors";
import Icon from "react-native-vector-icons/Fontisto";
import CustomButton from "../components/customComponents/CustomBtn";
// import { RNDatePicker } from "@react-native-community/datetimepicker";
import DateTimePicker, { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateFormater from "../utils/DateFormater";

export default function BookApointment() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  const PriceCard = useCallback(() => {
    return (
      <View style={styles.priceCard}>
        <Text style={[styles.cardHeader, styles.cardTxt]}>
          Full Body Checkup
        </Text>
        {/* <Icon name="laboratory" size={18} color="black" style={{alignSelf:"center",marginVertical:hp(0.5)}} /> */}

        <Text style={styles.cardTxt}>E-Repots in 2 days</Text>
        <Text style={styles.cardTxt}>Price : 250</Text>
        {/* <Text style={[styles.cardTxt,styles.cardColordTxt]}>Book Now</Text> */}
      </View>
    )
  },[])

  const TimeCard = useCallback(({ item }) => {
    const isSelected = item === time;

    // const onPress = useCallback(() => {
    //   setTime(item);
    // }, [item]);
    return (
      <TouchableOpacity
        onPress={() => setTime(item)}
        style={[
          styles.timeCard,
         isSelected ? { backgroundColor: "#48e7fa" } : {},
        ]}
      >
        <Text style={{ fontSize: wp(2.5) }}>{item}</Text>
      </TouchableOpacity>
    );
  },[time])

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
  
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <PriceCard />

        <Text style={{ marginHorizontal: wp(12) }}>
          Please select a convinient time for home collection of your samples
        </Text>

        <View style={{ alignSelf: "flex-start", marginTop: hp(5) }}>
          <Text style={styles.boldTxt}>Select Date & Time</Text>


         
     

          <TouchableOpacity
           onPress={showDatepicker}
            style={{
              flexDirection: "row",
              marginVertical: hp(3),
              justifyContent: "space-between",
              borderColor: "#e3e4e6",
              borderWidth: 1,
              padding: 4,
              width: wp(90),
              borderRadius: 2,
              alignItems: "center",
            }}
          >
            <Text>{DateFormater(date)}</Text>
            <Icon
              name="date"
              size={18}
              color="black"
              style={{ alignSelf: "center", marginVertical: hp(0.5) }}
            />
          </TouchableOpacity>

          <View style={{ height: hp(30) }}>
            <FlatList
              numColumns={5}
              data={[
                "12:30 am",
                "12:45 am",
                "01:00 am",
                "01:15 am",
                "01:30 am",
                "01:45 am",
                "02:00 am",
                "02:15 am",
                "02:30 am",
                "02:45 am",
                "03:00 am",
                "03:15 am",
                "03:30 am",
                "03:45 am",
                "04:00 am",
                "04:15 am",
                "04:30 am",
                "04:45 am",
                "05:00 am",
                "05:15 am",
                "05:30 am",
                "05:45 am",
                "06:00 am",
                "06:15 am",
                "06:30 am",
              ]}
              renderItem={({ item }) => <TimeCard item={item} />}
            />
          </View>

          <CustomButton
            title={"Next"}
            style={{ width: wp(70), alignSelf: "center" }}
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
    flex: 1,
    alignItems: "center",
  },
  txtInp: {
    backgroundColor: "white",
    width: wp(90),
    height: hp(6),
    paddingHorizontal: wp(2),
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: hp(2),
    alignSelf: "center",
    //   alignItems:"center",
    //   textAlign:"center"
  },
  boldTxt: {
    fontSize: wp(4.5),
    fontWeight: "800",
    marginVertical: hp(1),
  },
  cardTxt: {
    fontSize: wp(2.7),
    marginVertical: hp(0.2),
  },
  cardHeader: {
    alignSelf: "center",
  },
  cardColordTxt: {
    color: colors.secondoryCoor,
    fontWeight: "600",
  },
  priceCard: {
    width: wp(40),
    borderColor: "grey",
    borderWidth: 0.4,
    paddingHorizontal: wp(3),
    paddingVertical: hp(3),
    marginHorizontal: wp(1),
    marginVertical: hp(2),
  },
  timeCard: {
    paddingVertical: 4,
    borderRadius: 3,
    backgroundColor: "#c8f2f7",
    marginVertical: hp(1),
    marginHorizontal: wp(1),
    width: wp(16),
    alignItems: "center",
    // paddingHorizontal:wp(1.2)
  },
});
