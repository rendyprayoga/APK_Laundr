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
  Alert,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import { firebase } from "../firebase";
import React, { useState } from "react";

const history = ({ navigation }) => {
  const img = require("../assets/latar.png");
  // const [visible, setVisible] = React.useState(false);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const source = { uri: result.uri };
    console.log(source);
    setImage(source);
  };

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    var ref = firebase.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (e) {
      console.error(e);
    }
    setUploading(false);
    Alert.alert("Photo uploaded!!!");
    setImage(null);
  };
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
              color: "white",
              fontWeight: "bold",
              fontSize: 30,
              top: 50,
              left: 60,
              letterSpacing: 1,
            }}
          >
            Bukti
          </Text>
          <Image
            style={{ width: 200, height: 65, left: 230, top: -30 }}
            source={require("../assets/logo.png")}
          ></Image>
        </View>
        <View style={styles.flet}>
          <Text style={{ marginTop: 20, marginLeft: 20 }}>
            Bukti Pembayaran :
          </Text>
          <View style={styles.sign4}>
            <TouchableOpacity onPress={pickImage}>
              <AntDesign
                style={styles.add}
                name="plus"
                size={24}
                color="black"
              />
              <Text
                style={{
                  left: 100,
                  top: 35,
                  letterSpacing: 1,
                  fontWeight: "bold",
                }}
              >
                Add Image
              </Text>
            </TouchableOpacity>
            <View>
              {image && (
                <Image
                  source={{ uri: image.uri }}
                  style={{ width: 250, height: 150, top: -50 }}
                />
              )}
            </View>
          </View>
          <TouchableOpacity onPress={uploadImage}>
            <View style={styles.kirim}>
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 28,
                  letterSpacing: 0.5,
                  fontWeight: "bold",
                }}
              >
                Kirim
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.flet1}>
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
            onPress={() => Linking.openURL("https://wa.me/6285157489266")}
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
    height: "20%",
    top: -20,
  },
  flet: {
    width: "80%",
    height: "45%",
    borderRadius: 20,
    backgroundColor: "#185E46",
    marginTop: 20,
    marginLeft: 38,
    borderWidth: 2,
  },
  flet1: {
    backgroundColor: "#185E46",
    borderRadius: 20,
    height: "20%",
    marginTop: 180,
  },
  sign4: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    height: "50%",
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
    top: 56,
  },
});
export default history;
