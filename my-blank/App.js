/* Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; /* Poner todos los componentes que vamos a utilzar */
import React, {useState} from 'react';

const Texto=({style})=>{
  const [contenido,setContenido]=useState('hola mundo React')
  const actualizarTexto=()=>{setContenido('Estado actualizado')}
  return(
    <Text style= {[styles.text, style]} onPress={actualizarTexto}>{contenido}</Text>
  )
}


/* Zona 2: Main(ejecutacion) */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}> </Texto>
      <Texto style={styles.purple}> </Texto>
      <Texto style={styles.pink}> </Texto>
      <Button title="Presioname"> </Button>
      <StatusBar style="auto" />
    </View>
  );
}


/* Zona 3: Estetica de la pagina */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text:{
    color: 'black',
    fontSize: 25,
    height:150,
    width:300,
  },
  red:{flex:1, backgroundColor:'red'},
  purple:{flex:2, backgroundColor:'purple'},
  pink:{flex:3, backgroundColor:'pink'},

});
