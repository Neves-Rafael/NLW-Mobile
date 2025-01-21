import { View, Text } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

interface StepItemProps {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
}

export function StepItem({ icon: Icon, title, description }: StepItemProps) {
  return (
    <View className="flex-row gap-4 pr-16">
      {Icon && <Icon size={34} color={"#F94144"} />}
      <View>
        <Text className="font-bold1 text-base ">{title}</Text>
        <Text className="font-regular1 text-gray-400 mt-2">{description}</Text>
      </View>
    </View>
  );
}
