import { setHeight } from "@/redux/userSlice";
import { useRouter } from "expo-router"; // Import useRouter from expo-router
import React, { useState } from "react"; // Import React and useState
import { Button, StyleSheet, Text, TextInput, View } from "react-native"; // Import necessary components from React Native
import { useDispatch } from "react-redux";

export default function Height() {
  const [height, setLocalHeight] = useState(""); // State to track the entered height
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (height.trim()) {
      dispatch(setHeight(height));
      console.log("Entered Height:", height);
      router.push("/userInput/Weight"); // Navigate to the next screen (adjust this path as needed)
    } else {
      alert("Please enter your height.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Height (in cm)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric" // Only show numeric keyboard
        placeholder="Enter your height in cm"
        value={height}
        onChangeText={(text) => setLocalHeight(text)}
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
