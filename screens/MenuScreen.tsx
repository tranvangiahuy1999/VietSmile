import React from 'react';
import { Text, View, Image, StyleSheet,  TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import HeaderScreen from '../components/Header';
export default function HomeScreen() { 

  return (
    <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
          <HeaderScreen/>
      <TouchableOpacity 
        style={styles.li}
        onPress={()=> {
          console.log('does not work');
          }
        }
        activeOpacity={1.0}
      >
        <View style={styles.right_info}>
          <Image style={styles.avatar} source={ require('../assets/images/avata.jpg')}/>
          <View style={{marginLeft: 10}}>
            <Text style={styles.username}>Henry Nguyen</Text>
            <Text style={styles.info}>Xem trang cá nhân</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.li}
        onPress={()=> {
          console.log('does not work');
          }
        }
        activeOpacity={1.0}
      >
        <View style={styles.item}>
          <FontAwesome5 style={styles.icon} name="users" size={16} color="#596475" />
          <View style={styles.item_text}>
            <Text style={styles.text}>Bạn bè</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.li}
        onPress={()=> {
          console.log('does not work');
          }
        }
        activeOpacity={1.0}
      >
        <View style={styles.item}>
          <FontAwesome5 style={styles.icon} name="gift" size={16} color="#596475" />
          <View style={styles.item_text}>
            <Text style={styles.text}>Ví quà tặng VietSmile</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.li}
        onPress={()=> {
          console.log('does not work');
          }
        }
        activeOpacity={1.0}
      >
        <View style={styles.item}>
          <FontAwesome5 style={styles.icon} name="key" size={16} color="#596475" />
          <View style={styles.item_text}>
            <Text style={styles.text}>Đổi mật khẩu</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.li}
        onPress={()=> {
          console.log('does not work');
          }
        }
        activeOpacity={1.0}
      >
        <View style={styles.item}>
          <FontAwesome5 style={styles.icon} name="sign-out-alt" size={16} color="#596475" />
          <View style={styles.item_text}>
            <Text style={styles.text}>Thoát</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.sponsor}
        onPress={()=> {
          console.log('does not work');
          }
        }
        activeOpacity={1.0}
      >
        <View style={styles.sponsor_view}>
          <Text style={styles.sponsor_text}>Tài trợ</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  li_info : {
    padding: 10,
    paddingTop: 10,
    borderBottomWidth: 1, 
    borderColor: '#d9e0e6',
  },
  li: {
    padding: 10,
    borderBottomWidth: 1, 
    borderColor: '#d9e0e6',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  right_info:{
    
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  username: { 
    marginTop: 2,
    fontSize: 16,
    color: '#27303e', 
    fontWeight: '500',
  },
  info: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#596475',
  },
  item:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
  },
  icon:{
    marginTop: 5
  },
  item_text:{
    marginLeft: 10, 
    marginBottom: 5
  },
  text:{
    fontSize: 16,
    color: '#596475',
    fontWeight: '400',
  },
  sponsor:{
  },
  sponsor_view: {
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    
  },
  sponsor_text:{
    marginLeft: -15,
    marginRight: -15,
    paddingLeft: 15,
    paddingTop: 10,
    marginTop: 0,
    color: '#8a919f',
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#fff'
  }
});