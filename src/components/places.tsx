import { useWindowDimensions } from "react-native";
import { PlaceItem, PlaceItemProps } from "./place-item";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useRef } from "react";

type PlaceProps = {
  data: PlaceItemProps[];
};

export function Places({ data }: PlaceProps) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = {
    min: 278,
    max: dimensions.height - 130,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={{ width: 80, height: 4, backgroundColor: "#C4D0DB" }}
      backgroundStyle={{ backgroundColor: "#FCFDFD" }}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlaceItem data={item} onPress={() => router.navigate(`/market/${item.id}`)} />
        )}
        contentContainerStyle={{ gap: 12, padding: 24 }}
      />
    </BottomSheet>
  );
}
