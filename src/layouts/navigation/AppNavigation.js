import React from 'react';
import { TouchableOpacity, Text, Image, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/RegisterPage';
import WorkThroughPage from '../screens/WorkThroughPage';
import HomePage from '../screens/HomePage';
import Cart from '../screens/Cart';
import About from '../screens/About';
import Order from '../screens/Order';
import Detail from '../screens/Detail';
import MapViews from '../components/MapViews';
import Devs from '../screens/Devs';
import Locations from '../screens/Locations';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'


import Favourite from "../screens/Favourite";
import { Header } from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 25 },
            tabBarItemStyle: { width: 100 },


            headerShown: false
        }} style={{ backgroundColor: 'green' }}
            tabBarOptions={{
                style: {
                    backgroundColor: 'green'
                }
            }} barStyle={{ backgroundColor: 'white' }}
            bar
        >
            <Tab.Screen name="Home" component={HomePage} options={{
                tabBarIcon: (focused) => {
                    return <Ionicons name="home" size={25} color={focused ? "#bd7748" : "#FF9933"} />
                },

            }} />
            <Tab.Screen name="Favourite" component={Favourite} options={{
                tabBarIcon: (focused) => {
                    return <Ionicons name="heart-half-outline" size={25} color={focused ? "#bd7748" : "#FF9933"} />
                }
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: (focused) => {
                    return <Ionicons name="cart" size={25} color={focused ? "#bd7748" : "#FF9933"} />
                }
            }} />
            <Tab.Screen name="About" component={About} options={{
                tabBarIcon: (focused) => {
                    return <Ionicons name="person" size={25} color={focused ? "#bd7748" : "#FF9933"} />
                }
            }} />


        </Tab.Navigator>
    );
}




const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="WorkThroughPage">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Order" component={Order} options={{
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack('Detail')}>
                        <Ionicons name='chevron-back-outline' size={25} />
                    </TouchableOpacity>),
                headerBackVisible: false, headerTitleAlign: 'center', headerShadowVisible: false, /*headerStyle: {
                    backgroundColor: 'white',
                    header: () => null
                }*/
            }} />
            <Stack.Screen name="Devs" component={Devs} />
            <Stack.Screen name="MapViews" component={MapViews} />


            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Locations" component={Locations} options={{ headerShown: false }} />
            <Stack.Screen name="WorkThroughPage" component={WorkThroughPage} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" Options={{
                headerShown: true
            }} component={Detail} options={{
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Ionicons name='chevron-back-outline' size={25} />
                    </TouchableOpacity>),
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Favourite')}>
                        <Ionicons name='heart-outline' size={25} />
                    </TouchableOpacity>
                ), headerBackVisible: false, headerTitleAlign: 'center', headerShadowVisible: false, headerStyle: {
                    backgroundColor: 'white',
                    header: () => null
                }
            }} />

        </Stack.Navigator>
    );
};


export default AppNavigation;
