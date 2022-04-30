import React, {useState} from 'react';
import{SafeAreaView, StyleSheet, View, Text} from 'react-native'
import Display from './components/Display'
import Btn from './components/Botão'

let estados={
  valorTela:'',
  resultado:0,
  operado:false,
  ponto:false
}

export default function App(){

const [vTela, setvTela]=useState(estados.valorTela)
const[vRes, setvRes]=useState(estados.resultado)

const adicionarDigito=(d)=>{

  estados.valorTela=estados.valorTela+d
  setvTela(estados.valorTela)
  setvRes(estados.resultado)
  estados.operado=false
}

const limparTela=()=>{
  estados={
    valorTela:'',
    resultado:0,
    operado:false,
    ponto:false
}
  setvTela(estados.valorTela)
  setvRes(estados.resultado)
}

const opera=(d)=>{
if(d=='AC'){
  limparTela()
  return
}
if(d=='BS'){
  const vt=vTela.substring(0,(vTela.length-1))
  setvTela(estados.valorTela)
  return
  }
  try{
    estados.resultado=eval(estados.valorTela)
    estados.operado=true
    setvRes(estados.resultado)
  } catch{
    estados.resultado='ERRO'
    estados.operado=true
    setvRes(estados.resultado)
  }

}



return(
  <SafeAreaView style={styles.conteiner}>
    <Text>Calculadora - Kauan Santana</Text>
    <Display valor={vTela} res={vRes}/>
    <View style ={styles.botoes}>
    <Btn label ="AC" ac aoClicar={()=>{opera("AC")}}></Btn>
      <Btn label ="(" aoClicar={()=>{adicionarDigito("(")}}></Btn>
      <Btn label =")" aoClicar={()=>{adicionarDigito(")")}}></Btn>
      <Btn label ="/" operacao aoClicar={()=>{adicionarDigito("/")}}></Btn>
      <Btn label ="7" aoClicar={()=>{adicionarDigito("7")}}></Btn>
      <Btn label ="8" aoClicar={()=>{adicionarDigito("8")}}></Btn>
      <Btn label ="9" aoClicar={()=>{adicionarDigito("9")}}></Btn>
      <Btn label ="*" operacao aoClicar={()=>{adicionarDigito("*")}}></Btn>
      <Btn label ="4" aoClicar={()=>{adicionarDigito("4")}}></Btn>
      <Btn label ="5" aoClicar={()=>{adicionarDigito("5")}}></Btn>
      <Btn label ="6" aoClicar={()=>{adicionarDigito("6")}}></Btn>
      <Btn label ="-" operacao aoClicar={()=>{adicionarDigito("-")}}></Btn>
      <Btn label ="1" aoClicar={()=>{adicionarDigito("1")}}></Btn>
      <Btn label ="2" aoClicar={()=>{adicionarDigito("2")}}></Btn>
      <Btn label ="3" aoClicar={()=>{adicionarDigito("3")}}></Btn>
      <Btn label ="+" operacao aoClicar={()=>{adicionarDigito("+")}}></Btn>
      <Btn label ="0" aoClicar={()=>{adicionarDigito("0")}}></Btn>
      <Btn label ="." aoClicar={()=>{adicionarDigito(".")}}></Btn>
      <Btn label ="<-"bs aoClicar={()=>{opera("BS")}}></Btn>
      <Btn label ="=" igual aoClicar={()=>{opera("=")}}></Btn>
      </View>
  </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  botoes:{
    flexDirection:"row",
    flexWrap:"wrap"
  }
});