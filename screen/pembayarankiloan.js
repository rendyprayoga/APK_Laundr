import React, { useState } from "react";
import Toast from "react-native-toast-message";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Modal,
  ImageBackground,
  Pressable,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.backgroudcolour}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>No. Dana : XXX</Text>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>No. ShoopePay : XXX</Text>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible1(!modalVisible1)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>No. OVO : XXX</Text>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>No. Gopay : XXX</Text>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible3(!modalVisible3)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ alignItems: "flex-start", left: 20, top: 80 }}>
              <AntDesign name="back" size={30} color="white" />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
              top: 50,
              left: 60,
            }}
          >
            Checkout Kiloan
          </Text>
          <Image
            style={{ top: 10, left: 260 }}
            source={require("../assets/logo.png")}
          ></Image>
        </View>

        <View style={styles.border}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              top: 15,
              left: 110,
            }}
          >
            Pembayaran
          </Text>
          <Image
            style={{ top: -10, left: 75 }}
            source={require("../assets/Paper.png")}
          ></Image>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={{ top: 10, left: 65 }}
              source={require("../assets/dana.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible1(true)}>
            <Image
              style={{ top: 10, left: 65 }}
              source={require("../assets/shopeepay.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible2(true)}>
            <Image
              style={{ top: -70, left: 180 }}
              source={require("../assets/ovo.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible3(true)}>
            <Image
              style={{ top: -50, left: 180 }}
              source={require("../assets/gopay.png")}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.border1}>
          <Text style={{ fontWeight: "bold", fontSize: 15, top: 25, left: 20 }}>
            Total Harga
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15, top: 5, left: 300 }}>
            Rp.7000
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("pengantaran")}>
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                backgroundColor: "#185E46",
                padding: 15,
                paddingHorizontal: 100,
                borderRadius: 30,
                marginTop: 30,
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
  modalView: {
    margin: 20,
    top: 250,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
    top: -30,
  },
  border: {
    backgroundColor: "#185E46",
    borderRadius: 10,
    width: "75%",
    height: "20%",
    marginTop: 100,
    marginLeft: 50,
  },
  border1: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "100%",
    height: "20%",
    marginTop: 260,
  },
  flet: {
    backgroundColor: "#185E46",
    borderRadius: 0,
    height: "10%",
    marginTop: -20,
  },
});
export default history;
