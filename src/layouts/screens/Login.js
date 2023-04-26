import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from 'react-native-paper';




const Login = ({ navigation }) => {
  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <>
      <ScrollView style={{ width: '100%' }}>
        <View style={{ width: '100%' }}>
          <View>
            <Image style={styles.imagee}  source={require('../../assets/imgs/coffe2.jpg')} />
          </View>

          <View style={styles.allpage}>
            <View >
              <Text style={[styles.text, { color: '#121515', fontWeight: '700', fontSize: 24 }]}>Login</Text>
              <Text style={styles.text}>sign to your account</Text>
            </View>
            <View style={styles.logininput} >
              <Text style={{ marginBottom: "8%", marginTop: '8%' }}>YOUR EMAIL</Text>
              <TextInput style={[styles.input, { marginBottom: 45 }]} />


              <Text style={{ marginBottom: 10 }}>PASSWORD</Text>
              <TextInput style={[styles.input, { marginBottom: 30 }]}

                secureTextEntry={passwordVisible}
                right={<TextInput.Icon style={{ marginTop: "30%" }} name={passwordVisible ? "eye-off" : "eye"} onPress={() => setPasswordVisible(!passwordVisible)} />}
              />
              <Text style={[styles.text, { color: '#121515', fontWeight: '700', fontSize: 16 }]} >Forgot Password?</Text>

            </View>
          </View>

        </View>

        <View style={[styles.bottom]} >
          <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'Poppins-Bold', color: '#121515' }}>Don't have account?</Text>
          <Text style={{ borderBottomWidth: 0.5, fontFamily: 'Poppins-Bold', color: '#121515', marginLeft: '2%', }} onPress={() =>
            navigation.navigate('Register')}>SignUp</Text>
        </View>

       
      </ScrollView>
      <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('BottomTab')}

        >
          <Text style={{ color: '#fff' }}>Login</Text>
        </TouchableOpacity>

    </>
  );
};
const styles = StyleSheet.create({
  signin: {
    // marginTop:10
  },
  imagee: {

    // width: 320, height: 200, marginTop: -60
    width: '100%',
    marginTop: '-58%',

    padding: '3%',
    marginBottom: '8%'


  },
  text: {

    // marginBottom: 10,
    color: '#121515',
    // fontWeight: '700'
    marginBottom: '3%'

  },
  allpage: {

    marginLeft: "7%",

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
    marginTop: '10%',
    marginBottom: "18%",
    fontWeight: '700',
    fontSize: 16,
    color: '#121515',
    width: '100%',
    flexDirection: "row",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28%'


  },
  btn: {
    alignItems: "center",
    backgroundColor: "#bd623e",
    justifyContent:'center',
    height: 50,
    position: 'absolute',
    bottom: 0,
    width: "90%",
    margin:10,
    alignSelf:'center',
    borderRadius:10

  }

})
export default Login;
