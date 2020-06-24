import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer, Text, TouchableRipple, Switch } from "react-native-paper";

export default function DrawerContent(props) {
  const { navigation } = props;
  const [active, setActive] = useState("home");
  const onChangeScreen = screen => {
    setActive(screen);
    navigation.navigate(screen);
  };
  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          label="initial"
          active={active === "home"}
          onPress={() => onChangeScreen("home")}
        />
        <Drawer.Item
          active={active === "popular"}
          label="Popular Movies"
          onPress={() => onChangeScreen("popular")}
        />
        <Drawer.Item
          active={active === "news"}
          label="New Releases"
          onPress={() => onChangeScreen("news")}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
