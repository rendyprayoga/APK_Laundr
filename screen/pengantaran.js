import { MaterialIcons } from "@expo/vector-icons";
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
  Modal,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const history = ({ navigation }) => {
  const img = require("../assets/latar.png");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [handphone, sethandphone] = useState("");
  function create() {
    addDoc(collection(db, "users"), {
      nama: nama,
      alamat: alamat,
      tanggal: tanggal,
      handphone: handphone,
    })
      .then(() => {
        console.log("data submitted");
      })
      .catch((error) => {
        // The write failed...
        console.log(error);
      });
  }
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
              color: "white",
              fontWeight: "bold",
              fontSize: 30,
              top: 50,
              left: 50,
              letterSpacing: 0.3,
            }}
          >
            Pengantaran
          </Text>
          <Image
            style={{ width: 200, height: 65, left: 230, top: -10 }}
            source={require("../assets/logo.png")}
          ></Image>
        </View>
        <View style={styles.flet}>
          <Text style={styles.list}>Alamat Anda :</Text>
          <TextInput
            value={alamat}
            onChangeText={(alamat) => {
              setAlamat(alamat);
            }}
            style={styles.sign}
          ></TextInput>
          <Text style={styles.list}>No.Handphone :</Text>
          <TextInput
            value={handphone}
            onChangeText={(handphone) => {
              sethandphone(handphone);
            }}
            style={styles.sign1}
          ></TextInput>
          <Text style={styles.list}>Nama Penerima :</Text>
          <TextInput
            value={nama}
            onChangeText={(nama) => {
              setNama(nama);
            }}
            style={styles.sign2}
          ></TextInput>
          <Text style={styles.list}>Tanggal Pengantaran :</Text>
          <TextInput
            value={tanggal}
            onChangeText={(tanggal) => {
              setTanggal(tanggal);
            }}
            style={styles.sign3}
          ></TextInput>
          <TouchableOpacity onPress={create}>
            <View style={styles.kirim}>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 28,
                  letterSpacing: 0.5,
                  fontWeight: "bold",
                }}
              >
                Kirim
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("imagepic")}>
            <View style={styles.kirim}>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 28,
                  letterSpacing: 0.5,
                  fontWeight: "bold",
                }}
              >
                Next
              </Text>
            </View>
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
    height: "20%",
    top: -20,
  },
  flet: {
    width: "80%",
    height: "60%",
    borderRadius: 20,
    backgroundColor: "#185E46",
    marginTop: 10,
    marginLeft: 38,
    borderWidth: 2,
  },
  sign: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    left: 20,
    top: 10,
    borderWidth: 2,
  },
  sign1: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    left: 20,
    top: 10,
    borderWidth: 2,
  },
  sign2: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    left: 20,
    top: 10,
    borderWidth: 2,
  },
  sign3: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    left: 20,
    top: 10,
    borderWidth: 2,
  },
  sign4: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    height: "15%",
    left: 20,
    top: 10,
    borderWidth: 2,
  },
  kirim: {
    width: "30%",
    height: "23%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 100,
    borderWidth: 2,
  },
  add: {
    left: 70,
    top: 20,
  },
  list: {
    marginTop: 20,
    marginLeft: 20,
    color: "white",
  },
});
export default history;
