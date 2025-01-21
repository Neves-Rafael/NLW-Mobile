import { View, Text } from "react-native";
import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native";
import { Info } from "./info";

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: PropsDetails;
};

export function Details({ data }: Props) {
  return (
    <View
      className="p-8 pb-0 bg-gray-100"
      style={{ borderTopStartRadius: 20, borderTopEndRadius: 20 }}
    >
      <Text className="font-bold1 color-gray-600 text-xl">{data.name}</Text>
      <Text className="font-regular1 color-gray-500 text-base mt-3 mb-8">{data.description}</Text>

      <View className="w-full border-b-2 border-b-gray-200 pb-4">
        <Text className="font-medium1 color-gray-500 text-base mb-4">Informações</Text>
        <Info icon={IconTicket} description={`${data.coupons} cupons disponíveis`} />
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>
      <View className="w-full border-b-2 border-b-gray-200 pb-4 mb-4">
        <Text className="font-medium1 color-gray-500 text-base my-4">Regulamento</Text>
        {data.rules.map((item) => (
          <Text key={item.id} className="font-regular1 color-gray-500 text-sm">
            {`\u2022 ${item.description}`}
          </Text>
        ))}
      </View>
    </View>
  );
}
