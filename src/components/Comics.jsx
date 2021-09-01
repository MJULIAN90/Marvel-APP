import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import Comic from "./Comic";
import apiParams from "../../config.js";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../theme/AppTheme";
const image = { uri: "https://images2.alphacoders.com/113/1133858.jpg" };

export default function Comics({ listComics }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash } = apiParams;
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  useEffect(() => {
    const promisesArray = listComics.map((c) =>
      axios.get(c.resourceURI, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
    );

    Promise.all(promisesArray)
      .then((responses) =>
        setData(responses.map((r) => r?.data?.data?.results[0]))
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ImageBackground source={image} style={{ height }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ ...styles.button, marginTop: 10 }}
      >
        <Text style={styles.textoButon}>VOLVER</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="red"
          style={{ paddingTop: "70%" }}
        />
      ) : (
        <FlatList
          style={{ marginBottom: 50 }}
          contentContainerStyle={{ alignItems: "center" }}
          data={data}
          keyExtractor={({ id }) => id.toString()}
          horizontal
          pagingEnabled
          renderItem={({ item }) => (
            <Comic
              key={item.id}
              name={item.title}
              image={`${item?.thumbnail?.path}.${item.thumbnail.extension}`}
            />
          )}
        />
      )}
    </ImageBackground>
  );
}
