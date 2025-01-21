import { View, ImageBackground } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";

import { router } from "expo-router";
import { Button } from "../button";

type CoverProps = {
  uri: string;
};

export function Cover({ uri }: CoverProps) {
  return (
    <ImageBackground className="w-full h-96 mb-[-32px] bg-gray-200" source={{ uri }}>
      <View className="p-6 pt-14">
        <Button className="w-14" style={{ height: 50 }} onPress={() => router.back()}>
          <Button.Icon icons={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
}
