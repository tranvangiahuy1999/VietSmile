import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import MenuScreen from '../screens/MenuScreen';
import Chat from '../screens/ChatScreen';
import Community from '../screens/Community';
import { BottomTabParamList} from '../types';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: '#3696D9' }}>
      <BottomTab.Screen
        name="Tiện ích"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="shopping-basket" size={20} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Lịch sử"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 size={20} name="history" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Cộng đồng"
        component={Community}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 size={20} name="globe" color={color} />,
        }}
      />
      <BottomTab.Screen
        name= 'Trò chuyện'
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 size={20} name="comments" color={color} />,
        }}
      />
       <BottomTab.Screen
        name= 'Menu'
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 size={20} name="bars" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}