import React, { useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet, View} from 'react-native'
import firebase from '../database/firebase'
import {ListItem, Avatar} from 'react-native-elements'

const details = (props) => {
    const [users, setUser]=useState([])//declare user and setUser in const for get data in firebase collection and show in UI
    useEffect(()=>{
        firebase.db.collection("users").onSnapshot((querySnapshot)=>{//get collection in firebase
            const users = [];
            querySnapshot.docs.forEach((doc) => {//get each object (data) in collection users
                const {name,email,pass}= doc.data();//get data in firebase for variables name, email, pass
                users.push({//set data in firebase in variables and det id from firebase
                    id: doc.id,
                    name, 
                    email,
                    pass
                })
            });
            setUser(users);//set data in list
        });
    }, []);
    return(
        <ScrollView style={css.containers}>
            <Button style={css.btn} title="Register" onPress={()=> props.navigation.navigate('register')}/>
            <Button style={css.btn} title="Login" onPress={() => props.navigation.navigate('login')} />
           
            {users.map((user) => {
                
                return (
                    <ListItem bottomDivider onPress={()=> alert(user.pass)} key={user.id}>
                        
                        <Avatar rounded source={{ uri: 'https://www.alfabetajuega.com/wp-content/uploads/2019/08/dragon-ball-goku.jpg'}}/>
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                );
            })}

        </ScrollView>
        
    );
}

const css = StyleSheet.create({
    containers: {
        flex: 1,
        margin: 30,
    },
    btn:{
        margin:20,
    }
})

export default details