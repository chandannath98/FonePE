import React from 'react';
import {  StyleSheet } from 'react-native';
import {  Text as CText } from 'react-native';



const Text = (props) => {
    const { style, ...rest } = props;
    return (
      <CText style={[styles.text, style]} {...rest} />
    );
  };


  export default Text

  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Roboto',
    //   color:"green"
    }
  });
    