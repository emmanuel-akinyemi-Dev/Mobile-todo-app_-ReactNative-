import { useState } from "react";
import react from "react";
import { StyleSheet,Button, View,TextInput, Text } from "react-native";


export default function AddTodo({submitHandler}){
    const [imput, setImput] = useState("");

    const changeHandler = (dat) =>{
        setImput(dat)
      }
   
    return(
        <View>
       <TextInput style={styles.input} 
       onChangeText={changeHandler}
       placeholder="New todo..." />
     <Button onPress={()=>{submitHandler(imput)}} 
     title="Add todo"
     color='green'/>
     </View>
    )
};

  

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'white',
    },
    input:{
       
        height:40,
        borderWidth:1,
        borderColor:'gray',
        padding:8,
        borderRadius:8,
        borderStyle:"dotted",
        paddingHorizontal:8,
        paddingVertical:3,
        fontSize:18,
        marginBottom:10
      },
});