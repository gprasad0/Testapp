import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Fitness App!</Text>
      {/* Corrected Link component for navigating to the next screen */}

      <Button
        title="Get Started"
        onPress={() => {
          router.push("/userInput/Gender");
        }}
      />
    </View>
  );
}
