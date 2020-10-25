import * as React from 'react';
import { StyleSheet  , Image} from 'react-native';
import { Text, View} from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
export default function HeaderScreen() {
  return (
    <View>
      <View style={styles.HeaderScreen}>
      
        <Text style={styles.title}>
          VietSmile
        </Text>
      
      </View>
     
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderScreen:{
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
    color: 'red',
    backgroundColor: 'black',
    height: 80,
    },
    imgStyle:{
    marginLeft: 20,
    width: 40,
    height: 40,
    resizeMode: 'stretch',
    },
    title:{
      fontSize: 20,
      color: '#007bff',
      marginLeft: 10,
    },
   

});
