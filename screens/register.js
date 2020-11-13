import React, {useState} from 'react'
import { View, TextInput, Button, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'
const register = () => {
    //<>

    const [state, setState]=useState({
        name: '',
        email:'',
        pass:''
    })

    const getuserdata=(name,value)=>{
        setState({...state, [name]:value})
    }

    const adduser= async () =>{
        //console.log(state)
        if(state.name==="" || state.email==="" || state.pass===""){
            alert("Debe llenar todos los campos")
        }else{
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                pass: state.pass
            })
            alert("Usuario registrado.")
        }
    }

    return (
        <ScrollView style={css.containers}>
            <View>
                <TextInput style={css.inputs} placeholder="User name" onChangeText={(value)=> getuserdata('name',value)}/>
            </View>
            <View>
                <TextInput style={css.inputs} placeholder="E-mail" onChangeText={(value) => getuserdata('email', value)}/>
            </View>
            <View>
                <TextInput style={css.inputs} placeholder="Password" onChangeText={(value) => getuserdata('pass', value)}/>
            </View>
            <View>
                <Button style={css.btn} title="Register" onPress={() => adduser()}/>
            </View>
        </ScrollView>
    )
}

const css=StyleSheet.create({
    containers: {
        flex:1,
        margin:30,
    },

    inputs: {
        flex: 1,
        padding: 0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc',
    },

    btn: {
        
    }
    
})

export default register