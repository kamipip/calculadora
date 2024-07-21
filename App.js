import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Display from './Display';
import Teclado from './Teclado';

export default function App() {
  const [expressao, definirExpressao] = useState("");
  const [resultado, definirResultado] = useState("");

  const manipularPressao = (valorBotao) => {
    definirExpressao(expressao + valorBotao);
  };

  const calcularResultado = () => {
    try {
      definirResultado(eval(expressao).toString());
    } catch (erro) {
      definirResultado("Erro");
    }
  };

  const limparTudo = () => {
    definirExpressao("");
    definirResultado("");
  };

  const apagarUltimo = () => {
    definirExpressao(expressao.slice(0, -1));
  };

  return (
    <View style={estilos.container}>
      <Display expressao={expressao} resultado={resultado} />
      <Teclado 
        manipularPressao={manipularPressao} 
        calcularResultado={calcularResultado} 
        limparTudo={limparTudo} 
        apagarUltimo={apagarUltimo} 
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});

