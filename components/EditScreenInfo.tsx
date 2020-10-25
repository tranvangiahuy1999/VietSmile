import * as WebBrowser from 'expo-web-browser';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity , Dimensions, ScrollView , SafeAreaView, BackHandler} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import {DEFAULT, THANH_TOAN, CUA_HANG} from '../constants/String';
import ThanhToan from './EachItemComponent/ThanhToan';
import CuaHang from './EachItemComponent/CuaHang';

const DeviceWidth = Dimensions.get('window').width;

export default function EditScreenInfo({ path }: { path: string }) {

  const [page, setPage] = useState(DEFAULT);

  const backHandler = () => {
    if(page !== DEFAULT){
      setPage(DEFAULT);
      return true;
    } else {
      BackHandler.exitApp();
      return true
    }
  }

  useEffect(()=>{
    BackHandler.addEventListener(
      'hardwareBackPress',
      backHandler
      );
      return() => {
        BackHandler.removeEventListener(
          "hardwareBackPress",
          backHandler
        );
      };
  },[backHandler]);

  const onClick = (route) =>{
    setPage(route);
  }

  if(page === DEFAULT){
    return (
      <ScrollView>
        <View style={{
          flex: 1,
        }}>
        <View style={styles.row}>
            <View style={styles.row_1}>
              <Text style={styles.row_1__text}>VSC</Text>
              <Text style={{fontWeight: '600', color: '#3696D9',}}>0</Text>
            </View>
            <View style={styles.row_2}>
            <Text style={styles.row_2__text}>VND</Text>
              <Text style={{fontWeight: '600', color: '#3696D9',}}>0</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: "grey"}}>
          <View>
          <TouchableOpacity style={styles.box_icon2} onPress={()=>onClick(THANH_TOAN)}>
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="qrcode" size={30} color="#3696D9" />
                  <Text style={styles.box_icon1__title}>Thanh toán</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box_icon2} onPress={()=>onClick(CUA_HANG)}>
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="store" size={30} color="#2D66A5" />
                  <Text style={styles.box_icon1__title}>Cửa hàng</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="sim-card" size={30} color="#D99D73" />
                  <Text style={styles.box_icon1__title}>Nạp card</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="map" size={30} color="#5BB2E0" />
                  <Text style={styles.box_icon1__title}>Voucher tour du lịch</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="ellipsis-h" size={30} color="#596475" />
                  <Text style={styles.box_icon1__title}>Khác</Text>
                </View>
            </View>
            <View>
            </View>
          </View>
          <View>
          <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="exchange-alt" size={30} color="#E56D6F" />
                  <Text style={styles.box_icon1__title}>Chuyển tiền</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="shopping-cart" size={30} color="#3695d9" />
                  <Text style={styles.box_icon1__title}>Đơn hàng</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="gamepad" size={30} color="#E56D6F" />
                  <Text style={styles.box_icon1__title}>Thanh toán</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="car" size={30} color="#BE8A46" />
                  <Text style={styles.box_icon1__title}>Thưởng xe</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  
                </View>
            </View>
          </View>
          <View>
          <View style={styles.box_icon2} >
            <View style={styles.box_icon1} >
                <FontAwesome5 name="coins" size={30} color="#3696D9" />
                <Text style={styles.box_icon1__title}>Mua SVC</Text>
              </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="star" size={30} style={{fontWeight: '900'}} color="#539757" />
                  <Text style={styles.box_icon1__title}>Cổ đông</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="file-invoice" size={32} color="#66AB4A" />
                  <Text style={styles.box_icon1__title}>Thanh toán hoá đơn</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="database" size={30} color="#A82D72" />
                  <Text style={styles.box_icon1__title}>Kho hàng</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  
                </View>
            </View>
          </View> 
          <View>
          <View style={styles.box_icon2} >
            <View style={styles.box_icon1} >
                <FontAwesome5 name="map-marker-alt" size={30} color="#E56D6F" />
                <Text style={styles.box_icon1__title}>Điểm liên kết</Text>
              </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="piggy-bank" size={32} color="#d8ad2d" />
                  <Text style={styles.box_icon1__title}>Heo đất</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="plane" size={30} color="#3696D9" />
                  <Text style={styles.box_icon1__title}>Đặt vé máy bay</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  <FontAwesome5 name="bullhorn" size={30} color="#66AB4A" />
                  <Text style={styles.box_icon1__title}>Đặt vé máy bay</Text>
                </View>
            </View>
            <View style={styles.box_icon2} >
                <View style={styles.box_icon1} >
                  
                </View>
            </View>
          </View>   
        </View>
        <View style={styles.box_icon__row}>
          <View style={styles.box_icon__bottom}>
            <FontAwesome5 name="headset" size={30} color="#596475" />
            <Text style={styles.box_icon1__title}>Yêu cầu hỗ trợ</Text>
        </View>            
          <View style={styles.box_icon__bottom}>
              <FontAwesome5 name="question-circle" size={30} color="#077F0D" />
              <Text style={styles.box_icon1__title}>Câu hỏi thường gặp</Text>
              </View>  
          </View>
          <View style={styles.magrin_bottom}>
          </View>
      </View>
      </ScrollView>
    )
  } else if(page === THANH_TOAN){
    return(
      <ThanhToan></ThanhToan>
    )
  } else if(page === CUA_HANG){
    return(
      <CuaHang></CuaHang>
    )
  }

  
  }
function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  row:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 110,
      backgroundColor: '#f3f4f5',
  },
  row_1:{
    width: 160,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row_2:{
    width: 160,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row_1__text:{
    color: '#3696D9',
    fontWeight: '600',
  },
  row_2__text:{
    color: '#3696D9',
    fontWeight: '600',
  },
  box_icon:{
    width: DeviceWidth*0.25, 
    height: DeviceWidth*0.25, 
    marginBottom:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#f3f4f5',
    borderLeftColor: '#f3f4f5',
    borderBottomColor: '#f3f4f5',
    borderTopColor: '#f3f4f5',
    borderWidth: 1,
  },
  box_icon2:{
    width: DeviceWidth*0.25, 
    height: DeviceWidth*0.25, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#f3f4f5',
    borderLeftColor: '#f3f4f5',
    borderBottomColor: '#f3f4f5',
    borderTopColor: '#f3f4f5',
    borderWidth: 1,
  },
  box_icon1:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  box_icon1__title:{
    fontSize: 10,
    marginTop: 8,
    color: '#7a8392',
    textAlign: 'center',
  },
  box_icon__bottom:{
    height: 100, 
    marginRight: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  box_icon__row:{
    height: 180,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#f3f4f5',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  magrin_bottom:{
    height: 135,
  }
});
