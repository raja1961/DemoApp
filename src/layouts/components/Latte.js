// import React,{useEffect,useState} from "react";
// import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';



// // const numCollm=2;
// const Cappucino = (  ) => {
//     const navigation = useNavigation();
//     // const DATA = [
//     //     {
//     //         id: 1,
//     //         title: 'First Item',
//     //     },
//     //     {
//     //         id: 2,
//     //         title: 'Second Item',
//     //     },
//     //     {
//     //         id: 3,
//     //         title: 'Third Item',
//     //     },
//     //     {
//     //         id: 4,
//     //         title: 'Third Item',
//     //     },
//     // ]
//     const [DATA,setDATA]=useState([])
//     const FetchApi= async()=>{
//         const Response= await fetch(
//             "https://api.sampleapis.com/coffee/hot"
//             )
//         const json= await Response.json()   
//         setDATA(json)
//         console.log(DATA);
//     }
// useEffect(()=>{
//   FetchApi()
// },[])
//     const renderItem = () => {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.wrapCard}>
//                     <Card style={styles.card} >
                        
//                         <TouchableOpacity 
//                          onPress={() => navigation.navigate('Detail')}
//                         >
//                         <Card.Cover style={styles.image} resizeMode='stretch' source={require('../../assets/imgs/subimg.jpg')}
                        
//                          />
                        
//                         </TouchableOpacity>
//                         <View style={styles.imageText}>
//                             <Ionicons name="star" color={'yellow'} size={16} />
//                         <Text style={{fontFamily:'Poppins-bold',fontSize:14,color:'white'}}>4.6</Text>
                        
//                         </View>
                        
//                         <Card.Content>
//                             <Title>Cappucino</Title>
//                             <Paragraph style={{ marginBottom: 10 }} >With chocolate</Paragraph>
//                         </Card.Content>
//                         <Card.Actions style={styles.actions}>
//                             <Title>₹180 </Title>
//                             <TouchableOpacity style={styles.addButton}>
//                                 <Ionicons name="add-outline" size={20} color={'white'} />
//                             </TouchableOpacity>
                            
//                         </Card.Actions>
//                     </Card>
//                     <Card style={styles.card} >
//                     <TouchableOpacity 
//                          onPress={() => navigation.navigate('Detail')}
//                         >
//                         <Card.Cover style={styles.image} resizeMode='stretch'  source={require('../../assets/imgs/subimg2.jpg')} />
//                         </TouchableOpacity>
//                         <View style={styles.imageText}>
//                             <Ionicons name="star" color={'yellow'} size={16} />
//                         <Text style={{fontFamily:'Poppins-bold',fontSize:14,color:'white'}}>4.6</Text>
                        
//                         </View>
//                         <Card.Content>
//                             <Title>Cappucino</Title>
//                             <Paragraph style={{ marginBottom: 10 }} >With chocolate</Paragraph>
//                         </Card.Content>
//                         <Card.Actions style={styles.actions}>
//                             <Title>₹180 </Title>
//                             <TouchableOpacity style={styles.addButton}>
//                                 <Ionicons name="add-outline" size={20} color={'white'} />
//                             </TouchableOpacity>
//                         </Card.Actions>
//                     </Card>
//                 </View>
//             </View>

//         )
//     }

//     return (
//         <SafeAreaView >
//             <FlatList
//                 data={DATA}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//                 // numColumns={numCollm}
//             />
//         </SafeAreaView>

//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         // height:'10%'

//     },
//     wrapCard: {
//         flexDirection: 'row',
//         margin: '10%',
//         marginLeft: '5%',
//         marginTop:'4%',
//         marginBottom:'2.5%'
//         // height:null
//     },
//     card: {
//         width: '50%',
//         borderRadius: 15,
//         marginHorizontal: 5,
//         // height:null

//     },
//     image: {
//         // resizeMode: 'stretch',
//         // width: null,
//         // height:undefined,
//         borderTopRightRadius: 15,
//         borderTopLeftRadius: 15,
//         borderBottomLeftRadius: 15,
//         borderBottomEndRadius: 15,
//         // padding:10
//     },
//     actions: {
//         fontSize: 22,
//         fontWeight: '700',
//         flexDirection:'row',
//         justifyContent:'space-between',
//         marginHorizontal:'5%'
//         // backgroundColor:'red',
        
//     },
//     addButton: {
//         marginLeft: 26,
//         backgroundColor: '#bd623e',
//         padding: 5,
//         borderRadius: 10
//     },
//     imageText:{
//         // marginBottom:122
//         position:'absolute',
//         flexDirection:'row',
//         marginHorizontal:'5%'
//     }

// })
// export default Cappucino;

import React from "react";
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ActivityIndicator, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card, Title, Paragraph, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 1,
        title: 'First Item',
    },
    {
        id: 2,
        title: 'Second Item',
    },
    {
        id: 3,
        title: 'Second Item',
    },
    {
        id: 4,
        title: 'Second Item',
    },
    {
        id: 5,
        title: 'Second Item',
    },
   
    // {
    //     id: 4,
    //     title: 'Third Item',
    // },
]

const numCollm = 2;
const Cappucino = ({ ApiData, load }) => {
    //    console.log('ttttt=====',props);
    const navigation = useNavigation();

    const RenderItem = (item) => {
        // console.log('render====',props);
        // const [title,description] = props;
        // console.log('array====', props.ApiData[1].title);


        // console.log('item=========',item.item.id);
        return (
         
                
                    <Card style={styles.card} >

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail', )}
                        >
                            <Card.Cover style={styles.image} resizeMode='stretch' source={require('../../assets/imgs/subimg.jpg')}
                            />

                        </TouchableOpacity>
                        <View style={styles.imageText}>
                            <Ionicons name="star" color={'yellow'} size={16} />
                            <Text style={{ fontFamily: 'Poppins-bold', fontSize: 14, color: 'white' }}>4.6</Text>

                        </View>

                        <Card.Content>
                            <Title>Cappucino</Title>
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
        <SafeAreaView  >

            {/* {load ? <ActivityIndicator size={40} /> : (
                <FlatList
                    data={ApiData}
                    renderItem={(item) => RenderItem(item)}
                    // keyExtractor={item => item.item.id}
                    numColumns={numCollm}
                />

            )} */}
            {/* <FlatList
    data={props.ApiData}
    renderItem={(item)=> RenderItem (item
        )}
    // keyExtractor={item => item.id}
    numColumns={numCollm}
/>
             */}

            <View style={styles.repeat} >
                {
                    DATA.map((item) => (
                        <RenderItem style={{}}  />
                    )

                    )
                }
            </View>

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    repeat:{
        width:'100%',
        flexDirection:'row',
       flexWrap:'wrap',
       justifyContent:'space-between'
    },
    // container: {
    //     flex: 0.4,
    //     flexDirection:'row',
    //     justifyContent: 'flex-start',
    //     // padding: 5
    //     // height:'10%'




    // },
   
    card: {
        
        width:Dimensions.get('screen').width *0.4,
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical:16
        // flexDirection:'row'
        // height:null
       
        // flexDirection:'column'

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