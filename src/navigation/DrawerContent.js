import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer, Text, TouchableRipple, Switch } from "react-native-paper";
import usePreferences from "../hooks/usePreferences";

export default function DrawerContent(props) {
  const { navigation } = props;
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = usePreferences();
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
      <Drawer.Section title="Options">
        <TouchableRipple>
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <Switch value={theme === "dark"} onValueChange={toggleTheme} />
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12
  }
});
