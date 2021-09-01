import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Information from "./Information";
import Comics from "./Comics";
import apiParams from "../../config.js";
import axios from "axios";

const Tab = createBottomTabNavigator();

export default function Detail({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters/${route.params.id}`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response.data.data.results[0]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Information"
      tabBarOptions={{
        activeTintColor: "darkred",
      }}
    >
      <Tab.Screen
        name="Information"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator
              size="large"
              color="red"
              style={{ paddingTop: "70%" }}
            />
          ) : (
            <Information
              image={`${data?.thumbnail?.path}.${data.thumbnail.extension}`}
              name={data.name}
              description={data.description}
            />
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name="Comics"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator
              size="large"
              style={{ paddingTop: "70%" }}
              color="red"
            />
          ) : (
            <Comics listComics={data?.comics?.items} />
          )
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
}
