import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IntroFirst from '../screens/Intro/introFirst';
import AppBackground from '../components/HOC/BackGroudImage';
import { FontAwesome,Entypo,AntDesign,Ionicons,Feather } from '@expo/vector-icons';
import colors from '../../colors';
import Home from '../screens/Home';
import Icon from "react-native-vector-icons/Feather";
import AddMoneyInWallet from '../screens/Wallet/AddMoneyInWallet';
import { Image } from 'react-native';
import SearchLabTest from '../screens/Lab/SearchLabTest';
import PreciptionBook from '../screens/Lab/PreciptionBook';
import Medicines from '../screens/Medicine/Medicine';
import More from '../screens/More';
import NotificationScreen from '../screens/Notification';
 
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <AppBackground>
    <Tab.Navigator>


      <Tab.Screen options={{
        headerShown:false,
        tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? colors.secondoryCoor : "grey";
            return <FontAwesome name="home" size={24} color={color} />
          },
          tabBarLabelStyle:{color:"black"}
    
    }} 

     name="Home" 
     component={Home} />

      <Tab.Screen options={{
        headerShown:false,
        tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? colors.secondoryCoor : "grey";
            return  <Feather name="phone-call" size={24} color={color} />

          },
          tabBarLabelStyle:{color:"black"}
    
    }} 

     name="Consult" 
     component={Home} />


      <Tab.Screen options={{
        headerShown:false,
        tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? colors.secondoryCoor : "grey";
            return  <AntDesign name="medicinebox" size={24} color={color} />

          },
          tabBarLabelStyle:{color:"black"}
    
    }} 

     name="Medicines" 
     component={Medicines} />


      <Tab.Screen options={{
        headerShown:false,
        tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? colors.secondoryCoor : "grey";
            return  <Entypo name="lab-flask" size={24} color={color} />

          },
          tabBarLabelStyle:{color:"black"}
    
    }} 

     name="Test" 
     component={PreciptionBook} />

      <Tab.Screen options={{
        headerShown:false,
        tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? colors.secondoryCoor : "grey";
            return  <Ionicons name="notifications" size={24} color={color} />

          },
          tabBarLabelStyle:{color:"black"}
    
    }} 

     name="Notification" 
     component={NotificationScreen} />


      <Tab.Screen options={{
        headerShown:false,
        tabBarIcon: ({ focused, size }) => {
            // const icon=focused?"bell":"home";
            const color = focused ? colors.secondoryCoor : "grey";
            return  <Feather name="more-horizontal" size={24} color={color} />

          },
          tabBarLabelStyle:{color:"black"}
    
    }} 

     name="More" 
     component={More} />



     
    </Tab.Navigator>
    </AppBackground>
  );
}
export default BottomTab