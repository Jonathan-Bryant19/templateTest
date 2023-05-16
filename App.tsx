import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [selectedNum, setSelectedNum] = useState<number | null>(null);

  const numbers = [1, 2, 3, 4];

  const onPressNum = (num: number) => {
    setSelectedNum(num);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {numbers.slice(0, 2).map((num) => (
          <TouchableOpacity key={num} style={styles.quadrant} onPress={() => onPressNum(num)}>
            <Text style={[styles.number, selectedNum === num && styles.selectedNumber]}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {numbers.slice(2).map((num) => (
          <TouchableOpacity key={num} style={styles.quadrant} onPress={() => onPressNum(num)}>
            <Text style={[styles.number, selectedNum === num && styles.selectedNumber]}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  quadrant: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  number: {
    fontSize: 50,
  },
  selectedNumber: {
    fontSize: 70,
  },
});

export default App;
