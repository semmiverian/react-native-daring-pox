import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const Todo = (props) => {
  const [input, setInput] = useState('Masukkan todo anda')
  return (
    <View style={styles.container}>
     <View style={
      { backgroundColor: 'red', flex: 4, width: '100%', alignItems: 'center', justifyContent: 'center' }
     }>
       <Text style={
         {
           color: 'white', fontSize: 24         }
       }>List Todo nya</Text>

       <Button
          title="Touch me mas"
          onPress={() => props.navigation.push('TodoDetail')}
        />
     </View>

     <View style={
      { backgroundColor: 'blue', flex: 2, width: '100%', alignItems: 'center', justifyContent: 'center'}
     }>
       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, color: 'white'}}
        onChangeText={(text) => setInput(text)}
        value={input}
      />
     </View>
    </View>
  );
}

Todo.navigationOptions = {
  title: 'Todo'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAku: {
    color: 'red',
    fontSize: 23
  }
});

export default Todo
