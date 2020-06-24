import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { Text, Title } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { BASE_PATH_IMG } from "../utils/constants";
import { getGenreMovieApi } from "../api/movies";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = Math.round(width * 0.7);

export default function CarouselVertical(props) {
  const { data } = props;
  return (
    <Carousel
      layout={"default"}
      data={data}
      renderItem={item => <RenderItem data={item} />}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
    />
  );
}
function RenderItem(props) {
  const { data } = props;
  const { title, poster_path } = data.item;
  const imageUrl = `${BASE_PATH_IMG}/w500${poster_path}`;
  console.log(title);
  return (
    <TouchableWithoutFeedback onPress={() => console.log("hola")}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Title style={styles.title}>{title}</Title>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 10
  },
  image: {
    width: "100%",
    height: 450,
    borderRadius: 20
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10
  }
});
