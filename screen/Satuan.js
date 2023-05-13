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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const history = ({ navigation }) => {
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
                color="black"
                style={styles.button}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              top: 50,
              left: 80,
              letterSpacing: 1,
            }}
          >
            Satuan
          </Text>
          <Image
            style={{ width: 200, height: 65, left: 230, top: -30 }}
            source={require("../assets/logo.png")}
          ></Image>
        </View>

        <View style={styles.borderbiaya}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              top: -35,
              left: 45,
              right: 30,
            }}
          >
            Total Biaya Laundry
          </Text>
          <Image
            style={{ top: -58, left: 10 }}
            source={require("../assets/Paper.png")}
          ></Image>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              top: -40,
              left: 50,
              right: 30,
            }}
          >
            No Pesanan : XXX
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              top: -30,
              left: 20,
              right: 30,
            }}
          >
            Masukkan Jumlah Potong Pakaian
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Jumlah berat"
            textAlign="center"
            placeholderTextColor="black"
          />

          <Text
            style={{
              fontSize: 12,
              top: -65,
              left: 20,
              right: 30,
            }}
          >
            pastikan jumlah barang sudah benar
          </Text>

          <Text
            style={{
              fontSize: 12,
              top: -25,
              left: 35,
              right: 30,
            }}
          >
            Harga Per potong Rp.5000.-
          </Text>
        </View>

        <View style={styles.borderchecout}>
          <Text style={{ fontWeight: "bold", fontSize: 15, top: 25, left: 20 }}>
            Total Harga
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15, top: 5, left: 300 }}>
            Rp.5000.-
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("pembayaransatuan")}
          >
            <Text
              style={{
                alignSelf: "center",
                backgroundColor: "#89CFF0",
                padding: 15,
                paddingHorizontal: 100,
                borderRadius: 30,
                marginTop: 25,
                fontSize: 15,
                fontWeight: "bold",
                borderWidth: 1,
                borderColor: "#FFF",
              }}
            >
              Konfirmasi Pembayaran
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
  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "black",
    width: 180,
    padding: 6,
    margin: 25,
    top: -50,
    color: "black",
    paddingHorizontal: 15,
    fontSize: 13,
  },
  backgroudcolour: {
    backgroundColor: "rgba(148, 215, 244, 0.8)",
  },
  header: {
    backgroundColor: "#CDD8E3",
    borderRadius: 10,
    width: "100%",
    height: "18%",
    top: -20,
  },
  borderbiaya: {
    padding: 40,
    top: 120,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    backgroundColor: "#185E46",
    height: "29%",
    borderWidth: 2,
  },
  borderchecout: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,

    height: "20%",
    marginTop: 285,
  },
  flet: {
    backgroundColor: "#185E46",
    borderRadius: 10,
    height: "10%",
    marginTop: -45,
  },
});
export default history;
