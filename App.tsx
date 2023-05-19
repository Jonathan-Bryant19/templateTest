import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const App = () => {
  const [selectedNum, setSelectedNum] = useState<number | null>(null);
  const position = useSharedValue(0);

  const numbers = [1, 2, 3, 4];

  const onPressNum = (num: number) => {
    console.log(num);
    setSelectedNum(num);
  };

  const onCorrectAnswer = () => {
    console.log('Correct!');
    // We'll increment the score here later
  };

  const onIncorrectAnswer = () => {
    console.log('Incorrect!');
    // We'll show a red 'X' here later
  };

  const flingGestureUp = Gesture.Fling()
    .direction(Directions.UP)
    .onStart(() => {
      onCorrectAnswer();
    });

  const flingGestureDown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart(() => {
      onIncorrectAnswer();
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: position.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {numbers.slice(0, 2).map((num) => (
          <GestureDetector gesture={flingGestureUp} key={`${num}-up`}>
            <GestureDetector gesture={flingGestureDown}>
              <Animated.View style={[styles.quadrant, animatedStyle]} onTouchStart={() => onPressNum(num)}>
                <Text style={[styles.number, selectedNum === num && styles.selectedNumber]}>{num}</Text>
              </Animated.View>
            </GestureDetector>
          </GestureDetector>
        ))}
      </View>
      <View style={styles.row}>
        {numbers.slice(2).map((num) => (
          <GestureDetector gesture={flingGestureUp} key={`${num}-up`}>
            <GestureDetector gesture={flingGestureDown}>
              <Animated.View style={[styles.quadrant, animatedStyle]} onTouchStart={() => onPressNum(num)}>
                <Text style={[styles.number, selectedNum === num && styles.selectedNumber]}>{num}</Text>
              </Animated.View>
            </GestureDetector>
          </GestureDetector>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 100,
  },
});

export default App;
