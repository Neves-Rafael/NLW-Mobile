import { Text, Pressable, PressableProps } from "react-native";
import { categoriesIcons } from "../utils/categories-icons";

type CategoryItemProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export function CategoryItem({ name, iconId, isSelected = false, ...rest }: CategoryItemProps) {
  const Icon = categoriesIcons[iconId];
  return (
    <Pressable
      {...rest}
      className={`h-12 ${isSelected ? "bg-green-base border-0" : "bg-gray-100 border-2"} border-gray-300 rounded-lg justify-center flex-row px-4 gap-3 items-center`}
    >
      <Icon size={24} color={isSelected ? "#fff" : "#257F49"} />
      <Text
        className={`text-sm font-medium1 ${isSelected ? "color-gray-100" : " color-green-base"}`}
      >
        {name}
      </Text>
    </Pressable>
  );
}
