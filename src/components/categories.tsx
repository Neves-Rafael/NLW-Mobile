import { FlatList } from "react-native";
import { CategoryItem } from "./category-item";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

export type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (id: string) => void;
};

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <CategoryItem
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 8 }}
      style={{ paddingLeft: 34, position: "absolute", zIndex: 2, paddingTop: 46 }}
    />
  );
}
