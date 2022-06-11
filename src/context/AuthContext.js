import { createContext, useReducer, useEffect } from "react"
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, {type, payload}) => {

    switch(type){
        case 'LOGIN':
            return { ...state, user: payload }
        case 'LOGOUT':
            return {...state, user: null}
        case 'AUTH_IS_READY':
            return {...state, user: payload, authIsReady: true}
        default:
            return state
    }

}

export function AuthContextProvider({children}) {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    })

    useEffect(() => {
      const unsub = projectAuth.onAuthStateChanged(user => {
        dispatch({type: 'AUTH_IS_READY', payload: user})
        unsub()
      })
    }, [])
    
    

    console.log("Auth Context state:", state)
    
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}
