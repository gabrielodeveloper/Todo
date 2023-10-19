import { View, Text, Image } from 'react-native';
import { styles } from './styles';

import clipboarPng from '../../assets/clipboard.png';

export function EmptyTaskCard() {
  return (
    <View style={styles.container}>
    <Image source={clipboarPng} />
  <Text style={styles.textInfo}>
    Você ainda não tem tarefas cadastradas
  </Text>
  <Text style={styles.text}>
    Crie tarefas e organize seus itens a fazer
  </Text>
</View>
  )
}
