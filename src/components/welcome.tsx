import { Image, Text, View } from "react-native";
import "../styles/global.css";

interface WelcomeProps {
  title: string;
  subtitle: string;
}

export function Welcome({ title, subtitle }: WelcomeProps) {
  return (
    <View>
      <Image className="w-20 h-20 my-8" source={require("../assets/logo.png")} />
      <View className="gap-4">
        <Text className="text-2xl font-bold1 font">{title}</Text>
        <Text className="text-gray-500 font-medium1">{subtitle}</Text>
      </View>
    </View>
  );
}
