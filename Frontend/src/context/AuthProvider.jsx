import React, { useContext, useState, createContext } from 'react'


export const AuthContext = createContext()

function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users")
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )
    return (
        <AuthContext.Provider value={ [authUser, setAuthUser] }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
