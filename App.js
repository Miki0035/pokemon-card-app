import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import { pokemonData } from "./data.js";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {pokemonData.map((pokemon, index) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
