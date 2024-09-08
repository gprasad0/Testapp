import { setName } from "@/redux/userSlice";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

export default function Name() {
  const [name, setLocalName] = useState(""); // State to track the inputted name
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (name.trim()) {
      dispatch(setName(name));
      console.log("User Name:", name);
      router.push("/userInput/Goal"); // Navigate to the next screen
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setLocalName} // Update state with the input value
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
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "80%",
    borderRadius: 4,
  },
});
