import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoText }]);
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a todo"
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
        />
        <Button title="Add" onPress={handleAddTodo} />
      </View>
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <Text style={styles.todoText}>{item.text}</Text>
            <Button
              title="Delete"
              onPress={() => handleDeleteTodo(item.id)}
              color="#ff0000"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  list: {
    flex: 1,
    marginBottom: 16,
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
  },
  todoText: {
    flex: 1,
    marginRight: 8,
  },
});

export default App;
