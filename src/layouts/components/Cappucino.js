import React from "react";
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ActivityIndicator, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card, Title, Paragraph, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const Cappucino = ({ ApiData, load }) => {
    console.log('api data=====',ApiData);
    const navigation = useNavigation();

    const RenderItem = (item) => {
        console.log('item====',item.data.image);
        return (


            <Card style={styles.card} >

                <TouchableOpacity
                    onPress={() => navigation.navigate('Detail', { ProductTitle: item.data.title, ProductImage: item.data.image ,ProductDescription :item.data.description})}
                >
                    <Card.Cover style={styles.image} resizeMode='stretch' source={{ uri: item.data.image }}
                    />

                </TouchableOpacity>
                <View style={styles.imageText}>
                    <Ionicons name="star" color={'yellow'} size={16} />
                    <Text style={{ fontFamily: 'Poppins-bold', fontSize: 14, color: 'white' }}>4.6</Text>

                </View>

                <Card.Content>
                    <Title>{item.data.title}</Title>
                    <Paragraph style={{ marginBottom: 10 }} >With chocolate</Paragraph>
                </Card.Content>
                <Card.Actions style={styles.actions}>
                    <Title>₹180 </Title>
                    <TouchableOpacity style={styles.addButton}>
                        <Ionicons name="add-outline" size={20} color={'white'} />
                    </TouchableOpacity>

                </Card.Actions>
            </Card>




        )
    }

    return (
        <SafeAreaView >
            <View style={styles.repeat}  >
                {
                    load ? <ActivityIndicator size={50} style={{justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center',flex:1}}/> : ApiData.map((item) => {
                        return (
                            <View >
                                <RenderItem data={item} />

                            </View>
                        )
                    }
                    )
                }
            </View>

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    repeat: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    card: {

        width: Dimensions.get('screen').width * 0.4,
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical: 16
    },
    image: {
        // resizeMode: 'stretch',
        // width: null,
        // height:undefined,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomEndRadius: 15,
        // padding:10
    },
    actions: {
        fontSize: 22,
        fontWeight: '700',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%'
        // backgroundColor:'red',

    },
    addButton: {
        marginLeft: 26,
        backgroundColor: '#bd623e',
        padding: 5,
        borderRadius: 10
    },
    imageText: {
        // marginBottom:122
        position: 'absolute',
        flexDirection: 'row',
        marginHorizontal: '5%'
    }

})
export default Cappucino;