import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDefaultTheme} from './src/utils/theme';
import AppNavigation from "./src/layouts/navigation/AppNavigation";
import HomeScreen from './src/layouts/screens/Login';
import PalinDrome from './src/layouts/screens/PalinDrome';
import Devs from './src/layouts/screens/Devs';




export default function App() {
    return (
    // //   <Devs />
        <PaperProvider theme={CombinedDefaultTheme}>
            <NavigationContainer theme={CombinedDefaultTheme}>
                <AppNavigation/>
            </NavigationContainer>
        </PaperProvider>
    );
}

