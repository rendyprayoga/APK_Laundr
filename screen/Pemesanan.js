import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
  SafeAreaView,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const pemesanan = ({ navigation }) => {
  const img = require("../assets/latar.png");
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.backgroudcolour}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ alignItems: "flex-start", left: 20, top: 85 }}>
              <AntDesign
                name="back"
                size={30}
                color="white"
                style={styles.button}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              top: 50,
              left: 60,
              letterSpacing: 1,
              color: "white",
            }}
          >
            Pemesanan
          </Text>
          <Image
            style={{ left: 260 }}
            source={require("../assets/logo.png")}
          ></Image>
        </View>
        <Text
          style={{
            color: "#000000",
            fontWeight: "bold",
            fontSize: 20,
            top: 60,
            left: 155,
          }}
        >
          PILIHAN
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Kiloan")}>
          <Text style={styles.button1}></Text>
          <Image
            style={{ top: 5, left: 173, width: 50, height: 50 }}
            source={require("../assets/weighing-machine.png")}
          ></Image>
          <Text
            style={{
              color: "white",
              top: 5,
              left: 173,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Kiloan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Satuan")}>
          <Text style={styles.button1}></Text>
          <Image
            style={{ top: 5, left: 173, width: 50, height: 50 }}
            source={require("../assets/sport-wear.png")}
          ></Image>
          <Text
            style={{
              color: "white",
              top: 5,
              left: 173,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Satuan
          </Text>
        </TouchableOpacity>
        <View style={styles.flet}>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Octicons
              name="home"
              size={24}
              color="black"
              style={{ top: 20, left: 40 }}
            />

            <Text style={{ top: 20, left: 25, fontWeight: "bold" }}>
              Beranda
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://wa.me/6281265856114")}
          >
            <Ionicons
              name="md-chatbox-ellipses-outline"
              size={30}
              color="black"
              style={{ top: -30, left: 190 }}
            />
            <Text style={{ top: -30, left: 190, fontWeight: "bold" }}>
              Chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Akun")}>
            <MaterialCommunityIcons
              name="account-outline"
              size={34}
              color="black"
              style={{ right: -330, top: -83 }}
            />
            <Text style={{ fontWeight: "bold", right: -330, top: -83 }}>
              Akun
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudcolour: {
    flex: 1,
    backgroundColor: "rgba(148, 215, 244, 0.8)",
  },
  header: {
    backgroundColor: "#185E46",
    borderRadius: 10,
    width: "100%",
    height: "18%",
    top: -20,
  },

  flet: {
    backgroundColor: "#185E46",
    borderRadius: 20,
    height: "15%",
    marginTop: 220,
  },
  button1: {
    marginLeft: 50,
    marginRight: 50,
    top: 80,
    justifyContent: "center",
    backgroundColor: "#185E46",
    padding: 40,
    borderRadius: 20,
    paddingHorizontal: 98,
    fontSize: 15,
    fontWeight: "bold",
    color: "#00203FFF",
    borderWidth: 2,
    borderColor: "#00203FFF",
  },
});
export default pemesanan;
