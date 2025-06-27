/* Zone 1: Importaciones */
import React, {StatusBar} from 'expo-status-bar';
import React, { useState, useEffect, use } from 'react';
import {Alert,SafeAreaView,StyleSheet,Switch,Text,TouchableOpacity,View,Image,ImageBackground, ScrollView, TextInput} from 'react-native';

/* Zona 2: Splash Screen */
const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.fondo}
    >
      <View style={styles.splashOverlay}>
        <Text style={styles.splashTitle}>Este es el Splash Screen</Text>
      </View>
    </ImageBackground>
  );
};

/* Zona 3: App Principal */
export default function App() {
  /* Funciones equipo de polo */
/* Funcion para ver los nombres que vamos a utilizar */
const [nombres, setNombres]= useState([
  'Alonso', 'Mariano', 'Kevin', 'Mario', 'Yahir', 'Miguel'
]);
/* Funcion para actualizar la lista con un nuevo hombre */
const [nuevoNombre, setNuevoNombre] = useState('');
/* Funciones que sirven para obtener la psocion que va a tener el scrollview */
const [contenidoHeight, setcontenidoHeight] = useState(0);
const [scrollY, setScrollY] = useState(0);
/* Funcion personalizada para que la barra se adapte al contenedor */
const [bandleScroll] = event => {
  scrollY(event.nativeEvent.contentOffset.y)
}
/* Funcion para agregar un nombre */
const agregarNombre =() =>{
  const nombreTrim = nuevoNombre.trim();
  if(nombreTrim.length > 0){
    setNombres([...nombres, nombreTrim]);
    setNuevoNombre('');
  }
}
  // Estado para controlar splash y el resto de la app
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Pase de lista</Text>
        <View style = {styles.inputRow}>
          <TextInput style={styles.input}
          placeholder="Nuevo Nombre"
          placeholderTextColor="#888"
          value={nuevoNombre}
          onChangeText={setNuevoNombre}
          onSubmitEditing={agregarNombre}
          returnKeyType="done">
          </TextInput>
          <TouchableOpacity style = {styles.btnAgregar} onPress={agregarNombre}>
            <Text style = {styles.btnAgregar}>agregar</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.scrollWrapper}
        onLayout={(event) => setScrollHeight(event.nativeEvent.layout.height)}
        ></View>
        <ScrollView style={styles.scrollArea}
        onContentSizeChange={(w,h) => setcontenidoHeight(h)}
        onScroll={handScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator = {false}
        >
          {nombres.map((nombres, index) =>(
            <View key={index} style = {styles.item}>
              <Text style={styles.texto}>{nombre}</Text>
            </View>
          ))}
        </ScrollView>

        {contenidoHeight > ScrollHeight && (
          <View style={[styles.scrollBar, {height: scollbarHeight, top: scrollbarPosition}]}></View>
        )}
        

    </View> 
    
  );
}

/* Zone 4: Estilos */
const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: 'cover',
  },
  splashOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // oscurecer imagen splash
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  titulo: {
    frontSize:24,
    fontWeight: 'bold',
    color: '#012677',
    marginBottom: 15,
    textAlign: 'center'

  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: '#666666',
    borderRadius: 10,
    paddingHorizontal: 15,
    frontSize: 16,
    height: 45,
    marginRight: 10,
  },
  btnAgregar: {
    backgroundColor: '#012677',
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  scrollWrapper: {
    position: 'relative',
    height: 500,
  },
  scrollArea: {
    backgroundColor: '#012677',
    borderRadius: 10,
    padding: 10,
    height: 500,
    borderWidth: 1,
    borderColor: "#f76f6d"
  },
  scrollBar: {
    position: 'absolute',
    width: 8,
    right: 2,
    backgroundColor: '#000000',
    borderRadius: 3,
  },
});
