import React from 'react';
import { View, Button } from 'react-native';

import {useAuth} from './../../contexts/auth'



const Dashboard: React.FC = () => {
 
  const { sair } = useAuth()

  const Sair = async () => {
    sair()
  }


  return <View style={{ flex: 1, justifyContent: "center" }}>
    <Button title="Sair" onPress={Sair} />
  </View>;
}

export default Dashboard;