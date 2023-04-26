import React, { useState, useCallback } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import Ionicons from 'react-native-vector-icons/Ionicons'

const DATA = [
    {
        id: 0,
        title: "H",
    },
    {
        id: 1,
        title: "M",
    },
    {
        id: 2,
        title: "L",
    },
];


const Detail = ({ navigation, route }) => {

    const [textShown, setTextShown] = useState(false);
    const [lengthMore, setLengthMore] = useState(false);
    const toggleNumberOfLines = () => {
        setTextShown(!textShown);
    }
    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 2);
    }, []);




    const [selectedId1, setSelectedId1] = useState();

    const color = (id) => {
        // console.log('id========',id);
        setSelectedId1(id)
    }
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.mainView}>
                    <Image style={styles.image} source={{ uri: route.params.ProductImage }} />
                    <Text style={styles.maintext} >{route.params.ProductTitle}</Text>
                    <Text >with chocolate</Text>
                    <View style={styles.text}>

                        <Text style={styles.subtext1}>
                            <Ionicons name="star" color={'#deb11d'} size={16} />
                            4.6
                            <Text style={styles.subtext2} > (230)
                            </Text>
                        </Text>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity style={styles.feedback}>
                                <Ionicons name="thumbs-up" size={24} color={'#bd623e'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.feedback}>
                                <Ionicons color={'#bd623e'} name="md-chatbubbles" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <Text
                            onTextLayout={onTextLayout}
                            numberOfLines={textShown ? undefined : 3}
                            style={{ lineHeight: 21 }}>{route.params.ProductDescription}</Text>

                        {
                            lengthMore ? <Text
                                onPress={toggleNumberOfLines}
                                style={{ lineHeight: 21, marginTop: 0, fontFamily: 'Poppins-Bold', color: '#bd623e' }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                                : null
                        }
                    </View>
                    <Text style={styles.size}>
                        Size
                    </Text>
                    <View style={styles.selectSize}>
                        {DATA.map((item, index) => {

                            return (
                                <TouchableOpacity  style={selectedId1 === index ? styles.active : styles.inactive} onPress={() => color(item.id)}>
                                    <Text style={selectedId1 === index ? styles.activeTextXolor : undefined} onPress={() => color(item.id)} >{item.title}</Text>
                                </TouchableOpacity >
                            )
                        })}
                    </View>

                </View>

            </ScrollView>
            <View style={[styles.mainView, { marginBottom: 4 }]}>
                <Text>
                    Price
                </Text>
                <Text style={styles.PriceTag}>
                    ₹180
                </Text>

                <TouchableOpacity style={styles.BuyNow} onPress={() => navigation.navigate('Order')}>
                    <Text style={{ color: '#fff' }}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}
const styles = StyleSheet.create({
    BuyNow: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 42,
        width: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bd623e',
    },
    PriceTag: {
        color: '#bd623e',
        fontFamily: 'Poppins-Bold'
    }
    ,
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 14
    }
    ,
    mainView: {
        marginLeft: '4%',
        marginRight: '4%'
    },
    image: {
        resizeMode: 'cover',
        height: 190,
        width: '100%',
        borderRadius: 10,


    },
    text: {
        flexDirection: 'row',
        borderBottomWidth: 0.4,
        borderColor: '#d1cfc7',
        justifyContent: "space-between"

    },
    feedback: {
        marginLeft: 10,
        height: 35,
        width: 40,
        borderRadius: 10,
        backgroundColor: '#e2e6e1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    maintext: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        color: '#323336'
    },
    subtext1: {
        fontWeight: '600',
        fontSize: 14,
        color: 'black',
    },
    subtext2: {
        color: "#8f8978",
        fontSize: 12
    },
    description: {
        fontFamily: 'Poppins-Bold',
        marginVertical: '2%',
        color: '#323336'
    },
    size: {
        color: '#323336',
        fontFamily: 'Poppins-Bold',
        fontSize: 17
    },
    sizeButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        width: 80,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#bd623e',
        activeColor: "red",
        inactiveColor: "black",

    },
    selectSize: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    inactive: {
        backgroundColor: '#fff',
        borderWidth: 1,
        width: 80,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#bd623e',
        activeColor: "red",
        inactiveColor: "black",



    }

    ,
    active: {
        backgroundColor: '#d47028',
        borderWidth: 1,
        width: 80,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#bd623e',
        activeColor: "red",
        inactiveColor: "black",

    },
    activeTextXolor: {
        color: "#ffff"
    }

})
export default Detail;