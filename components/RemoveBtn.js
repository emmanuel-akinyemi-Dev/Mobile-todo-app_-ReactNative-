import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";


export default function RemoveBtn({pressHandler, prop}){
    return(
        <TouchableOpacity onPress={()=> pressHandler(prop.key)}  >
             <Text style={styles.btn}>delete</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
btn:{
   backgroundColor:'green',
   fontSize:20,
   width:60,
   height:30,
   textAlign:'center',
   borderRadius: 10,
   marginTop: 10,
},

});