import React, {useEffect, useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from "../database/firebase";


const login = (props) => {
    const [state, setState] = useState({//instance variables for each data input
        email: '',
        pass: ''
    })
    const getuserdata = (name, value) => {// function to register input value in variables and reserve others variables each time
        setState({ ...state, [name]: value })
    }
    const [users,setUser]=useState([])
    useEffect(()=>{
        firebase.db.collection("users").onSnapshot((querySnapshot)=>{
            const users=[];
            querySnapshot.docs.forEach((doc)=>{
                const {name, email, pass}=doc.data();
                users.push({
                    id: doc.id,
                    name,
                    email,
                    pass
                })
            });
            setUser(users);
        });
    },[]);
    const valid=()=>{
        if(state.email===""||state.pass===""){
            alert("Debe llenar el formulario")
        }else{
            users.map((user)=>{
                if(state.email===user.email && state.pass===user.pass){
                    const txt = "Hello "+user.name
                    alert(txt)
                    props.navigation.navigate('account',{userid: user.id})
                    
                }
                
            })
        }
    }
    return (
        <ScrollView style={css.containers}> 
            <View>
                <TextInput style={css.inputs} placeholder="E-mail" onChangeText={(value) => getuserdata('email', value)}/>
            </View>
            <View>
                <TextInput style={css.inputs} placeholder="Password" onChangeText={(value) => getuserdata('pass', value)}/>
            </View>
            <Button title="SINGIN" onPress={()=> valid()}/>
        </ScrollView>        
    )
}

const css = StyleSheet.create({
    containers: {
        flex: 1,
        margin: 30,
    },

    inputs: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },

    btn: {

    }

})
export default login