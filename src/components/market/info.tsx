import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

type Props = {
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Info({ icon: Icon, description }: Props) {
  return (
    <View className="flex-row items-center gap-2">
      <Icon size={24} className="mr-2" color={"#9B9B9B"} />
      <Text className="text-gray-500 font-regular1 text-sm leading-6 flex-1">{description}</Text>
    </View>
  );
}
