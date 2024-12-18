import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  BellRinging,
  BookBookmark,
  Bookmark,
  ChatsTeardrop,
  FadersHorizontal,
  MagnifyingGlass,
} from "phosphor-react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ChatsTeardrop size={30} color="#1AB65C" weight="duotone" />
          <Text style={styles.headerLeftText}>Helia</Text>
        </View>
        <View style={styles.headerRight}>
          <BellRinging size={30} color="#f4f4f4" weight="duotone" />
          <Bookmark size={30} color="#f4f4f4" weight="duotone" />
        </View>
      </View>

      <Text style={styles.userName}>Olá, Rodrigo Lucas</Text>

      <View style={styles.inputContainer}>
        <MagnifyingGlass size={32} color="#757575" weight="thin" />
        <TextInput
          style={styles.input}
          placeholderTextColor="#757575"
          placeholder="Procure por casa aqui"
        />
        <FadersHorizontal size={32} color="#1AB65C" weight="thin" />
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
            <Image
              style={styles.cardImage}
              source={require("./assets/hotel.png")}
            />

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Hotel Nova Vista</Text>
              <Text style={styles.cardSubTitle}>Posse, Goiás</Text>
            </View>

            <View style={styles.cardInfoBuy}>
              <Text style={styles.cardInfoBuyText}>R$ 420</Text>
              <Pressable>
                <Bookmark size={32} color="#F4F4F4" weight="bold" />
              </Pressable>
            </View>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
            <Image
              style={styles.cardImage}
              source={require("./assets/hotel.png")}
            />

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Hotel Nova Vista</Text>
              <Text style={styles.cardSubTitle}>Posse, Goiás</Text>
            </View>

            <View style={styles.cardInfoBuy}>
              <Text style={styles.cardInfoBuyText}>R$ 420</Text>
              <Pressable>
                <Bookmark size={32} color="#F4F4F4" weight="bold" />
              </Pressable>
            </View>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
            <Image
              style={styles.cardImage}
              source={require("./assets/hotel.png")}
            />

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Hotel Nova Vista</Text>
              <Text style={styles.cardSubTitle}>Posse, Goiás</Text>
            </View>

            <View style={styles.cardInfoBuy}>
              <Text style={styles.cardInfoBuyText}>R$ 420</Text>
              <Pressable>
                <Bookmark size={32} color="#F4F4F4" weight="bold" />
              </Pressable>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignContent: "center",
    gap: 10,
  },
  headerRight: {
    flexDirection: "row",
    alignContent: "center",
    gap: 10,
  },
  headerLeftText: {
    color: "#f4f4f4",
    fontWeight: "800",
    fontSize: 24,
  },
  userName: {
    paddingTop: 30,
    paddingBottom: 30,
    color: "#f4f4f4",
    fontSize: 25,
    fontWeight: "800",
  },
  inputContainer: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    backgroundColor: "#1f222a",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: "#F4f4f4",
  },
  content: {
    width: "100%",
    gap: 20,
  },
  card: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    backgroundColor: "#1f222a",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    padding: 15,
    justifyContent: "space-between",
  },
  cardButton: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  cardImage: {
    height: 90,
    width: 90,
    borderRadius: 12,
  },
  cardInfo: {
    height: "100%",
    gap: 10,
  },
  cardTitle: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },
  cardSubTitle: {
    color: "#f4f4f4",
    fontSize: 14,
    fontWeight: "300",
  },
  cardInfoBuy: {
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  cardInfoBuyText: {
    color: "#1ab65c",
    fontSize: 18,
    fontWeight: "800",
  },
});
