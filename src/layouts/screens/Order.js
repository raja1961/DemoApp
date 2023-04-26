import React from 'react'
import { View, StyleSheet, ListRenderItem ,Text,Dimensions,SafeAreaView,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';



import { Tabs,MaterialTabBar } from 'react-native-collapsible-tab-view'
import Capachino from '../components/Cappucino';
import Machito from '../components/Machito';
import Latte from '../components/Latte';
import Order1 from '../components/Order1';
import PickUp from '../components/PickUp';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;



const Order  = () => {
  const navigation = useNavigation();
 
 const TabButton=(props)=>{
  return(
    <MaterialTabBar
                activeColor="#fff"



                {...props}
                width={windowWidth - 20}
                contentContainerStyle={{ alignItems: 'center', }}
                labelStyle={styles.LabelStyle}
                indicatorStyle={styles.IndicatorStyle}
                style={styles.MaterialTabBar1}

            />
)
}
  
 

  return (

<SafeAreaView style={{flex:1,backgroundColor:'#fff'}} >
    <Tabs.Container   renderTabBar={TabButton} headerContainerStyle={{backgroundColor: "white" ,elevation: 0,}}>
       <Tabs.Tab name="Order">
        <Tabs.ScrollView>
          <View>
          <Order1 />
          </View>
        </Tabs.ScrollView>
       </Tabs.Tab>
       <Tabs.Tab name="PickUp">
       <Tabs.ScrollView>
        <PickUp />
       </Tabs.ScrollView>
       </Tabs.Tab>
     </Tabs.Container>
     <TouchableOpacity  onPress={() => navigation.navigate('Locations')} style={styles.Order}>
                <Text style={styles.orderBtnText}>
                    Order
                </Text>
            </TouchableOpacity>
     </SafeAreaView>
    
   )
}


const styles = StyleSheet.create({
    LabelStyle: {
        color: 'black',
        textTransform: 'capitalize'
    },
    
    IndicatorStyle: {
        backgroundColor: '#bd623e',
        height: null,
        top: '12%',
        bottom: '12%',
        zIndex: -2,
        borderRadius: 10
    },
    MaterialTabBar1: {
        marginLeft: 10,
        marginRight: 10
    },Order: {
        
      // height: 50,
      // marginTop:Dimensions.get('screen').height/8,
      // justifyContent: 'center',
      // alignItems: 'center',
      borderRadius: 14,
      backgroundColor: '#bd623e',
      // position:'absolute',
      // bottom:0,
      margin:8,
      alignItems:'center',
      height:50,
      justifyContent:'center',
      // resizeMode:'contain',
      
      
      
  },
  orderBtnText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold'
},
})


export default Order