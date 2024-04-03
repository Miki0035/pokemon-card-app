import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  FlatList,
  Text,
} from "react-native";
import { pokemonData } from "./data.js";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={pokemonData}
          renderItem={({ item }) => <PokemonCard key={item.index} {...item} />}
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon Cards</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
        />
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

  headerText: {
    fontSize: 32,
    paddingVertical: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
