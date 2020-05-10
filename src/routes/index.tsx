import React  from 'react'

import {useAuth} from './../contexts/auth'

import AuthRoutes  from './auth.route'
import AuthDashboard from './app.route'
import { View, ActivityIndicator } from 'react-native'

const Routes : React.FC =() =>{
    const  {logado, loading}  = useAuth()

    if(loading){
        return (
            <View style={{flex:1 , justifyContent:"center", alignItems: "center"}}>
                <ActivityIndicator  size="large" color="#999" />
            </View>
        )
    }
    

    return  logado? <AuthDashboard /> :  <AuthRoutes />
}

export default Routes