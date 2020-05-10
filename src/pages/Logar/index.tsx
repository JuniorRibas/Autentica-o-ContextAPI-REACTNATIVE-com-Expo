import React from 'react';
import { View, Button } from 'react-native';

import { authLogar } from './../../services/auth'
import {useAuth} from './../../contexts/auth'



const Logar: React.FC = () => {
  const { logado, logar } = useAuth()

  console.log(logado)

  const Logar = async () => {
    logar()
  }


  return <View style={{ flex: 1, justifyContent: "center" }}>
    <Button title="Me apert" onPress={Logar} />
  </View>;
}

export default Logar;