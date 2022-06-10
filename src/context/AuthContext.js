import { createContext, useReducer } from "react"

export const AuthContext = createContext();

export const authReducer = (state, {type, payload}) => {

    switch(type){
        case 'LOG_IN':
            return {...state, payload}
        default:
            return state
    }

}

export default function AuthContextProvider({children}) {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}
