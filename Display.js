import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Display({ expressao, resultado }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.expressao}>{expressao}</Text>
      <Text style={estilos.resultado}>{resultado}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: '#333333',
    borderRadius: 10,
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  expressao: {
    fontSize: 24,
    color: '#FF69B4',
  },
  resultado: {
    fontSize: 32,
    color: '#FFFFFF',
  },
});
