import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Expressoes } from '../../models';

// import { Container } from './styles';

export default function SRS() {
  const [dados, setDados] = useState([]);
  const [buscar, setBuscar] = useState(false);

  Expressoes.onChange(() => setBuscar(true));

  useEffect(() => {
    async function fetchData() {
      const consulta = await Expressoes.data();
      const treino = consulta.filter(expressao => {
        return expressao.proxtreino <= new Date();
      });
      setDados(treino);
      console.log(treino);
    }
    fetchData();
    console.log(dados);
    setBuscar(false);
  }, [buscar]);

  return (
    <View>
      <Text>Página de Repetição espaçada</Text>
    </View>
  );
}
