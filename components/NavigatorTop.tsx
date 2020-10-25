import * as React from 'react';
import { StyleSheet  , Image} from 'react-native';
import { Text, View} from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
export default function HeaderScreen() {
  return (
    <View>
      <View style={styles.HeaderScreen}>
        <View style={styles.HeaderScreen_row1}>
          <Ionicons name="ios-wallet" size={32} color="white" />
          <Text style={styles.HeaderScreen_row1__title}>Nạp VND</Text>
        </View>
        <View style={styles.HeaderScreen_row1}>
          <FontAwesome5 style={styles.font} name="level-down-alt" size={32} color="white" />
          <Text style={styles.HeaderScreen_row1__title}>Rút VND</Text>
        </View>
        <View style={styles.HeaderScreen_row1}>
          <FontAwesome5 name="share-alt" size={32} color="white" />
          <Text style={styles.HeaderScreen_row1__title}>Chia sẽ</Text>
        </View>
        <View style={styles.HeaderScreen_row1}>
          <FontAwesome5 name="rocket" size={32} color="white" />
          <Text style={styles.HeaderScreen_row1__title}>Đối tác</Text>
        </View>
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
    backgroundColor: '#3696D9',
    height: 70,
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
    HeaderScreen_row1:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3696D9',
      flex: 2,
    },
    HeaderScreen_row1__title:{
      fontSize: 10,
      marginTop: 5,
      color: 'white'
    },
    font:{
      transform: [{ rotate: '90deg'}]
    }

});
