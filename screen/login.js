import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import React, { useEffect, useState } from "react";

export default function App() {
  const img = require("../assets/latar.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Menu");
      }
    });

    return unsubscribe;
  }, []);
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.backgroudcolour}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
          <Text style={styles.sign2}>Email :</Text>
          <TextInput
            style={styles.sign3}
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <Text style={styles.sign4}>Password :</Text>
          <TextInput
            style={styles.sign5}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          ></TextInput>
        </View>
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.login1}>
            <Text style={styles.login2}>Login</Text>
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
    padding: 50,
    borderRadius: 10,
    width: "90%",
    left: 20,
    top: -80,
    borderWidth: 2,
  },
  sign2: {
    left: -35,
    top: -40,
    color: "#FFFFFF",
  },
  sign3: {
    backgroundColor: "#FFF",
    left: -35,
    top: -30,
    borderRadius: 100,
    width: 325,
    borderWidth: 2,
  },
  sign4: {
    left: -35,
    top: -20,
    color: "#FFFFFF",
  },
  sign5: {
    backgroundColor: "#FFF",
    left: -35,
    top: -10,
    borderRadius: 100,
    width: 325,
    borderWidth: 2,
  },
  login1: {
    borderRadius: 10,
    backgroundColor: "#185E46",
    width: "30%",
    padding: 5,
    left: 150,
    top: -60,
    borderWidth: 2,
  },
  login2: {
    fontWeight: "bold",
    left: 35,
    letterSpacing: 0.5,
    color: "#FFFFFF",
  },
});
