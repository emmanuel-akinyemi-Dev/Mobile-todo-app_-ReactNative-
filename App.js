import { useState } from 'react';
import { FlatList,  StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header'
import RemoveBtn from './components/RemoveBtn';
import TodoItem from './components/todoitem';



export default function App() {
 const [todos, setTodos]=useState([
  {text:'buy coffe', key:'1'},
  {text:'create an app', key:'2'},
  {text:'play the guitar', key:'3'},
 ]);

 const pressHandler =(key)=>{
  setTodos((prevTodos)=>{
    return prevTodos.filter(todos=>todos.key != key);
  });
 }

  return (
    <View style={styles.container}>
      <Header /> 
      <View style={styles.body}>
          {/* form */}
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item})=>(
           <View>
            <TodoItem  prop={item} /> 
            <RemoveBtn prop={item} pressHandler={pressHandler}/>
           </View>
          )}
           />
          
        </View>
      </View>
   </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    width:200,
    height:30,
    borderWidth:1,
    borderColor:'black',
    padding:8,
    borderRadius:8
  },
  body:{
     padding:40,
  },
  list:{
    marginTop:20,
  },
  text:{
      fontSize:40,
  },
});

