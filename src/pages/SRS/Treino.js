import React, { useState, useEffect } from 'react';
import { Title, Text, Button } from 'react-native-paper';

import { Expressoes } from '../../models';

import { Container, ContainerTreino, BotoesTreino } from './styles';

export default function SRS() {
  const [palavra, setPalavra] = useState('');
  const [buscar, setBuscar] = useState(false);
  const [respondido, setRespondido] = useState(false);
  const [treinado, setTreinado] = useState(false);

  const handleAcertou = () => {
    const novoTreino = new Date();
    let caixa = palavra.nivel;
    switch (caixa) {
      case '0':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '1';
        break;
      case '1':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '2';
        break;
      case '2':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '3';
        break;
      case '3':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '4';
        break;
      case '4':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '5';
        break;
      case '5':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '5';
        break;
      default:
        break;
    }
    Expressoes.update(palavra.id, { proxtreino: novoTreino, nivel: caixa });

    setRespondido(false);
    setBuscar(true);
  };

  const handleErrou = () => {
    const novoTreino = new Date();
    let caixa = palavra.nivel;
    switch (caixa) {
      case '0':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '1';
        break;
      case '1':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '2';
        break;
      case '2':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '3';
        break;
      case '3':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '4';
        break;
      case '4':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '5';
        break;
      case '5':
        novoTreino.setDate(new Date().getDate() + 10);
        caixa = '5';
        break;
      default:
        break;
    }
    Expressoes.update(palavra.id, { proxtreino: novoTreino, nivel: caixa });

    setRespondido(false);
    setBuscar(true);
  };

  useEffect(() => {
    async function fetchData() {
      const consulta = await Expressoes.data().filter(expressao => {
        return expressao.proxtreino <= new Date();
      });
      if (consulta.length == 0) {
        setTreinado(true);
      }
      setPalavra(consulta[0]);
    }
    fetchData();
    setBuscar(false);
  }, [buscar]);

  return (
    <>
      {treinado ? (
        <Container>
          <Text>Parabens, você já treinou todas as palavras!</Text>
        </Container>
      ) : (
        <ContainerTreino>
          <Title>{palavra.expressao}</Title>
          {respondido ? (
            <>
              <Text>{palavra.traducao}</Text>
              <BotoesTreino>
                <Button
                  mode="outlined"
                  onPress={() => handleErrou()}
                  icon="window-close"
                  color="#b00"
                >
                  Errou
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => handleAcertou()}
                  icon="check"
                  color="#0b0"
                >
                  Acertou
                </Button>
              </BotoesTreino>
            </>
          ) : (
            <>
              <Text />

              <Button
                mode="outlined"
                onPress={() => {
                  setRespondido(true);
                }}
                icon="translate"
                color="#333"
              >
                Mostrar tradução
              </Button>
            </>
          )}
        </ContainerTreino>
      )}
    </>
  );
}
