import React from "react";
import { IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Popular from "../screens/Popular";
import Movie from "../screens/Movie";
import News from "../screens/News";
import Search from "../screens/Search";

const Stack = createStackNavigator();

export default function StackNavigation() {
  const buttonLeft = () => {
    return <IconButton icon="menu" onPress={() => console.log("its open")} />;
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: "the movies app", headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{ title: "movies" }}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{ title: "popularp" }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{ title: "news pag" }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{ title: "search news" }}
      />
    </Stack.Navigator>
  );
}
