import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
const WorkThroughPage = ({ navigation }) => {
    // console.log(navigation);
    return (
        <>
            <View style={{flex:1,backgroundColor:'black'}} >
                <View style={{flex:0.67}} >
                    <Image style={styles.Imagee} source={require('../../assets/imgs/coffee3.jpg')}></Image>

                </View>
                <View style={{flex:0.5}} >
                    <View style={styles.imageeText}>
                        {/* <Text style={{ fontSize: 30, textAlign: 'center', color: 'white', fontFamily: 'Poppins-Bold', lineHeight: 36 }}>Coffee so good,</Text>
                        <Text style={{ fontSize: 30, textAlign: 'center', color: 'white', fontFamily: 'Poppins-Bold', lineHeight: 30 }}>your taste buds</Text>
                        <Text style={{ fontSize: 30, textAlign: 'center', color: 'white', fontFamily: 'Poppins-Bold', lineHeight: 30 }}>will love it</Text> */}
                        <Text style={{color:'white', justifyContent:'center',alignItems:'center', fontSize:34,textAlign:'center',lineHeight:36}}>Coffee so good,{"\n"}your taste buds {"\n"} will love it</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', color: 'white',paddingHorizontal:10 }}>The best grain,the finest roast,the powerful flavor</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.btn} onPress={() =>
                            navigation.navigate('Login')}

                    >
                        <Text style={{ color: 'white', fontFamily: 'Poppins-Bold' }}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    Imagee: {
        height: Dimensions.get('window').height,
        width: '100%',
        position:'absolute',
        bottom:0,
        left:0,
        
        
    },
    imageeText: {
        // marginTop: '8%',
        // lineHeight: 50,backgroundColor:'black',
        


    },
    btn: {
        // alignItems: "center",
        backgroundColor: "#faae61",
        // // height: 12,
        // padding: 12,
        // marginTop: 62,
        // margin: 18,
        borderRadius:10,
        // height:50,
        position:'absolute',
        bottom:0,
        height:50,
        width:'90%',
        margin:15,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center'
        
        
        
       
        
         


    }
})

export default WorkThroughPage;