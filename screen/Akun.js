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
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
const akun = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => alert(error.message));
  };
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
              color: "#ffffff",
            }}
          >
            Akun
          </Text>
          <Image
            style={{ width: 200, height: 65, left: 230, top: -10 }}
            source={require("../assets/logo.png")}
          ></Image>
        </View>

        <View style={styles.borderakun}>
          <Text style={styles.info}>{auth.currentUser?.name}</Text>
        </View>
        <View style={styles.borderakun}>
          <Text style={styles.info}>+62 85157489266</Text>
        </View>
        <View style={styles.borderakun}>
          <Text style={styles.info}>{auth.currentUser?.email}</Text>
        </View>
        <TouchableOpacity onPress={handleSignOut}>
          <View style={styles.borderakun}>
            <Text style={styles.info}>Keluar</Text>
          </View>
        </TouchableOpacity>

        {/* <View style={styles.flet}>
        </View> */}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudcolour: {
    backgroundColor: "rgba(148, 215, 244, 0.8)",
    flex: 1,
  },
  header: {
    backgroundColor: "#185E46",
    borderRadius: 10,
    width: "100%",
    height: "20%",
  },
  borderakun: {
    padding: 25,
    top: 80,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    borderRadius: 40,
    backgroundColor: "#185E46",
    borderWidth: 2,
    color: "#FFFFFF",
  },
  flet: {
    backgroundColor: "#185E46",
    borderRadius: 10,
    height: "10%",
    marginTop: 350,
  },
  info: {
    fontSize: 20,
    letterSpacing: 1,
    color: "#ffffff",
  },
});
export default akun;
