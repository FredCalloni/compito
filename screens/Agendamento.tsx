import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Agendamento() {

    const[name, setName] = React.useState('')
    const[cpf, setCPF] = React.useState('')
    const[born, setBorn] = React.useState('')
    const[cep, setCEP] = React.useState('')
    const[feeling, setFeeling] = React.useState('')

    function handleImpress(){
        console.log(name);
        console.log(cpf);
        console.log(born);
        console.log(cep);
        console.log(feeling);
      }

    return (
      <View style={styles.container}>
        <Text style={styles.text}> CADASTRO DE PACIENTE</Text>
        <TextInput style={styles.textinput} value={name} onChangeText={setName}>Nome</TextInput>
        <TextInput style={styles.textinput} value={cpf} onChangeText={setCPF}>CPF</TextInput>
        <TextInput style={styles.textinput} value={born} onChangeText={setBorn}>Nascimento</TextInput>
        <TextInput style={styles.textinput} value={cep} onChangeText={setCEP}>CEP</TextInput>
        <TextInput style={styles.textinput} value={feeling} onChangeText={setFeeling}>O que está sentindo?</TextInput>
        <Text style={styles.texto}> Será enviado um EMAIL com o boleto para o pagamento </Text>
        <TouchableOpacity style={styles.button}><Text>Enviar</Text></TouchableOpacity>
        <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEEEEE',
      justifyContent: 'center',
      color: '#707070',
    },
    text: {
      marginHorizontal: '22%',
      fontSize: 20,
    },
    texto: {
        marginHorizontal: '8%',  
      },
    textinput: {
      height: '4%',
      margin: '2%',
      borderWidth: 1,
      borderRadius: 6,
      padding: 7,
      marginHorizontal: '10%',
      borderColor: 'gray',
      backgroundColor: 'whitesmoke',
    },
    button: {
      height: '4%',
      margin: '2%',
      borderWidth: 1,
      borderRadius: 6,
      padding: 7,
      marginHorizontal: '35%',
      borderColor: 'black',
      backgroundColor: '#FEBABA',
      alignItems: 'center',
    },
  });
  