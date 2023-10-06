import React from 'react';
import { View, Text, FlatList } from 'react-native';
import  Agendamento  from '../screens/Agendamento';


const nomes = ['Marcelinho de Bangu', '124356768', '12/02/2005', 'rocinha', '28',
]


export function Dados() {
  return (
    <View>
      <Text>Dados da consulta</Text>
      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(_item, index) => index.toString()}
      />

    </View>
  );
}