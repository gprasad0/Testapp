import { useRouter } from "expo-router"; // Import useRouter from expo-router
import React, { useState } from "react"; // Import React and useState
import { Button, StyleSheet, Text, View } from "react-native"; // Import necessary components from React Native
import { RadioButton } from "react-native-paper"; // Import RadioButton from react-native-paper

export default function WorkoutExperience() {
  const [experience, setExperience] = useState(""); // State to track the selected workout experience
  const router = useRouter();

  const handleNext = () => {
    if (experience) {
      console.log("Selected Workout Experience:", experience);
      router.push("/userInput/Age");
    } else {
      alert("Please select a workout experience.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Workout Experience</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setExperience(newValue)}
        value={experience}
      >
        <View style={styles.radioItem}>
          <RadioButton value="regularly" />
          <Text>Yes, I workout regularly</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="less_than_a_year" />
          <Text>Yes, Less than a year</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="more_than_a_year" />
          <Text>Yes, more than a year</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="none" />
          <Text>No, I don't have any</Text>
        </View>
      </RadioButton.Group>

      <Button title="Next" onPress={handleNext} />
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
