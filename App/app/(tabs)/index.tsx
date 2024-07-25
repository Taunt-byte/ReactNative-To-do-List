import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 40, textAlign:"center",}}>Lista de Tarefas</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Qual a boa de hoje?"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 30}}>
        {text
          .split(' ')
          .join(' ')}
      </Text>
    </View>
  );
};
