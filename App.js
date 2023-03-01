import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo="Lista de alunos" />
      <Header titulo="Lista de doscentes" />
      <Header titulo="Lista de desinteressados" />
      <View>
        <Flatlist
        data={estados}

      </View>
      <Text>Bem vindo ao React Native Matheus Guilbertih!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
