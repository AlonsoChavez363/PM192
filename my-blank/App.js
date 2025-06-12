/* Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; /* Poner todos los componentes que vamos a utilzar */

const Texto=(props)=>{
  const {contenido}=props
  return(
    <text>{contenido}</text>
  )
}

/* Zona 2: Main(ejecutacion) */
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Texto contenido="Hola"></Texto>
      <Texto contenido="Mundo"></Texto>
      <Texto contenido="React_Native"></Texto>

      <Button title="Presioname!"> </Button>
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
