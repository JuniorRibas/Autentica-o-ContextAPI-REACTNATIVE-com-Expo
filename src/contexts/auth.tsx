import React, { createContext, useState, useEffect, useContext } from 'react'
import { authLogar } from './../services/auth'
import { AsyncStorage } from 'react-native';

interface AuthContextData {
    logado: boolean,
    user: Object | null,
    loading: boolean,
    logar(): Promise<void>,
    sair(): void
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<Object | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const Load = async () => {
            const useStorage = await AsyncStorage.getItem('@RNAuth:user')
            const tokenStorage = await AsyncStorage.getItem('@RNAuth:token')
            setLoading(false)
            console.log(useStorage)
            if (useStorage && tokenStorage) {
                setUser(JSON.parse(useStorage))
            }
        }

        Load()
    }, [])



    const logar = async () => {
        const data = await authLogar()
        console.log(data)

        setUser(data.user)

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(data.user))
        await AsyncStorage.setItem('@RNAuth:token', data.token)

        const useStorage = await AsyncStorage.getItem('@RNAuth:user')
        console.log(useStorage)
    }

    const sair = () => {
        AsyncStorage.clear().then(() =>{
            setUser(null)
        })
    }

    return (
        <AuthContext.Provider value={{ logado: !!user, user, logar, sair,loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth (){
    const context = useContext(AuthContext)
    return context
};