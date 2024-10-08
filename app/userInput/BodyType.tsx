import { setBodyType } from "@/redux/userSlice";
import { useRouter } from "expo-router"; // Import useRouter from expo-router
import React, { useState } from "react"; // Import React and useState
import { Button, StyleSheet, Text, View } from "react-native"; // Import necessary components from React Native
import { RadioButton } from "react-native-paper"; // Import RadioButton from react-native-paper
import { useDispatch } from "react-redux";

export default function BodyType() {
  const [bodyType, setLocalBodyType] = useState(""); // State to track the selected body type
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (bodyType) {
      console.log("Selected Body Type:", bodyType);
      dispatch(setBodyType(bodyType));
      router.push("/userInput/WorkoutExperience"); // Navigate to the next screen (adjust this path as needed)
    } else {
      alert("Please select a body type!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Body Type</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setLocalBodyType(newValue)}
        value={bodyType}
      >
        <View style={styles.radioItem}>
          <RadioButton value="skinny" />
          <Text>Skinny</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="ideal" />
          <Text>Ideal</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="flabby" />
          <Text>Flabby</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="heavier" />
          <Text>Heavier</Text>
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
