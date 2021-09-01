import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../theme/AppTheme";

const dimensions = Dimensions.get("window");
const imageFondo = { uri: "https://images2.alphacoders.com/113/1133858.jpg" };

export default function Information({ image, name, description }) {
  const navigation = useNavigation();

  return (
    <ImageBackground source={imageFondo} style={{ height: dimensions.height }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ ...styles.button, marginTop: 10 }}
      >
        <Text style={styles.textoButon}>VOLVER</Text>
      </TouchableOpacity>
      <Image
        style={{
          height: dimensions.height * 0.35,
          marginTop: 1,
        }}
        source={{ uri: image }}
      />

      {name ? (
        <View style={styles.ContDescription}>
          <Text style={styles.titleInformation}> {name}</Text>
          {description ? (
            <Text style={styles.description}>{description}</Text>
          ) : (
            <Text style={styles.description}>No posee informacion</Text>
          )}
        </View>
      ) : (
        <Text style={styles.description}>No posee informacion</Text>
      )}
    </ImageBackground>
  );
}
