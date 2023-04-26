import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { TextInput, Searchbar, IconButton } from "react-native-paper";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Favourite from "./Favourite";
import Cappucino from "../components/Cappucino";
import Machito from "../components/Machito";
import Latte from "../components/Latte";



const HomePage = () => {
    const [data, setdata] = useState([])
    const [isLoading,setLoading]= useState(true)
    // console.log('fffff===', data);
    const FetchApi = async () => {
        try {
            const Response = await fetch("https://api.sampleapis.com/coffee/hot")
            const json = await Response.json();
            setdata(json)
            console.log('fsttstts====', json);
            
        }
        catch
        (error) {
            console.log(error);
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        FetchApi()
        // console.log('ghhhhhhhh====',FetchApi);
    }
        , [])

    const renderHeader = () => {
        return (
            <View style={styles.Container}>
                <View style={styles.mainView}>
                    <View style={styles.row}>
                        <Text style={{ color: 'white' }} >Location{"\n"}Bilzen,Tanjungbalai <Ionicons name="chevron-down-outline" size={16} /></Text>
                        <Image style={styles.imagee} source={require('../../assets/imgs/doremon.jpg')} />
                    </View>
                    <View style={styles.search}>

                        <Ionicons color={'#fff'} name="search" size={26} />
                        <TextInput style={[styles.textInput,]} placeholder="Search coffee" placeholderTextColor='#fff' activeUnderlineColor="#171716" selectionColor="#fff"
                            theme={{
                                colors: {
                                    text: 'white',
                                }
                            }}
                        />
                        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 7, backgroundColor: '#bd623e', borderColor: '#bd623e', width: '14%', }} >
                            <Ionicons style={{ alignSelf: 'center' }} name="options" al color={'#fff'} size={26} />
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.image2} source={require('../../assets/imgs/BuyOne.jpg')} />
                </View>
                <View style={{ marginTop: '25%' }}>
                </View>
                
            </View>
        )
    }
    const TabButton = (props) => {
        return (
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
        <SafeAreaView style={{ flex: 1, }} >
            <Tabs.Container renderHeader={renderHeader}
             renderTabBar={TabButton} 
             headerContainerStyle={styles.tabs}>
                <Tabs.Tab name="Cappucino">
                    <Tabs.ScrollView>
                        <Cappucino ApiData={data} load={isLoading} />
                    </Tabs.ScrollView>
                </Tabs.Tab>
                <Tabs.Tab name="Machito">
                    <Tabs.ScrollView>
                        <Machito />
                    </Tabs.ScrollView>
                </Tabs.Tab>
                <Tabs.Tab name="Latte">
                    <Tabs.ScrollView>
                        <Latte />
                    </Tabs.ScrollView>
                </Tabs.Tab>
            </Tabs.Container>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    Container: {
        flex: 1, backgroundColor: 'white',
        height: undefined
    },
    imagee: {
        height: 50,
        width: 50,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '4%',
    },
    search: {
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        width: '100%',
        backgroundColor: '#171716',
        justifyContent: 'space-between',
        borderRadius: 12,
        borderColor: '#171716',
    },
    textInput: {
        backgroundColor: '#171716',
        borderColor: 'red',
        height: 39,
        width: '77%',
        color: 'red'
        // underlineColorAndroid:"transparent"
    },
    image2: {
        height: 150,
        width: '100%',
        marginTop: 18,
        borderRadius: 10,
        paddingVertical: '5%',
        alignContent: 'center',
        justifyContent: "center",
        alignSelf: 'center',
        alignItems: 'center',
    },
    mainView: {
        backgroundColor: '#3d3938',
        padding: 12,
        paddingHorizontal: '7%',
        height: Dimensions.get('window').height / 3.2
    },
    IndicatorStyle: {
        backgroundColor: '#bd623e',
        height: null,
        top: '12%',
        bottom: '12%',
        zIndex: -2,
        borderRadius: 10
    },
    LabelStyle: {
        color: 'black',
        textTransform: 'capitalize'
    },
    tabs: {
        backgroundColor: "white",
        elevation: 0,
    },
    MaterialTabBar1: {
        marginLeft: 10,
        marginRight: 10
    }
})
export default HomePage