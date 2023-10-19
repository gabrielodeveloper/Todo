import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';

import { styles } from "./styles";

export interface TaskProps {
  id: string;
  title: string;
  isConcluded: boolean
}

interface Props {
  task:TaskProps;
  onRemove: () => void;
  onChangeDone: (id: string) => void;
}

export function TaskCard({ task, onRemove, onChangeDone }: Props) {

  function handleTaskConcluded(id: string) {
    onChangeDone(id);
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={() => handleTaskConcluded(task.id)}
        >
      {
          task.isConcluded ? (        
            <AntDesign 
            name="checkcircle" 
            size={24} 
            color="#5E60CE" 
            />
          ) : (
            <Feather 
            name="circle" 
            size={24} 
            color="#4EA8DE" 
          />
          )
        }
        </TouchableOpacity>
      <Text style={task.isConcluded ? styles.titleDone : styles.title}>
          {task.title}
      </Text>
      <TouchableOpacity onPress={onRemove}>
      <Feather 
        name="trash-2" 
        size={24} 
        color="#808080" 
      />
      </TouchableOpacity>
    </View>
  )
}