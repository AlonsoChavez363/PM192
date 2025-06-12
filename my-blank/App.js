/* Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; /* Poner todos los componentes que vamos a utilzar */

const Texto=(props)=>{
  const {chilldren}=props
  return(
    <Text>{chilldren}</Text>
  )
}


/* Zona 2: Main(ejecutacion) */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto> "Hola" </Texto>
      <Texto> "Mundo" </Texto>
      <Texto> "React Native" </Texto>
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
  },
});
