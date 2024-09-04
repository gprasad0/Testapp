import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="Meals" options={{ title: "Meals" }} />
      <Tabs.Screen name="Workout" options={{ title: "Workout" }} />
    </Tabs>
  );
}
