import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import WeatherForecast from "../ui/WeatherForecast";

function Home() {
  return (
    <View style={styles.cont}>
      <ImageBackground
        style={styles.img}
        source={{ uri: "https://maptons.info/hot/10/486/392.png" }}
        resizeMode="cover"
      >
        <WeatherForecast />
      </ImageBackground>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  img: {
    flex: 1,
  },
});
