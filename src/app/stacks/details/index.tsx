import { useRouter } from "expo-router";
import { ArrowLeft, Bookmark, DotsThree, MapPin } from "phosphor-react-native";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Details() {
  const navigate = useRouter();

  const handleGoBack = () => {
    navigate.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../../assets/hotel.png")} />

        <View style={styles.headerButtons}>
          <Pressable onPress={handleGoBack}>
            <ArrowLeft color="#f4f4f4" weight="fill" size={32} />
          </Pressable>

          <View style={styles.headerButtonsInfo}>
            <Bookmark color="#f4f4f4" weight="fill" size={32} />
            <DotsThree color="#f4f4f4" weight="fill" size={32} />
          </View>
        </View>
      </View>

      <Text style={styles.infoNameHotel}>Hotel Nova Vista</Text>
      <View style={styles.infoContainerAddress}>
        <MapPin color="#1ab65c" weight="fill" size={32} />
        <Text style={styles.infoAddress}>Rua Santa Lucia, Quadra 06, Lote 17.</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.content}>
        <Text style={styles.contentTextPhoto}>Galeria de Fotos</Text>
        <Text style={styles.contentTextSellAll}>Ver todas</Text>
      </View>

      <ScrollView horizontal style={styles.containerGallery}>
        <Image style={styles.containerGalleryImage} source={require("../../assets/hotel.png")} />
        <Image style={styles.containerGalleryImage} source={require("../../assets/hotel.png")} />
        <Image style={styles.containerGalleryImage} source={require("../../assets/hotel.png")} />
        <Image style={styles.containerGalleryImage} source={require("../../assets/hotel.png")} />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerContainerText}>
          <Text style={styles.footerContainerTextMoney}>$ 200</Text>
          <Text style={styles.footerContainerTextMonth}>/ mês</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Alugar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
  },
  header: {
    width: "100%",
    height: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  headerButtons: {
    marginTop: 80,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerButtonsInfo: {
    flexDirection: "row",
    gap: 10,
  },
  infoNameHotel: {
    paddingHorizontal: 30,
    marginTop: 15,
    color: "#f4f4f4",
    fontSize: 35,
    fontWeight: "bold",
  },
  infoContainerAddress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  infoAddress: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "200",
  },
  separator: {
    height: 1,
    backgroundColor: "#757575",
    marginHorizontal: 30,
    marginTop: 30,
  },
  content: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentTextPhoto: {
    color: "#f4f4f4",
    fontSize: 20,
    fontWeight: "800",
  },
  contentTextSellAll: {
    color: "#1ab65c",
    fontSize: 16,
    fontWeight: "400",
  },
  containerGallery: {
    marginTop: 15,
    marginHorizontal: 30,
  },
  containerGalleryImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 10,
  },
  footer: {
    width: "100%",
    borderWidth: 1,
    borderLeftColor: "#757575",
    borderRightColor: "#757575",
    borderTopColor: "#757575",
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 20,
  },
  footerContainerText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  footerContainerTextMoney: {
    fontSize: 36,
    fontWeight: "600",
    color: "#1ab55c",
  },
  footerContainerTextMonth: {
    fontSize: 12,
    fontWeight: "400",
    color: "#f4f4f4",
  },
  button: {
    backgroundColor: "#1ab55c",
    width: "100%",
    height: 56,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "800",
  },
});
