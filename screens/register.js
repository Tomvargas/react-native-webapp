import React, {useState} from 'react'
import { View, TextInput, Button, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'
const register = (props) => {//get a props (screens to be called)
    //<>

    const [state, setState]=useState({//instance variables for each data input
        name: '',
        email:'',
        pass:''
    })

    const getuserdata=(name,value)=>{// function to register input value in variables and reserve others variables each time
        setState({...state, [name]:value})
    }

    const adduser= async () =>{// init the function async mode for firebase connection
        
        if(state.name==="" || state.email==="" || state.pass===""){//instruction for fill all inputs in login form
            alert("Debe llenar todos los campos")
        }else{
            try {
                await firebase.db.collection('users').add({//call callection named users in firebase and add variables in satate
                    name: state.name,
                    email: state.email,
                    pass: state.pass
                })
                alert("Usuario registrado.")
                props.navigation.navigate('details');//call details screen
            } catch (error) {
               
            }
            
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