import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "welcome " }} />
        <Stack.Screen name="/userInput/Gender" options={{ title: "Gender" }} />
        <Stack.Screen name="/userInput/Name" options={{ title: "Name" }} />
        <Stack.Screen name="/userInput/Goal" options={{ title: "Goal" }} />
        <Stack.Screen
          name="userInput/BodyType"
          options={{ title: " Body Type" }}
        />
        <Stack.Screen
          name="userInput/WorkoutExperience"
          options={{ title: "Workout Experience" }}
        />
        <Stack.Screen name="userInput/Age" options={{ title: "Enter Age" }} />
        <Stack.Screen
          name="userInput/Height"
          options={{ title: "Enter Height" }}
        />
        <Stack.Screen
          name="userInput/Weight"
          options={{ title: "Enter Weight" }}
        />
        <Stack.Screen
          name="userInput/WorkoutLocation"
          options={{ title: "Workout Location" }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
