import React, { createContext, useState } from 'react'
const AuthContext = createContext()
export const AuthProvider = AuthContext.Provider
export const AuthConsumer = AuthContext.Consumer

export const getDefaultAuth = () => {
    try {
        return JSON.parse(localStorage.getItem('authToken'))
    } catch (e) {
        return null
    }
}

//On user logout remove token from localstorage
export const setLogout = () => {
    localStorage.removeItem('authToken')
    window.location.href = '/'
}

export const AuthProviderContainer = ({ children, history }) => {
    const defaultAuth = getDefaultAuth()
    const [auth, setAuth] = useState(defaultAuth)

    const setAuthAndCache = (value = null) => {
        value
            ? localStorage.setItem('authToken', JSON.stringify(value))
            : localStorage.removeItem('authToken')

        setAuth(value)
    }

    return (
        <AuthProvider value={{ auth, setAuthAndCache, setLogout }}>
            {children}
        </AuthProvider>
    )
}
export default AuthContext
