import { SafeAreaView } from "react-native-safe-area-context";
import { Welcome } from "../components/welcome";
import { Steps } from "../components/steps";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 px-10 bg-gray-100">
      <Welcome
        title="Boas vindas ao Nearby!"
        subtitle="Tenha cupons de vantagem para usar em seus estabelecimentos favoritos."
      />
      <Steps />
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </SafeAreaView>
  );
}
