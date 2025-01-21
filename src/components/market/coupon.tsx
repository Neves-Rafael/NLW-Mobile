import { Text, View } from "react-native";
import { IconTicket } from "@tabler/icons-react-native";

type CouponProps = {
  code: string;
};

export function Coupon({ code }: CouponProps) {
  return (
    <View className="px-8">
      <Text className="color-gray-500 font-semiBold1 mb-3">Utilize esse cupom</Text>

      <View className="flex-row bg-green-soft px-2 py-3 rounded-lg items-center gap-3">
        <IconTicket size={32} color="#3B9B62" />
        <Text className="color-green-base font-bold1 uppercase">{code}</Text>
      </View>
    </View>
  );
}
