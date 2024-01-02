import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";


export default function RemoveBtn({pressHandler, prop}){
    return(
        <TouchableOpacity onPress={()=> pressHandler(prop.key)}  >
             <Text style={styles.btn}>Done</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
btn:{
   backgroundColor:'green',
   fontSize:20,
   width:65,
   height:35,
   textAlign:'center',
   borderRadius: 4,
   marginTop: 10,
   color:'white',
   paddingTop:4,
   marginLeft:230
},

});