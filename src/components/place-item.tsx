import { IconTicket } from "@tabler/icons-react-native";
import { Text, TouchableOpacity, TouchableOpacityProps, View, Image } from "react-native";

export type PlaceItemProps = {
  latitude: number;
  longitude: number;
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceItemProps;
};

export function PlaceItem({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="h-46 w-full p-2 border border-gray-300 rounded-xl flex-row gap-4 items-center"
      {...rest}
    >
      <Image className="w-28 h-28 bg-gray-200 rounded-lg" source={{ uri: data.cover }} />

      <View className="flex-1 gap-2">
        <Text className="font-medium1 color-gray-600">{data.name}</Text>
        <Text className="font-regular1 text-sm color-gray-500" numberOfLines={2}>
          {data.description}
        </Text>
        <View className="flex-row gap-2 items-center">
          <IconTicket color={"red"} />
          <Text className="font-regular1 color-gray-400">{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
