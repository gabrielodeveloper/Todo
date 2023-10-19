import { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

import { TaskCard, TaskProps } from "../components/TaskCard";

import {styles} from './styles';

import logoPng from '../assets/logo.png';
import { EmptyTaskCard } from "../components/EmptyTaskCard";

export function Home() {
  const [tasks, setTasks ] = useState<TaskProps[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleAddTask(title: string) {
    const taskAlreadExists = tasks.find(task => task.title === title )

      if(taskAlreadExists) {
        return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma tarefa com o mesmo nome');
      }

      if(title === '') {
        return Alert.alert('Erro', 'O campo de texte é obrigatório.')
      }
    
      const newTask = {
        id: String(uuid.v4()),
        title,
        isConcluded: false
      }

    setTasks(prevState => [...prevState, newTask]);
    setTaskName('');
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Remover', 'Deseja remover está task?', [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleToggleTaskDone(id: string) {
    const updateTask = tasks.map(task => ({...task}));
    const taskfound = updateTask.find(item => item.id === id);

    if(!taskfound) return;
    
    taskfound.isConcluded = !taskfound.isConcluded
    setTasks(updateTask)
  }

  function countTaskDown() {
      let count = 0;

     tasks.map(task => {
       if(task.isConcluded === true) {
        count += 1;
       }
     });

     return count;
  }

  const totalTasksCreated = tasks.length;
  const totalTasksDone = countTaskDown();
    
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoPng} />
      </View>
   <View style={styles.content}>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity 
          style={styles.buttonAdd}
          onPress={() => handleAddTask(taskName)}
        >
        <Feather 
          name="plus-circle" 
          size={24} 
          color="#FFF" 
        />
        </TouchableOpacity>
      </View>


      <View style={styles.countTask}>
        <View style={styles.countTaskCreated}>
          <Text style={styles.textTaskCreated}>
            Criadas
          </Text>
          <View style={styles.numberTask}>
            <Text style={styles.textNumberTask}>
              {tasks.length > 0 ? totalTasksCreated : '0'}
            </Text>
          </View>
        </View>

        <View style={styles.countTaskCreated}>
          <Text style={styles.textTaskConcluded}>
          Concluídas
          </Text>
          <View style={styles.numberTask}>
            <Text style={styles.textNumberTask}>
            {tasks.length > 0 ? totalTasksDone : '0'}
            </Text>
          </View>
        </View>
      </View>

        <FlatList 
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
          <TaskCard 
            task={item} 
            onRemove={() => handleRemoveTask(item.id)}
            onChangeDone={handleToggleTaskDone}
          />
        } 
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyTaskCard />
          )}
        />

      </View>
    </View>
  )
}