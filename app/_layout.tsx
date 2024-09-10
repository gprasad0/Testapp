// app/_layout.tsx
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "./store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Welcome" }} />

        {/* User Input Screens */}
        <Stack.Screen name="userInput/Gender" options={{ title: "Gender" }} />
        <Stack.Screen name="userInput/Name" options={{ title: "Name" }} />
        <Stack.Screen name="userInput/Goal" options={{ title: "Goal" }} />
        <Stack.Screen
          name="userInput/BodyType"
          options={{ title: "Body Type" }}
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

        {/* Tab Navigator */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
