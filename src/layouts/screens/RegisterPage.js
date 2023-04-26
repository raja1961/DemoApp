import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity, goBack } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from 'react-native-paper';
const Register = ({ navigation }) => {
  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (

    <>
      <ScrollView>
        <View>
          <View>
            <Image style={styles.imagee} source={require('../../assets/imgs/coffe2.jpg')} />
          </View>

          <View style={styles.allpage}>
            <View >
              <Text style={[styles.text, { color: '#121515', fontWeight: '700', fontSize: 24 }]}>Register</Text>
              <Text style={styles.text}>Create your account</Text>
            </View>
            <View style={styles.logininput} >
              <Text style={{ marginBottom: "8%", marginTop: '8%' }}>YOUR NAME</Text>
              <TextInput style={[styles.input,]} />
              <Text style={{ marginBottom: "8%", marginTop: '8%' }}>EMAIL</Text>
              <TextInput style={[styles.input, { marginBottom: 30 }]} />

              <Text style={{ marginBottom: 10 }}>PASSWORD</Text>
              <TextInput style={[styles.input, { marginBottom: 31 }]}

                secureTextEntry={passwordVisible}
                right={<TextInput.Icon style={{ marginTop: "30%" }} name={passwordVisible ? "eye-off" : "eye"} onPress={() => setPasswordVisible(!passwordVisible)} />}
              />


            </View>
          </View>

        </View>
        <View  >
          <View style={[styles.bottom]}>
            <Text style={{ color: '#121515' , textAlign: 'center', fontFamily:'Poppins-Bold'}} >I have an account/</Text>
            <Text style={{ color: '#121515', fontWeight: '700',  fontFamily:'Poppins-Bold',borderBottomWidth:0.5, }} onPress={() => navigation.goBack()} >Login
            
            </Text>
          </View>
          
        </View>
      </ScrollView>
      <TouchableOpacity
            style={styles.btn}

          >
            <Text style={{ color: '#fff' }}>Register</Text>
          </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  signin: {
    // marginTop:10
  },
  imagee: {

    // width: 320, height: 200, marginTop: -60
    width: '100%',
    marginTop: '-58%',

    // padding: '33%',
    marginBottom: '8%'


  },
  text: {

    // marginBottom: 10,
    color: '#121515',
    // fontWeight: '700'
    marginBottom: '3%'

  },
  allpage: {

    marginLeft: "7%"
  },
  logininput: {
    // marginTop: 60
  },
  input: {
    // marginRight: 30,
    // height: 20,
    // margin: 3,
    // borderWidth: 1,
    // padding: 10,
    marginRight: '10%',
    height: 43
  },
  bottom: {
    // marginTop: '10%',
    // marginBottom: "20%",

    // // alignItems: 'center',
    // // fontWeight: '700',
    // // fontSize: 16,
    // // color: '#121515',
    // flexDirection:'row',
    // alignSelf:"center",
    marginTop: '10%',
    marginBottom: "18%",
    fontWeight: '700',
    fontSize: 16,
    color: '#121515',
    width: '100%',
    flexDirection:"row",
    // paddingHorizontal:'19%',
    // flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: '28%'


  },
  btn: {
    alignItems: "center",
    backgroundColor: "#bd623e",
    // padding: "4.5%",
    height: 50,
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    width: "90%",
    justifyContent:'center',
    margin:10,
    alignSelf:'center',
    borderRadius:10

  }

})
export default Register