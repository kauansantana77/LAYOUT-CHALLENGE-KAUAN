import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default props=>{
    return(
    <View style={estilos.display}>
        <Text 
        style={estilos.textoDisplayOper}
        numberOflines={1}
        >{props.valor}
        </Text>
        <Text 
        style={estilos.textoDisplayRes}
        numberOflines={1}
        >{props.res}
        </Text>

    </View>
    )
}

const estilos = StyleSheet.create({
    display:{
     flex:1,
     padding:20,
     justifyContent:'center',
     alignItems:'flex-end',
     backgroundColor:'#fff',
     width:'100%'
    },
    textoDisplayRes:{
        fontSize:50,
        color:'#000'
    },
    textoDisplayOper:{
        fontSize:25,
        color:'#000'
    }


});