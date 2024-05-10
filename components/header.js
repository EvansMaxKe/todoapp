import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>ToDo Lists</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:30,
        backgroundColor:'coral',

    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        color:'white',
        fontSize:20
    },
});