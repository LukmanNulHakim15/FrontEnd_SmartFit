import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'; 
import  Login  from '../Page/Login';
import  Menu  from '../Page/Menu';
import Registrasi from '../Page/Registrasi';



const Stack = createStackNavigator();
export default class Router extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                 <Stack.Screen name="Registrasi" component={Registrasi}/>
                <Stack.Screen name="Menu" component={Menu}/>
                
               
            </Stack.Navigator>
        )
    }
}


