import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({prop}){

    return(
        <View>
            <Text style={styles.items}>{prop.text}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    items:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:"dashed", 
        borderRadius:10,
    },

    text:{

    }
    

})