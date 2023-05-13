import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.logo}>
      <Image source={require("../assets/laundry.png")} />
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  logo: {
    flex: 1,
    backgroundColor: "#80D8A8",
    alignItems: "center",
    justifyContent: "center",
  },
});
