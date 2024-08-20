import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import WeatherForecast from "../ui/WeatherForecast";
import MapView, { Marker } from "react-native-maps";
import useGetActiveShuttles from "../providers/shuttleProviders";
import { useGlobalState } from "../context/GlobalStateContext";
import * as Location from "expo-location";

function Home() {
  const { shuttles } = useGetActiveShuttles();
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLat(loc.coords.latitude);
      setLng(loc.coords.longitude);
    })();
  }, []);

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
          description="KSB - Commercial Area || Driver: Kwaku Manu"
        >
          <View style={styles.markerCont}>
            <Image
              source={require("../assets/images/black_marker.png")}
              style={styles.markerImg}
              resizeMode="contain"
            />
          </View>
        </Marker>
        <Marker coordinate={{ latitude: lat, longitude: lng }} />
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
