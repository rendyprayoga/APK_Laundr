import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  TextInput,
  Modal,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import React, { useEffect, useState } from "react";

export default function App() {
  const img = require("../assets/latar.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("login");
      }
    });

    return unsubscribe;
  }, []);
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password, nama)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.backgroudcolour}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.button}>
            <AntDesign
              name="back"
              size={24}
              color="black"
              style={styles.button}
            />
          </View>
        </TouchableOpacity>
        <Image
          style={styles.picture}
          source={require("../assets/logo.png")}
        ></Image>
        <View style={styles.sign}>
          <Text style={styles.sign2}>Nama Lengkap :</Text>
          <TextInput
            style={styles.sign3}
            placeholder="nama"
            value={nama}
            onChangeText={(text) => setNama(text)}
          ></TextInput>
          <Text style={styles.sign4}>No. HP atau Email :</Text>
          <TextInput
            style={styles.sign5}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <Text style={styles.sign6}>Passsword :</Text>
          <TextInput
            style={styles.sign7}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          ></TextInput>
        </View>
        <TouchableOpacity onPress={handleSignUp}>
          <View style={styles.register1}>
            <Text style={styles.register2}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudcolour: {
    flex: 1,
    backgroundColor: "rgba(148, 215, 244, 0.8)",
  },
  picture: {
    resizeMode: "contain",
    width: 400,
    height: 400,
    top: 50,
  },
  button: {
    top: 30,
    left: 15,
  },
  sign: {
    backgroundColor: "#185E46",
    padding: 60,
    borderRadius: 10,
    width: "90%",
    left: 20,
    top: -80,
    borderWidth: 2,
  },
  sign2: {
    left: -45,
    top: -50,
    color: "#FFFFFF",
  },
  sign3: {
    backgroundColor: "#FFF",
    left: -45,
    top: -40,
    borderRadius: 100,
    width: 320,
    borderWidth: 2,
  },
  sign4: {
    left: -45,
    top: -30,
    color: "#FFFFFF",
  },
  sign5: {
    backgroundColor: "#FFF",
    left: -45,
    top: -20,
    borderRadius: 100,
    width: 320,
    borderWidth: 2,
  },
  sign6: {
    left: -45,
    top: -10,
    color: "#FFFFFF",
  },
  sign7: {
    backgroundColor: "#FFF",
    left: -45,
    top: 0,
    borderRadius: 100,
    width: 320,
    borderWidth: 2,
  },
  register1: {
    borderRadius: 10,
    backgroundColor: "#185E46",
    width: "30%",
    padding: 5,
    left: 150,
    top: -60,
    borderWidth: 2,
  },
  register2: {
    fontWeight: "bold",
    left: 25,
    letterSpacing: 0.5,
    color: "#FFFFFF",
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
