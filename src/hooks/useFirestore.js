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
        case "IS_PENDING":
            return {isPending: true, document: null, success: false, error: null}
        case "ADD_DOC":
            return {isPending: false, document: payload, success: true, error: null}
        case "ERROR":
            return {isPending: false, document: null, success: false, error: payload}
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    // state the reference to the firestore collection 
    const ref = projectFirestore.collection(collection)

    // only dispatch if not cancelled 
    const dispatchIfNotCancelled = action => {
        if(!isCancelled){
            dispatch(action);
        }
    }

    // add a document
    const addDocument = async doc => {
        dispatch({type: 'IS_PENDING'});

        try {
            const addedDocument = await ref.add(doc);
            dispatchIfNotCancelled({type: 'ADD_DOC', payload: addedDocument})

        } catch (err) {
            dispatchIfNotCancelled({type: "ERROR", payload: err.message})
        }

    }

    // delete a document
    const deleteDocument = async id => {

    }

    // can't update state if isCancelled == true, so we set that on component unmount
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {addDocument, deleteDocument, response}

}
