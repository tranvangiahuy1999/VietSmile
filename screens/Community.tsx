import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import HeaderScreen from '../components/Header';
import { HeaderBackButton } from '@react-navigation/stack';

export default function HomeScreen() {
  return (  
    
    <View>
      <View><HeaderScreen/></View>
      <EditScreenInfo path="/screens/HomeScreen.js" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  
});
