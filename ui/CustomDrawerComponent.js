import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import DrawerItem from "../components/DrawerItem";
import { useNavigation } from "@react-navigation/native";
import { useGlobalState } from "../context/GlobalStateContext";

function CustomDrawerComponent() {
  const navigation = useNavigation();
  const { student } = useGlobalState();
  const { firstName, lastName } = student;

  return (
    <View>
      <View style={styles.cont}>
        <Image
          style={styles.img}
          source={require("../assets/images/profile.jpg")}
        />
        <View style={styles.txtCont}>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.link}>View Profile</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.listCont}>
        <DrawerItem
          label="Settings"
          icon="settings-outline"
          navigate={"Settings"}
        />
        <DrawerItem label="Support" icon="help-circle" navigate="Support" />
        <DrawerItem label="Safety" icon="shield-checkmark" navigate="Safety" />
        <DrawerItem
          label="Log out"
          icon="exit-outline"
          navigate="Log In"
          reset={true}
        />
      </View>
      <View style={styles.footer}>
        <DrawerItem
          style={{ paddingBottom: 22, paddingHorizontal: 0, marginRight: 15 }}
          label="About"
          icon="information-circle-outline"
          navigate="About"
        />
      </View>
    </View>
  );
}

export default CustomDrawerComponent;

const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },

  cont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 10,
    paddingBottom: 25,
    paddingTop: 75,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontFamily: "OpenSans",
  },
  link: {
    textAlign: "center",
    color: "#05b31c",
    fontSize: 14,
  },
  txtCont: {
    gap: 3,
  },
  listCont: {
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 400,
    marginBottom: 10,
    paddingTop: 35,
    marginRight: 3,
    gap: 5,
  },
  footer: {
    height: 220,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 3,
  },
});
