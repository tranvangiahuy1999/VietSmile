import * as React from 'react';
import { StyleSheet  , Image} from 'react-native';
import { Text, View} from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';
export default function HeaderScreen() {
  return (
    <View>
      <View style={styles.HeaderScreen}>
      <Image
        style={styles.imgStyle}
        source={require('../assets/images/vietsmile.png')}
        />
        <Text style={styles.title}>
          VietSmile
        </Text>
      </View>
      <View style={styles.bell}>
        <Ionicons name="ios-notifications" size={26} color="silver" />
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
    backgroundColor: '#ffffff',
    height: 70,
    paddingTop: 30,
    position: 'relative',

    },
    imgStyle:{
    marginLeft: 10,
    width: 32,
    height: 32,
    resizeMode: 'stretch',
    },
    title:{
      fontSize: 18,
      color: '#007bff',
      marginLeft: 10,
      fontWeight: '600',
      fontStyle: 'italic'
    },
    bell:{
      position: 'absolute',
      right: 0,
      top: 36,
      marginRight: 10,
      color: "#596475",
    }

});
