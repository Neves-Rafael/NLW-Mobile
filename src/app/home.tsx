import { Alert, SafeAreaView, Text, View } from "react-native";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "../components/categories";
import { PlaceItemProps } from "../components/place-item";
import { Places } from "../components/places";
import MapView, { Callout, Marker } from "react-native-maps";
import { router } from "expo-router";

type MarketsProps = PlaceItemProps & {};

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0455,
};

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.error(error);
      Alert.alert(`Error = ${error}`);
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) {
        return;
      }

      // biome-ignore lint/style/useTemplate: <explanation>
      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possível carregar os locais.");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Categories data={categories} onSelect={setCategory} selected={category} />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: currentLocation.latitudeDelta,
          longitudeDelta: currentLocation.longitudeDelta,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("../assets/location.png")}
        />
        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require("../assets/pin.png")}
          >
            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
              <View>
                <Text className="font-medium1 text-base color-gray-600">{item.name}</Text>
                <Text className="font-regular1 text-sm color-gray-600">{item.address}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places data={markets} />
    </SafeAreaView>
  );
}
