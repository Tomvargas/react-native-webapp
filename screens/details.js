import React, { useEffect, useState } from 'react'
import {View,Text} from 'react-native'

const details = () => {
    const [user, setUser]=useState([])//declare user and setUser in const for get data in firebase collection and show in UI
    useEffect(()=>{
        firebase.db.collection('users').onSnapshot(querySnapshot=>{//get collection in firebase
            querySnapshot.docs.forEach(doc => {//get each object (data) in collection users
                console.log(doc.data())
            });
        })
    }, [])
    return(
        <View>
            <Text>
                Lista de usuarios
            </Text>

        </View>
        
    )
}

export default details