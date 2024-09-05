import { useRouter } from "expo-router"; // Import useRouter from expo-router
import React, { useState } from "react"; // Import React and useState
import { Button, StyleSheet, Text, View } from "react-native"; // Import necessary components from React Native
import { RadioButton } from "react-native-paper"; // Import RadioButton from react-native-paper

export default function WorkoutLocation() {
  const [location, setLocation] = useState(""); // State to track the selected workout location
  const router = useRouter();

  const handleNext = () => {
    if (location) {
      console.log("Selected Location:", location);
      router.push("/Dashboard"); // Navigate to the next screen (adjust this path as needed)
    } else {
      alert("Please select a workout location.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where Do You Prefer to Workout?</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setLocation(newValue)}
        value={location}
      >
        <View style={styles.radioItem}>
          <RadioButton value="home" />
          <Text>At Home</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="gym" />
          <Text>At the Gym</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="studio" />
          <Text>Studio Classes</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="outdoor" />
          <Text>Outdoor</Text>
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
