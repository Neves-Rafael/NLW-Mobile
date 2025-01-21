import { View, Text } from "react-native";
import { LoaderCircle } from "lucide-react-native";

export function Loading() {
  return (
    <View className="flex-1 bg-green-light items-center justify-center">
      <View className="animate-spin">
        <LoaderCircle className="animate-spin flex" color={"white"} size={64} />
      </View>
      <Text className="text-gray-300">Loading...</Text>
    </View>
  );
}
