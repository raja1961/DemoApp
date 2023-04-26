import React,{useState} from "react";

import { Text, View, TouchableOpacity, StyleSheet, Image,Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
const Order1 = () => {
    const [data, setData] = useState(1);

    const [isActive, setIsActive]=useState(true);
    const [isDeActive, setIsDActive]=useState(true);

    const decreaseData = () => {
        setIsActive(true)
        if(data > 1){
            setData(data -1)
            setIsDActive(true)
        }
        else if(data <=2){
            setIsDActive(false)
        }
       
    }

    const increaseData = () => {  
        setIsDActive(true)
        if(data >= 10){
            setData(data)
            setIsActive(false)
        }else{
            setData(data + 1)
        }
    }

    
    
    return (

        <View style={styles.Container}>
            <View style={styles.addressView}>
                <Text style={{ fontFamily: 'Poppins-Bold', }}>
                    Delivery Address
                </Text>
                <Text style={{ fontFamily: 'Poppins-Bold', }} >
                    JI.Kpg Sutoyo
                </Text>
                <Text>
                    Kpg.Sutoyo NO.620 Bilzen,Tangungbali.
                </Text>
            </View>
            <View style={styles.EditAddressBtn}>
                <TouchableOpacity style={[styles.EditAddress, styles.editIcon]} >
                    <Ionicons name="create-outline" size={24} color={'black'} />
                    <Text style={{ fontFamily: 'Poppins-Bold' }}> Edit Address</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.EditNote}>
                    <Ionicons name="ios-document-text-outline" size={24} color={'black'} />
                    <Text style={{ fontFamily: 'Poppins-Bold' }}> Add Note</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.MainImageView}>
                <Image style={styles.Image} source={require('../../assets/imgs/Detail.jpg')} />
                <View style={styles.ImageText}>
                    <Text style={{ fontFamily: 'Poppins-Bold', }} >Cappuccino</Text>
                    <Text>
                        with chocolate
                    </Text>
                </View>
                
                <View  style={styles.subIcon}>
                    <TouchableOpacity style={styles.Icon} onPress={decreaseData}>
                        <Ionicons size={26} style={isDeActive? styles.ActiveColor:styles.DeactiveColor} name="remove-circle-outline" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{data}</Text>
                    <TouchableOpacity onPress={increaseData}  style={styles.Icon}  >
                        <Ionicons size={25} name="add-circle-outline" style={ isActive ?   styles.ActiveColor :  styles.DeactiveColor} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Discount}>
                <TouchableOpacity>
                    <Ionicons color={'#bd623e'} size={25} name="ios-link" />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-Bold' }}>1 Discount is appiled</Text>
                <TouchableOpacity>
                    <Ionicons size={25} name="chevron-forward-outline" />
                </TouchableOpacity>
            </View>
            <Text style={{ fontFamily: 'Poppins-Bold' }}>
                Payment Summary
            </Text>
           
            <View style={styles.delBorder}>
                <Text>Price</Text>
                <Text>₹180</Text>
            </View>
            <View style={[styles.delBorder, { borderBottomWidth: .5 ,marginBottom:5,paddingBottom:5}]}>
                <Text >Delivery Fee</Text>
                <Text style={styles.LineThrough}>40</Text>
                <Text> ₹20</Text>
            </View>
            <View style={styles.delBorder}>
                <Text>Total Payment</Text>
                <Text >₹200</Text>
            </View>
            <View style={styles.cashIcon} >
                <View style={styles.subCashIcon} >
                    <TouchableOpacity  >
                        <Ionicons size={25} name="md-logo-closed-captioning" />
                    </TouchableOpacity>
                    <View style={styles.rateSection}>
                        <TouchableOpacity style={styles.cash}>
                            <Text>Cash</Text>
                        </TouchableOpacity>
                        <Text style={styles.price}> ₹200</Text>
                    </View>


                </View>
                <TouchableOpacity  >
                    <Ionicons size={25} name="ellipsis-horizontal-circle-outline" />
                </TouchableOpacity>
            </View>
            
        </View>

    )
}
const styles = StyleSheet.create({
    Container: {
        margin: 12
    },
    addressView: {
        marginBottom: 10
    },
    EditAddressBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#d4d6d9',
        marginBottom: 10
    },

    EditAddress: {
        borderWidth: 1,
        marginRight: 10,
        height: 30,
        width: 125,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins-Bold'
    },
    editIcon: {
        flexDirection: 'row'
    },
    EditNote: {
        borderWidth: 1,
        marginRight: 10,
        height: 30,
        width: 125,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins-Bold',
        flexDirection: 'row',
        marginBottom: 8
    },
    MainImageView: {
        flexDirection: 'row'
    },
    Image: {
        resizeMode: 'cover',
        height: 60,
        width: '25%',
        borderRadius: 10
    },
    ImageText: {
        marginHorizontal: 5,
        alignContent: 'center',
        alignSelf: 'center'
    },
    subIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30
    },
    Icon: {
        marginHorizontal: 10
    },
    Discount: {
        flexDirection: 'row',
        justifyContent: 'space-around'
        , borderWidth: 1,
        marginTop: 18,
        height: 50,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    rateSection: {
        backgroundColor: '#f2f0f0',
        flexDirection: 'row',
        // padding:5,
        borderRadius: 10,
        marginLeft: '10%'
    },
    cash: {
        backgroundColor: '#c67c4e',
        width: 50,
        alignItems: 'center',
        padding: 5,
        borderRadius: 10
    },
    price: {
        padding: 5,
        marginLeft: 5,
        marginRight: 5
    },
    delBorder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:8,
        
    },
    LineThrough: {
        textDecorationLine: 'line-through',
        marginLeft: 180,
        color:'black'
    },
    
    
    cashIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    subCashIcon: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    ActiveColor :{
        color:'green'
       
        
    },
    DeactiveColor:{
        
        color:'red'
    }
   

})
export default Order1