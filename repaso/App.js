/* Zona 1: Importaciones */ 
import React, { useState, useEffect } from 'react';
import {Alert,SafeAreaView,StyleSheet,Text,TextInput,Switch,TouchableOpacity,View,ImageBackground,} from 'react-native';

/* Zona 2: Pantalla de inicio */
function SplashScreen() {
  return (
    <ImageBackground
      source={require('./assets/inicio.jpg')}
      style={styles.fondo}
    >
      <View style={styles.splashOverlay}>
        <Text style={styles.splashTitle}>Bienvenido a mi aplicación</Text>
      </View>
    </ImageBackground>
  );
}
export default function App() {
  const [mostrarSplash, cambiarMostrarSplash] = useState(true);
  const [nombre, cambiarNombre] = useState('');
  const [correo, cambiarCorreo] = useState('');
  const [aceptaTerminos, cambiarAceptaTerminos] = useState(false);

  useEffect(function () {
    const tiempo = setTimeout(function () {
      cambiarMostrarSplash(false);
    }, 2000);
    return function () {
      clearTimeout(tiempo);
    };
  }, []);

  function mostrarAlerta() {
    if (nombre.trim() === '') {
      Alert.alert('Por favor escribe tu nombre');
      return;
    }

    if (correo.trim() === '') {
      Alert.alert('Por favor escribe tu correo');
      return;
    }

    if (aceptaTerminos === false) {
      Alert.alert('Debes aceptar los términos');
      return;
    }

    Alert.alert(
      'Registro exitoso',
      `Nombre: ${nombre},\n Email: ${correo}\n Bienvenido :D`
    );
  }

  if (mostrarSplash) {
    return <SplashScreen />;
  }

  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.fondo}
    >
      <SafeAreaView style={styles.overlay}>
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="white"
            onChangeText={cambiarNombre}
            value={nombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="white"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={cambiarCorreo}
            value={correo}
          />

          <View style={styles.filaSwitch}>
            <Text style={styles.textoSwitch}>Aceptar términos y condiciones</Text>
            <Switch
              value={aceptaTerminos}
              onValueChange={cambiarAceptaTerminos}
            />
          </View>

          <TouchableOpacity style={styles.boton} onPress={mostrarAlerta}>
            <Text style={styles.textoBoton}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
/* Zona 3: Estilos */
const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formulario: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  filaSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  textoSwitch: {
    color: '#fff',
    fontSize: 14,
  },
  boton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  splashOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    fontSize: 28,
    color: 'white',
  },
});
