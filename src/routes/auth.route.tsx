import React from 'react'

import Logar from '../pages/Logar'

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes : React.FC = () =>(
    <AuthStack.Navigator>
       <AuthStack.Screen  name="Logar" component={Logar} /> 
    </AuthStack.Navigator>
)

export default AuthRoutes