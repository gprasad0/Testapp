import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Dashboard() {
  const age = useSelector((state: RootState) => state.user.age);
  const bodyType = useSelector((state: RootState) => state.user.bodyType);
  const gender = useSelector((state: RootState) => state.user.gender);
  const goal = useSelector((state: RootState) => state.user.goal);
  const height = useSelector((state: RootState) => state.user.height);
  const name = useSelector((state: RootState) => state.user.name);
  const weight = useSelector((state: RootState) => state.user.weight);
  const workoutExperience = useSelector(
    (state: RootState) => state.user.workoutExperience
  );
  const workoutLocation = useSelector(
    (state: RootState) => state.user.workoutLocation
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Text> Age: {age} </Text>
      <Text> Body Type: {bodyType} </Text>
      <Text> Gender: {gender} </Text>
      <Text> Goal : {goal} </Text>
      <Text> Height: {height} </Text>
      <Text> Name : {name} </Text>
      <Text> Weight : {weight} </Text>
      <Text> Workout Experience : {workoutExperience} </Text>
      <Text> Workout Location : {workoutLocation} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
