import { shuttle } from "../constants/SettingsOptions";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Row from "./SettingsRow";
import Txt from "./Text";

function ShuttleOptions() {
  return (
    <>
      {shuttle.map((el, i) => (
        <Row key={i}>
          <MaterialIcons name={el.icon} size={24} color="black" />
          <Txt style={{ textAlign: "left", fontSize: 15 }}>{el.title}</Txt>
        </Row>
      ))}
    </>
  );
}

export default ShuttleOptions;
