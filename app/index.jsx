// app/index.tsx
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

// This is a simple example of a screen component for the "index" route
const IndexScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Welcome to the Fitness App!</Text>
      <Text>start your journey now</Text>
      <Button
        title="Here"
        onPress={() => {
          router.push("userInput/Gender");
        }}
      />
    </View>
  );
};

export default IndexScreen;
