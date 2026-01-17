import { useEffect, useState, useRef } from "react";
import { database } from "../firebase/config";
import {collection , query,orderBy , onSnapshot,where } from "firebase/firestore"



export const useFeactDocuments= (docCollection , search= null , uid=null) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // deal with memory leak
    const [ cancelled, setCancelled ] = useState(false)

    useEffect(() =>{

        async function loadData() {
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(database, docCollection)
            try {
                const collectionRef = collection(database, docCollection) // Remover await
                let q

                // Consulta para posts
            if(search){
                q= await query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdAt", "desc"))
            } else if (uid){
                 q= await query(collectionRef, where("uid", "==", uid), orderBy("createdAt", "desc"))
            }
            
            else{
                q = await query(collectionRef, orderBy("createdAt", "desc"))
            }

                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const docs = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                    
                    if(!cancelled) {
                        setDocuments(docs)
                        setLoading(false)
                    }
                }, (error) => {
                    console.log(error)
                    if(!cancelled) {
                        setError(error.message)
                        setLoading(false)
                    }
                })

                return () => unsubscribe() // Cleanup function

            } catch (error) {   
                console.log(error)
                if(!cancelled) {
                    setError(error.message)
                    setLoading(false)
                }
            }
        }
        loadData()

    }, [docCollection, search, uid, cancelled])

    // useEffect(() => {
    //     return () => setCancelled(true)
    // }, [])

    return { documents, loading, error }
}




