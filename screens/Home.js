import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import WeatherForecast from "../ui/WeatherForecast";
import MapView, { Marker } from "react-native-maps";
import useGetActiveShuttles from "../providers/shuttleProviders";
import { useGlobalState } from "../context/GlobalStateContext";

function Home() {
  const { shuttles } = useGetActiveShuttles();
  const { token, setToken } = useGlobalState();

  return (
    <View style={styles.cont}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.674239,
          longitude: -1.5675002,
          latitudeDelta: 0.0032,
          longitudeDelta: 0.0001,
        }}
      >
        <Marker
          coordinate={{ latitude: 6.674239, longitude: -1.5675002 }}
          title="Shuttle 1"
          description="Campus - Gaza || Driver: Kwaku Manu"
        >
          <View style={styles.markerCont}>
            <Image
              source={require("../assets/images/black_marker.png")}
              style={styles.markerImg}
              resizeMode="contain"
            />
          </View>
        </Marker>
      </MapView>
      <WeatherForecast />
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
  map: {
    width: "100%",
    height: "100%",
  },
  markerCont: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  markerImg: {
    width: "100%",
    height: "100%",
  },
});
