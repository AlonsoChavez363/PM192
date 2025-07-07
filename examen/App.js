import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, ActivityIndicator, StyleSheet, Alert, ImageBackground, SafeAreaView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');
const API_KEY = 'aef31c1751c44d4eb22212445250707'; // Reemplaza con tu API Key de WeatherAPI

const FondoBienvenida = () => (
  <ImageBackground
    source={require('./assets/splash.jpg')}
    style={[styles.fondo, { width, height }]}
    resizeMode="cover"
  >
    <View style={styles.contenido}>
      <Text style={styles.titulo}>🌤 Bienvenido a la App del Clima</Text>
    </View>
  </ImageBackground>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const fetchSuggestions = async (text) => {
    if (text.length < 2) {
      setSuggestions([]);
      return;
    }
    setLoadingSuggestions(true);
    try {
      const res = await axios.get(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${text}`);
      setSuggestions(res.data);
    } catch (error) {
      console.log('Error en sugerencias:', error);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const handleCityChange = (text) => {
    setCity(text);
    fetchSuggestions(text);
  };

  const selectSuggestion = async (item) => {
    const fullName = `${item.name}, ${item.region}, ${item.country}`;
    setCity(fullName);
    setSuggestions([]);
    setLoading(true);
    try {
      const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${item.name}`);
      const data = res.data;

      const cityData = {
        id: Date.now(),
        name: fullName,
        temp: data.current.temp_c,
        description: data.current.condition.text,
      };

      if (weatherList.some(item => item.name.toLowerCase() === fullName.toLowerCase())) {
        Alert.alert('Ya agregaste esa ciudad.');
      } else {
        setWeatherList([...weatherList, cityData]);
        setCity('');
      }
    } catch (error) {
      console.log('❌ Error:', error);
      Alert.alert('No se pudo obtener el clima. Verifica la ciudad o tu conexión.');
    } finally {
      setLoading(false);
    }
  };

  const clearCities = () => {
    setWeatherList([]);
  };

  const deleteCity = (id) => {
    setWeatherList(weatherList.filter(item => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {showSplash ? (
        <FondoBienvenida />
      ) : (
        <ImageBackground
          source={require('./assets/fondo.jpg')}
          style={[styles.fondo, { width, height }]}
          resizeMode="cover"
        >
          <View style={styles.mainContent}>
            <Text style={styles.title}>🌤 App del Clima</Text>

            <View style={styles.cardContainer}>
              <TextInput
                style={styles.input}
                placeholder="Ingresa una ciudad, estado o país"
                value={city}
                onChangeText={handleCityChange}
              />

              {loadingSuggestions && <ActivityIndicator size="small" color="#0000ff" />}

              {suggestions.length > 0 && (
                <FlatList
                  data={suggestions}
                  keyExtractor={(_, i) => i.toString()}
                  style={styles.suggestionsList}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.suggestionItem}
                      onPress={() => selectSuggestion(item)}
                    >
                      <Text>{item.name}, {item.region}, {item.country}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              <TouchableOpacity style={styles.buttonBuscar} onPress={() => fetchSuggestions(city)}>
                <Text style={styles.buttonText}>Buscar Clima</Text>
              </TouchableOpacity>

              {loading && <ActivityIndicator size="large" color="#0000ff" style={{ margin: 10 }} />}

              <ScrollView style={styles.scroll}>
                {weatherList.map((city) => (
                  <View key={city.id} style={styles.card}>
                    <Text style={styles.cityName}>{city.name}</Text>
                    <Text style={styles.temp}>{city.temp}°C</Text>
                    <Text style={styles.desc}>{city.description}</Text>
                    <TouchableOpacity style={styles.buttonEliminar} onPress={() => deleteCity(city.id)}>
                      <Text style={styles.buttonText}>Eliminar</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>

              <TouchableOpacity style={styles.buttonLimpiar} onPress={clearCities}>
                <Text style={styles.buttonText}>Limpiar Ciudades</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fondo: { flex: 1 },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  cardContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  suggestionsList: {
    width: '100%',
    maxHeight: 150,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  buttonBuscar: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonEliminar: {
    backgroundColor: '#f97316',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonLimpiar: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scroll: {
    width: '100%',
    maxHeight: 250,
    marginVertical: 15,
  },
  card: {
    backgroundColor: '#e0f2fe',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  cityName: { fontSize: 20, fontWeight: 'bold' },
  temp: { fontSize: 24, fontWeight: 'bold', marginVertical: 5 },
  desc: { fontStyle: 'italic', color: '#555' },
});