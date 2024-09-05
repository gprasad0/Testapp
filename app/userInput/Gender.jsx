import { useRouter } from "expo-router";
import React, { useState } from "react"; // Import useState from React
import { Button, StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper"; // Import RadioButton from react-native-paper

export default function Gender() {
  const [gender, setGender] = useState(""); // State to track the selected gender
  const router = useRouter();

  const handleNext = () => {
    if (gender) {
      console.log("Selected Gender:", gender);
      router.push("/userInput/Name"); // Navigate to the next screen
    } else {
      alert("Please select a gender.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Gender</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setGender(newValue)}
        value={gender}
      >
        <View style={styles.radioItem}>
          <RadioButton value="male" />
          <Text>Male</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="female" />
          <Text>Female</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="other" />
          <Text>Other</Text>
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
