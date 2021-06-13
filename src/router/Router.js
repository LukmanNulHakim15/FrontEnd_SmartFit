import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'; 
import  Login  from '../Page/Login';
import  Menu  from '../Page/Menu';
import Registrasi from '../Page/Registrasi';
import JajalII from '../Page/JajalII';
import jajal from '../Page/jajal';


const Stack = createStackNavigator();
export default class Router extends Component {
    render() {
        return (
            <Stack.Navigator>
                {/* <Stack.Screen name="Login" component={Login}/> */}
                {/* <Stack.Screen name="JajalII" component={JajalII}/> */}
                {/* <Stack.Screen name="Menu" component={Menu}/> */}
                <Stack.Screen name="jajal" component={jajal}/>
            </Stack.Navigator>
        )
    }
}


