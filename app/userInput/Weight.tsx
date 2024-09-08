import { setWeight } from "@/redux/userSlice";
import { useRouter } from "expo-router"; // Import useRouter from expo-router
import React, { useState } from "react"; // Import React and useState
import { Button, StyleSheet, Text, TextInput, View } from "react-native"; // Import necessary components from React Native
import { useDispatch } from "react-redux";

export default function Weight() {
  const [weight, setLocalWeight] = useState(""); // State to track the entered weight
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (weight.trim()) {
      dispatch(setWeight(weight));
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
        onChangeText={(text) => setLocalWeight(text)}
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
