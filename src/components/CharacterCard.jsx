import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../theme/AppTheme";

export default function CharacterCard({ id, image, name }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.CardContainer}
      onPress={() => navigation.navigate("Detail", { id })}
    >
      <Image style={styles.imageCard} source={{ uri: image }} />
      <Text style={styles.textCard}>{name}</Text>
    </TouchableOpacity>
  );
}
