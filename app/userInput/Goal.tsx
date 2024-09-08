import { setGoal } from "@/redux/userSlice";
import { useRouter } from "expo-router"; // Import useRouter from expo-router
import React, { useState } from "react"; // Import React and useState
import { Button, StyleSheet, Text, View } from "react-native"; // Import necessary components from React Native
import { RadioButton } from "react-native-paper"; // Import RadioButton from react-native-paper
import { useDispatch } from "react-redux";

export default function Goal() {
  const [goal, setLocalGoal] = useState(""); // State to track the selected goal
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (goal) {
      console.log("Selected Goal:", goal);
      dispatch(setGoal(goal));
      router.push("/userInput/BodyType"); // Navigate to the next screen (adjust this path as needed)
    } else {
      alert("Please select a goal.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Fitness Goal</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setLocalGoal(newValue)}
        value={goal}
      >
        <View style={styles.radioItem}>
          <RadioButton value="muscle_gain" />
          <Text>Muscle Gain</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton value="weight_loss" />
          <Text>Weight Loss</Text>
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
