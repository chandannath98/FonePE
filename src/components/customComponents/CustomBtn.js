import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../../colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";


const CustomButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondoryCoor,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: 5,
    width:wp(28),
    borderColor:colors.pink,
    borderWidth:1
  },
  title: {
    color: '#FFFFFF',
    fontSize: wp(3),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
