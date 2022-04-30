import React,{useState} from 'react';
import { StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';

export default props=>{

    const estilosBotoes=[estilos.btn]
    if(props.duplo){
        estilosBotoes.push(estilos.btnDuplo)
    }
    if(props.igual){
        estilosBotoes.push(estilos.btnIgual)
    }
    if(props.operacao){
        estilosBotoes.push(estilos.btnOperacao)
    }
    if(props.ac){
        estilosBotoes.push(estilos.btnAC)
    }
    if(props.bs){
        estilosBotoes.push(estilos.btnBS)
    }


    return(
  <TouchableHighlight
        onPress={props.aoClicar}
  >
      <Text style={estilosBotoes}>{props.label}</Text>
  </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    btn:{
        fontSize:30,
        height:Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'#000',
        color:'#fff',
        textAlign:'center'     
    },
    btnOperacao:{
        color:'#f00',
    },
    btnIgual:{
        color:'#f00',

    },
    btnAC:{
        color:'#f00',
    },
    btnBS:{
        color:'#f00',
    },
    btnDuplo:{
    width:(Dimensions.get('window').width/4)*2,
    }
   
});