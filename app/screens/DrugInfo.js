/**
 * Drug Information Screen
 * @author George Chen, UBC VFMP 2025
 */

{
  /* Imports */
}
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { WINDOW } from "../constants/Dimensions";
import DottedLine from "../components/DottedLine";

export default function DrugInfoScreen({ route }) {
  const { drug_info, drug } = route.params;
  // let temp = drug;

  // if (!isNaN(drug.charAt(0))) temp = "_" + temp;
  // const drug_info =
  //   DRUGS[temp.toLowerCase().replace(/\s/g, "_").replace("-", "_")];

  // if (drug_info === undefined) {
  //   navigation.navigate("Formulary");
  //   return;
  // }

  const navigation = useNavigation();
  const fields = Object.keys(drug_info);
  const { colors, font } = useTheme();

  return (
    <View style={styles(colors, font).container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <TouchableOpacity
            style={styles(colors, font).button_quizexit}
            onPress={() => {
              navigation.navigate("Formulary");
            }}
          >
            <Text style={styles(colors, font).text_exitquiz}>{"<"}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 5, alignSelf: "center" }}>
          <Text style={styles(colors, font).title}>{drug}</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
      <ScrollView
        style={styles(colors, font).data}
        contentContainerStyle={{ paddingBottom: 30, paddingTop: 20 }}
      >
        {fields.map((field, key) => (
          <View key={key}>
            <View style={{ flexDirection: "row" }}>
              {/* formatting: split and capitalize words */}
              <Text
                style={{
                  color: colors.text,
                  fontWeight: "bold",
                  flex: 1.1 / Math.pow(WINDOW.scale, 2),
                  marginLeft: "7%",
                  fontFamily: font.style,
                  fontSize: 15 * font.scale,
                }}
              >
                {field
                  .replace("-", " ")
                  .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </Text>
              {/* conditional formatting: is the child an object or an array? */}
              {typeof drug_info[field][0] == "object" ? (
                <View style={{ flex: 4.5, marginRight: "7%" }}>
                  {Object.keys(drug_info[field][0]).map((system, key) => (
                    <View style={{ flexDirection: "row" }} key={key}>
                      <Text
                        style={{
                          color: colors.text,
                          fontFamily: font.style,
                          fontSize: 15 * font.scale,
                        }}
                      >
                        {system}: {drug_info[field][0][system].join(", ")}
                        {"\n"}{" "}
                      </Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text
                  style={{
                    color: colors.text,
                    flex: 4.5,
                    marginRight: "7%",
                    fontFamily: font.style,
                    fontSize: 15 * font.scale,
                  }}
                >
                  {drug_info[field].join("\n\n")}
                </Text>
              )}
            </View>
            <DottedLine />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = (colors, font) =>
  StyleSheet.create({
    button_quizexit: {
      marginLeft: WINDOW.width * 0.02,
      marginBottom: WINDOW.height * 0.01,
      fontFamily: font.style,
      padding: 10,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 40,
    },
    data: {
      fontSize: 15,
      flex: 1,
    },
    title: {
      fontSize: 50 * WINDOW.scale * font.scale,
      color: colors.text,
      fontFamily: font.style,
      marginBottom: 20,
      textDecorationLine: "underline",
      alignSelf: "center",
    },
    text_exitquiz: {
      fontSize: WINDOW.scale * 35 * font.scale,
      color: colors.text,
      fontFamily: font.style,
    },
  });
