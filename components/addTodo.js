import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');
    const changeHandler=(val)=>{
        setText(val)
    };

    return(
        <View>
            <View>
                <TextInput 
                style={styles.input}
                placeholder='add your todo here'
                onChangeText={changeHandler}
                />
                <Button title='Add ToDo' style={styles.btn} onPress={()=>submitHandler(text)} color='coral' />
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    input:{
        borderRadius: 12,
        borderColor:'black',
        padding:20,
        marginVertical:5,
        backgroundColor:'lightcyan',
        borderWidth:1,
        marginBottom:10
    }, 
    btn:{
        borderRadius:10,
        marginTop:5,
        color:'black',
        backgroundColor:'coral'
    }
})