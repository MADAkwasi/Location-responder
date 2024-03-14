import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function WeatherForecast() {
  const [weather, setWeather] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setIsFetching(true);
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=6.673175&lon=-1.565423&appid=7b849388139e2285cfc212acf698b619`
          );
          const data = await res.json();

          setWeather(data.weather[0]);
        } catch (err) {
          console.log(err);
        } finally {
          setIsFetching(false);
        }
      }

      return fetchData;
    },
    [weather, setWeather]
  );

  return (
    <>
      {!isFetching && (
        <View style={styles.forecastCont}>
          <Image
            style={styles.img}
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
            }}
          />
          <Text style={styles.txt}>{weather.description}</Text>
        </View>
      )}
    </>
  );
}

export default WeatherForecast;

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
  },
  forecastCont: {
    backgroundColor: "#3743ed",
    position: "absolute",
    bottom: 50,
    right: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontFamily: "OpenSans",
    bottom: -35,
    textAlign: "center",
    position: "absolute",
  },
});
