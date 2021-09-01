import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from "react-native";
import CharacterCard from "./CharacterCard";
import apiParams from "../../config.js";
import axios from "axios";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../theme/AppTheme";

const image = { uri: "https://images2.alphacoders.com/113/1133858.jpg" };

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response.data.data.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function searchCharacter() {
    if (search) {
      setLoading(true);
      axios
        .get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash,
            nameStartsWith: search,
          },
        })
        .then((response) => setData(response.data.data.results))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }

  return (
    <ImageBackground source={image} style={{ height }}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="red"
          style={{ paddingTop: "70%" }}
        />
      ) : (
        <>
          <Searchbar
            style={styles.search}
            placeholder="Search for character..."
            onChangeText={(value) => setSearch(value)}
            value={search}
            onIconPress={searchCharacter}
            onSubmitEditing={searchCharacter}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Inicio")}
            style={styles.button}
          >
            <Text style={styles.textoButon}>Home</Text>
          </TouchableOpacity>

          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                name={item.name}
              />
            )}
          />
        </>
      )}
    </ImageBackground>
  );
}
