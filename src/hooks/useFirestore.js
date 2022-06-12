import { useReducer, useEffect, useState } from "react";
import {projectFirestore} from '../firebase/config'

let initialState = {
    document: null, 
    isPending: false,
    error: null,
    success: null
}
// we set this var outside the func becuase we don't want to make a new copy everytime the hook is used


const firestoreReducer = (state, {type, payload}) => {
    switch (type){
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    // state the reference to the firestore collection 
    const ref = projectFirestore.collection(collection)

    // add a document
    const addDocument = doc => {

    }

    const deleteDocument = id => {

    }

    // cant update state if isCancelled == true, so we set that on component unmount
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {addDocument, deleteDocument, response}

}
