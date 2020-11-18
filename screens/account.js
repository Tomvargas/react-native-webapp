import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Text, View } from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'


const account = (props) => {
    const [user,setuser]=useState({
        id:'',
        name: '',
        email:'',
        pass: ''
        })
    
    const getuser=async (id)=>{
        const userdb=firebase.db.collection('users').doc(id)
        const doc=await userdb.get();
        const user=doc.data();
        setuser({
            ...user,
            id: doc.id
        })
    }
    useEffect(() => { 
        getuser(props.route.params.userid);
    })
    return (
        <ScrollView>
            <ListItem>
                <Avatar rounded source={{ uri: 'https://www.alfabetajuega.com/wp-content/uploads/2019/08/dragon-ball-goku.jpg' }} />
                <ListItem.Content>
                    <ListItem.Title>name</ListItem.Title>
                    <ListItem.Subtitle>this is a short description</ListItem.Subtitle>
                </ListItem.Content>
                <Button title='Update user data' />
            </ListItem>
        </ScrollView>
    );
}

export default account