import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

const App = () => {
  // State to manage the counter value
  const [count, setCount] = useState(0);

  // States to manage input values for increment and decrement
  const [incrementValue, setIncrementValue] = useState('');
  const [decrementValue, setDecrementValue] = useState('');

  // State to manage history of changes
  const [history, setHistory] = useState([]);

  // Function to handle increment by a specific number
  const increment = () => {
    const value = parseInt(incrementValue);
    if (!isNaN(value)) {
      setCount(count + value);
      updateHistory(`Incremented by ${value}`);
    }
  };

  // Function to handle decrement by a specific number
  const decrement = () => {
    const value = parseInt(decrementValue);
    if (!isNaN(value)) {
      setCount(count - value);
      updateHistory(`Decremented by ${value}`);
    }
  };

  // Function to reset the counter
  const resetCounter = () => {
    setCount(0);
    updateHistory(`Counter reset`);
  };

  // Function to reset input fields
  const resetFields = () => {
    setIncrementValue('');
    setDecrementValue('');
    updateHistory(`Fields reset`);
  };

  // Function to add action to history
  const updateHistory = action => {
    setHistory(prevHistory => [
      ...prevHistory,
      {key: `${prevHistory.length + 1}`, action},
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enhanced Counter App</Text>

      {/* Display the current counter value */}
      <Text style={styles.counter}>Count: {count}</Text>

      {/* Increment section */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number to increment"
        value={incrementValue}
        onChangeText={value => setIncrementValue(value)}
      />
      <Button title="Increment by number" onPress={increment} />

      {/* Decrement section */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number to decrement"
        value={decrementValue}
        onChangeText={value => setDecrementValue(value)}
      />
      <Button title="Decrement by number" onPress={decrement} />

      {/* Reset counter and reset fields buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Reset Counter" onPress={resetCounter} />
        <Button title="Reset Fields" onPress={resetFields} />
      </View>

      {/* History section */}
      <Text style={styles.historyTitle}>History:</Text>
      <FlatList
        data={history}
        renderItem={({item}) => (
          <Text style={styles.historyItem}>{item.action}</Text>
        )}
      />
    </View>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  historyItem: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default App;
