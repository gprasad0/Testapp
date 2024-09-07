// Counter.tsx
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./CounterSlice";
import { RootState } from "./store"; // Import RootState type

export function Counter() {
  // Specify the type for state with RootState
  const count = useSelector((state: RootState) => state.counter.value); // Get the current count from the Redux store
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment by 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
