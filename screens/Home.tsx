import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native-stack';
import Agendamento  from '../screens/Agendamento';
import Dados from '../screens/Dados';

export default function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.consultorio}>CONSULTÓRIO JAIMINHO</Text>
        <Text style={styles.text}>O que desejas fazer hoje?</Text>
        <TouchableOpacity onPress={() => useNavigation.navigate(Agendamento)} style={styles.button}><Text>Marcar consulta</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => useNavigation.navigate(Dados)} style={styles.button}><Text>Dados dos pacientes</Text></TouchableOpacity>
        <Image source={require("../images/jaiminho.png")} />
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
    consultorio: {
      marginHorizontal: '28%',
      fontSize: 16,
    },
    text: {
      marginHorizontal: '30%',
    },
    button: {
      height: '4%',
      margin: '2%',
      borderWidth: 1,
      borderRadius: 6,
      padding: 7,
      marginHorizontal: '30%',
      borderColor: 'gray',
      backgroundColor: 'whitesmoke',
    }
  });
  