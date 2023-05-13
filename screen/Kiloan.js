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
              left: 80,
              letterSpacing: 1,
              color: "white",
            }}
          >
            Kiloan
          </Text>
          <Image
            style={{ left: 260 }}
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
              color: "white",
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
              color: "white",
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
              color: "white",
            }}
          >
            Masukkan Jumlah KG
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Jumlah berat"
            textAlign="center"
            placeholderTextColor="white"
          />

          <Text
            style={{
              fontSize: 12,
              top: -65,
              left: 20,
              right: 30,
              color: "white",
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
              color: "white",
            }}
          >
            Harga Per Kilogram Rp.7000.-
          </Text>
        </View>

        <View style={styles.bordercheckout}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              top: 25,
              left: 20,
              color: "black",
            }}
          >
            Total Harga
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              top: 5,
              left: 300,
              color: "black",
            }}
          >
            Rp.7000.-
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("pembayarankiloan")}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                backgroundColor: "#185E46",
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
              Bayar
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
    backgroundColor: "#185E46",
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
  bordercheckout: {
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
