import React from 'react';
import { ImageBackground } from 'react-native';

const AppBackground = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../../assets/Background.jpg')}
      style={{ flex: 1,width:"100%" , height:"100%"}}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

export default AppBackground;
