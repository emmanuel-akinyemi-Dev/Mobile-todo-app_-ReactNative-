import react from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Header(){
    return(
        <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
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
header:{
    height:60,
    paddingTop:15,
    backgroundColor:'green',
    marginTop:25,},
});