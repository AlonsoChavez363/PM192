/* Zona 1: Importaciones */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

/* Zona 2: Main(ejecucion) */
export default function App() {
  const [nombre, setNombre] = useState('');
  const [nombreExtra, setNombreExtra] = useState('');
  const [correo, setCorreo] = useState('');

  const handleNombreExtra = (text) => {
    // Solo números
    const soloNumeros = text.replace(/[^0-9]/g, '');
    setNombreExtra(soloNumeros);
  };

  const handleCorreo = (text) => {
    setCorreo(text);
  };

  const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Por favor escribe algo');
      alert('Escribe algo');
    } else {
      Alert.alert('Bienvenida', `Hola ${nombre}, bienvenido a nuestra app :D`);
      alert('Hola ' + nombre + ' bienvenid@ a nuestra app :D');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresa tu nombre:</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre :"
        keyboardType="numeric"
        onChangeText={setNombre}
        value={nombre}
      />

      <Button title="Enviar" onPress={mostrarAlerta} />

      {/* Campo extra numérico */}
      <Text style={styles.text}>Número extra:</Text>
      <TextInput
        style={styles.input}
        placeholder="Solo números"
        keyboardType="numeric"
        onChangeText={handleNombreExtra}
        value={nombreExtra}
      />

      {/* Campo de correo con validación de formato */}
      <Text style={styles.text}>Correo electrónico:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: ejemplo@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={handleCorreo}
        value={correo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
});
