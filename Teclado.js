import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export default function Teclado({ manipularPressao, calcularResultado, limparTudo, apagarUltimo }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.linha}>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('(')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>(</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao(')')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>)</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botaoRosa} onPress={limparTudo} underlayColor="#ff1493">
          <Text style={estilos.textoBotao}>C</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botaoRosa} onPress={apagarUltimo} underlayColor="#ff1493">
          <Text style={estilos.textoBotao}>⌫</Text>
        </TouchableHighlight>
      </View>
      <View style={estilos.linha}>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('1')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>1</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('2')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>2</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('3')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>3</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botaoRosa} onPress={() => manipularPressao('+')} underlayColor="#ff1493">
          <Text style={estilos.textoBotao}>+</Text>
        </TouchableHighlight>
      </View>
      <View style={estilos.linha}>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('4')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>4</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('5')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>5</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('6')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>6</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botaoRosa} onPress={() => manipularPressao('-')} underlayColor="#ff1493">
          <Text style={estilos.textoBotao}>-</Text>
        </TouchableHighlight>
      </View>
      <View style={estilos.linha}>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('7')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>7</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('8')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>8</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('9')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>9</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botaoRosa} onPress={() => manipularPressao('*')} underlayColor="#ff1493">
          <Text style={estilos.textoBotao}>*</Text>
        </TouchableHighlight>
      </View>
      <View style={estilos.linha}>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('0')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>0</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botao} onPress={() => manipularPressao('.')} underlayColor="#3a3a3a">
          <Text style={estilos.textoBotao}>.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botaoRosa} onPress={calcularResultado} underlayColor="#ff1493">
          <Text style={estilos.textoBotao}>=</Text>
        </TouchableHighlight>
        <TouchableHighlight style={estilos.botaoRosa} onPress={() => manipularPressao('/')} underlayColor="#ff1493">
          <Text style={estilos.textoBotao}>/</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: '90%',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Reduzir espaçamento entre linhas
  },
  botao: {
    flex: 1,
    padding: 20,
    margin: 2, // Reduzir espaçamento entre botões
    backgroundColor: '#4f4f4f',
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoRosa: {
    flex: 1,
    padding: 20,
    margin: 2, // Reduzir espaçamento entre botões
    backgroundColor: '#FF69B4',
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 20,
  },
});
