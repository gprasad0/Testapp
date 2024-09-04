import { useRouter } from "expo-router"; // Import useRouter from expo-router
import React, { useState } from "react"; // Import React and useState
import { Button, StyleSheet, Text, TextInput, View } from "react-native"; // Import necessary components from React Native

export default function Weight() {
  const [weight, setWeight] = useState(""); // State to track the entered weight
  const router = useRouter();

  const handleNext = () => {
    if (weight.trim()) {
      // Check if weight is not empty
      console.log("Entered Weight:", weight);
      router.push("/userInput/WorkoutLocation"); // Navigate to the next screen (adjust this path as needed)
    } else {
      alert("Please enter your weight.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Weight (in kg)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric" // Only show numeric keyboard
        placeholder="Enter your weight in kg"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
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
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
