import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { styles } from "../theme/AppTheme";

const { width, height } = Dimensions.get("window");

export default function Comic({ name, image }) {
  return (
    <View style={{ ...styles.ContainerComic, width }}>
      <View style={styles.menuComic}>
        <Image
          style={{ ...styles.imageComic, height: height * 0.65 }}
          source={{ uri: image }}
        />
        <Text style={styles.textComic}>{name}</Text>
      </View>
    </View>
  );
}
