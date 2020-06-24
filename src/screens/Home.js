import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Title } from "react-native-paper";
import CarouselVertical from "../components/CarouselVertical";
import { getNewMoviesApi } from "../api/movies";
export default function Home() {
  const [newMovies, setNewMovies] = useState(null);

  useEffect(() => {
    getNewMoviesApi().then(response => {
      setNewMovies(response.results);
    });
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {newMovies && (
        <View style={styles.news}>
          <Title style={styles.newTitles}>New Movies</Title>
          <CarouselVertical data={newMovies} />
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  news: {
    marginVertical: 10
  },
  newTitles: {
    marginBottom: 15,
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 22
  }
});
