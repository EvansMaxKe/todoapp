import { useState } from 'react';
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback,Keyboard, Alert, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header  from "./components/header";
import TodoItem  from "./components/todoItem";
import AddTodo from './components/addTodo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {
  const[todos, setTodos]= useState([
    {text: 'learn react', key:'1'},
    {text: 'go to skating', key: '2'},
    {text: 'go fishing', key:'3'}
  ]);

  const pressHandler = (key) =>{
    setTodos((prevtodos)=>{
      return prevtodos.filter(todo => todo.key != key)
    })
  }
  const submitHandler=(text)=>{
    if (text.length > 3) {
      setTodos((prevtodos)=>{
        return [
          {text:text, key:Math.random().toString()},
          ...prevtodos
        ]
      })
    }
    else{
      Alert.alert('OOPS!','todo must be 3 chars long', [
        {text: 'understood', onPress: ()=>console.log('alert closed')}
      ]);
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
content:{
  padding:40,
  backgroundColor:'lightblue',
  flex:1,
},
list:{
  marginTop:20,
  flex:1,
}
});
