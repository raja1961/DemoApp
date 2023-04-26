import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProgressBar from 'react-native-progress/Bar'
import Ionicons from 'react-native-vector-icons/Ionicons'
const FilledBottom = () => {
    return (
        <>
            <View>
                <Text style={styles.topText}>
                    10 minutes left
                </Text>
                <Text style={styles.subText} >
                    Delivery your order to.Ji.kpg Sutoyo
                </Text>
                <View style={styles.ProgressBar}>
                    <ProgressBar progress={0.3} width={200} />
                </View>
                <View style={styles.deliveryStatus} >
                    <Image style={styles.Image} source={require('../../assets/imgs/Detail.jpg')} />
                    <View style={{ paddingHorizontal: 7, }} >
                        <Text style={styles.deliveryStatusText}>Delivered your order</Text>

                        <Text >We Delivered your goods to you in {"\n"} the shortes psossible time.</Text>
                    </View>
                </View>
                {/* <View>
                    <Image source={require('../../assets/imgs/ProfileImage.jpg')} style={styles.Image} />
                    <Text>Johan Hawan</Text>
                    <
                </View> */}
                 <View style={styles.deliveryStatus} >
                    <Image style={styles.Image} source={require('../../assets/imgs/ProfileImage.jpg')} />
                    <View style={{ paddingHorizontal: 7, }} >
                        <Text style={styles.deliveryStatusText}>Johan Hawan</Text>
                        <Text>Personal Courier</Text>
                    </View>
                    <TouchableOpacity>
                    <Ionicons style={{marginHorizontal:100}} name="call" size={40} />
                    </TouchableOpacity>
                    
                </View>


            </View>
        </>
    )
}
const styles = StyleSheet.create({
    topText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins-Bold'
    },
    subText: {
        textAlign: 'center'
    },
    ProgressBar: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom:2

    },
    Image: {
        resizeMode: 'cover',
        height: 60,
        width: '25%',
        borderRadius: 10

    },
    deliveryStatus: {
        flexDirection: 'row',
        // borderWidth:1,
        padding: 8,
        borderRadius: 10,
        borderLeftWidth: 1,
        margin: 4,
        borderRightWidth: 1,
        borderTopWidth: 0.1,
        borderBottomWidth: 0.3

    },
    deliveryStatusText: {
        fontFamily: 'Poppins-Bold',
        lineHeight: 18
    }
})

export default FilledBottom;