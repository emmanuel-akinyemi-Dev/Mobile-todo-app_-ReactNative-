import { useState } from 'react';
import { FlatList,  StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header'
import RemoveBtn from './components/RemoveBtn';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodos'



export default function App() {
 const [todos, setTodos]=useState([
  {text:'buy coffe', key:'3'},
  {text:'create an app', key:'2'},
  {text:'play the guitar', key:'1'},
 ]);


 const pressHandler =(key)=>{
  setTodos((prevTodos)=>{
    return prevTodos.filter(todos=>todos.key != key);
  });
 };

//  function keyVal(todos){
//   if(todos.lenght >= 0){
//     const lastNumber = parseInt(todos[0].key)
//     return key = (lastNumber + 1).toString()
//   }
//   else{
//     return key = 1
//   }
 
 //}
 const submitHandler =(imput)=>{
  setTodos((prevTodos)=>{
    return [
      {text:imput, key:(Math.random()+0.2).toString()},
      ...prevTodos
    ]
  })
 }

  return (
    <View style={styles.container}>
      <Header /> 
      <View style={styles.body}>
          {/* form */}
        <AddTodo submitHandler={submitHandler} />
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

