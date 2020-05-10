import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth'


import Routes from './routes'
// import { Container } from './styles';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </AuthProvider>
    )
}

export default App;