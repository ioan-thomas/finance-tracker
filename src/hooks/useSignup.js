import { useState } from "react"
import { projectAuth } from "../firebase/config"

export function useSignup() {

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);


    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)
            if(!res){
                throw new Error('Could not complete signup')
                }
            
            // add display name to user
            await res.user.updateProfile({displayName})

            setIsPending(false);
            setError(false)
        
        } 
        catch (err) {
            console.log(err.message)
            setError(true)
            setIsPending(false)
        }
        

    }
    return {error, isPending, signup}
}
