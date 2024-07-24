import React, { useState } from "react";

import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      setTask("");
    }
  };

  const removeTask = (taskKey) => {
    setTasks(tasks.filter((task) => task.key !== taskKey));
  };

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.container}>
        <Text style={styles.title}>To-Do List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter task"
            style={styles.input}
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity onPress={addTask} style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{itemData.item.value}</Text>
              <TouchableOpacity onPress={() => removeTask(itemData.item.key)}>
                <Ionicons
                  name="remove-circle-outline"
                  size={20}
                  color="#FF6347"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    padding: 15,
    backgroundColor: "rgba(242, 242, 242, 0.8)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  input: {
    width: "75%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 8,
    fontSize: 16,
  },
  addButton: {
    marginLeft: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: "100%",
  },
  listItemText: {
    fontSize: 16,
    color: "#333",
  },
});
