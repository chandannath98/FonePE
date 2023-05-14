import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import AppBackground from '../components/HOC/BackGroudImage';
import IntroFirst from '../screens/Intro/introFirst';
import IntroSecond from '../screens/Intro/introSecond';
import IntroThird from '../screens/Intro/introThird';
import IntroFourth from '../screens/Intro/introFourth';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../colors';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../screens/Auth/Login';
import LoginWithMobile from '../screens/Auth/LoginWithMobile';
import Otp from '../screens/Auth/Otp';
import LocationSelect from '../screens/Auth/Locations';
import AccountForm from '../screens/Auth/AccountForm';
import SearchLabTest from '../screens/Lab/SearchLabTest';
import PreciptionBook from '../screens/Lab/PreciptionBook';
import BookApointment from '../screens/BookAppointment';
import AddMoneyInWallet from '../screens/Wallet/AddMoneyInWallet';
import IntroZero from '../screens/Intro/IntroZero';
import ShopCategory from '../screens/Medicine/ShopCategory';
import UploadPrescription from '../screens/UploadPrescription';
import AddToCart from '../screens/Cart/AddToCart';
import MyCart from '../screens/Cart/MyCart';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default function Router() {

  const [appstatesValue, setAppstatesValue] = useState("");

  const getItem = async () => {
    try {
      const value = await AsyncStorage.getItem('appStatus');
      if (value !== null) {
        setAppstatesValue(true)
      } else {
        setAppstatesValue(false)

        
      }
    } catch (error) {
      setAppstatesValue(false)

    }
  }
  
  
  useEffect(() => {
   getItem()
  }, [])
  
  
if(appstatesValue===""){
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <ActivityIndicator size={"large"} color={colors.secondoryCoor} />
    </View>
  )
}

  return (
    <AppBackground>
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName={appstatesValue===false? 'IntroNavigator':"App"}
    >
      <Stack.Screen options={{headerShown:false}} name="Auth" component={AuthStack} />
      <Stack.Screen options={{headerShown:false}} name="App" component={BottomTab} />
      <Stack.Screen options={{headerShown:false}} name="IntroNavigator" component={IntroNavigator} />
      <Stack.Screen options={{headerTitle:"Lab"}} name="SearchLabTest" component={SearchLabTest} />
      <Stack.Screen options={{headerShown:false}} name="PreciptionBook" component={PreciptionBook} />
      <Stack.Screen options={{headerTitle:"Book Appointment"}} name="BookApointment" component={BookApointment} />
      <Stack.Screen options={{headerTitle:"Shop Category"}} name="ShopCategory" component={ShopCategory} />
      <Stack.Screen options={{headerTitle:"Upload Prescription"}} name="UploadPrescription" component={UploadPrescription} />
      <Stack.Screen options={{headerTitle:"Add To Cart"}} name="AddToCart" component={AddToCart} />
      <Stack.Screen options={{headerTitle:"My Cart"}} name="MyCart" component={MyCart} />
      <Stack.Screen options={{headerTitle:"Profile"}} name="Profile" component={Profile} />
      <Stack.Screen options={{headerShown:false}} name="AddMoneyInWallet" component={AddMoneyInWallet} />
     
    </Stack.Navigator>
    </NavigationContainer>
    </AppBackground>
  );
}


 function IntroNavigator() {
  return (
    <AppBackground>
   
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="IntroZero" component={IntroZero} />
      <Stack.Screen options={{headerShown:false}} name="IntroFirst" component={IntroFirst} />
      <Stack.Screen options={{headerShown:false}} name="IntroSecond" component={IntroSecond} />
      <Stack.Screen options={{headerShown:false}} name="IntroThird" component={IntroThird} />
      <Stack.Screen options={{headerShown:false}} name="IntroFourth" component={IntroFourth} />
     
    </Stack.Navigator>
   
    </AppBackground>
  );
}




 function AuthStack() {
  return (
    <AppBackground>
   
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown:false}} name="LoginWithMobile" component={LoginWithMobile} />
      <Stack.Screen options={{headerShown:false}} name="Otp" component={Otp} />
      <Stack.Screen options={{headerShown:false}} name="LocationSelect" component={LocationSelect} />
      <Stack.Screen options={{headerShown:false}} name="AccountForm" component={AccountForm} />
      
     
    </Stack.Navigator>
   
    </AppBackground>
  );
}


