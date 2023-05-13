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

const data = [
  {
    No: "001",
    Nama: "XXX",
    No_HP: "XXX",
    Tanggal_Pemesanan: "XXX",
    Tanggal_Pengantaran: "XXX",
    Alamat_Anda: "XXX",
    logo: require("../assets/loading.png"),
  },
  {
    No: "002",
    Nama: "XXX",
    No_HP: "XXX",
    Tanggal_Pemesanan: "XXX",
    Tanggal_Pengantaran: "XXX",
    Alamat_Anda: "XXX",
    logo: require("../assets/right.png"),
  },
  {
    No: "003",
    Nama: "XXX",
    No_HP: "XXX",
    Tanggal_Pemesanan: "XXX",
    Tanggal_Pengantaran: "XXX",
    Alamat_Anda: "XXX",
    logo: require("../assets/wrong.png"),
  },
];

const history = ({ navigation }) => {
  const img = require("../assets/latar.png");
  const renderItem = ({ item }) => (
    <View style={styles.flet}>
      <Image
        source={item.logo}
        style={{
          width: 20,
          height: 20,
          marginLeft: 300,
          top: 50,
          marginTop: -10,
          marginBottom: 0,
        }}
      ></Image>
      <Text style={styles.list}>No : {item.No}</Text>
      <Text style={styles.list}>Nama : {item.Nama}</Text>
      <Text style={styles.list}>No. Handphone : {item.No_HP}</Text>
      <Text style={styles.list}>
        Tanggal Pemesanan : {item.Tanggal_Pemesanan}
      </Text>
      <Text style={styles.list}>
        Tanggal Pengantaran : {item.Tanggal_Pengantaran}
      </Text>
      <Text style={styles.list}>Alamat : {item.Alamat_Anda}</Text>
    </View>
  );
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
              color: "#ffffff",
            }}
          >
            History
          </Text>
          <Image
            style={{ width: 200, height: 65, left: 230, top: -10 }}
            source={require("../assets/logo.png")}
          ></Image>
        </View>
        <SafeAreaView>
          <View style={styles.scrollView}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
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
  list: {
    marginLeft: 10,
    top: -10,
    color: "#ffffff",
  },
  header: {
    backgroundColor: "#185E46",
    borderRadius: 10,
    width: "100%",
    height: "20%",
    top: -20,
  },
  flet: {
    backgroundColor: "#185E46",
    borderRadius: 10,
    marginTop: 40,
    width: "90%",
    marginLeft: 20,
    borderWidth: 2,
  },
});
export default history;
