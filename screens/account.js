import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Text, View } from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'

const account = (props) => {
    
    return (
        <ScrollView>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>Hello</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </ScrollView>
    );
}

export default account