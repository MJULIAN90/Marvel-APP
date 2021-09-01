import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../theme/AppTheme";

const image = { uri: "https://images2.alphacoders.com/113/1133858.jpg" };

const Init = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.text}>Comenzar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Init;
