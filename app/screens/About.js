import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { lowerCase } from "../utils/LowerCase";
import { WINDOW } from "../constants/Dimensions";

import { citations } from "../data/Citations";
import { credits } from "../data/Credits";

import BackButton from "../components/BackButton";

export default function AboutScreen() {
  const { colors, font } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.2 }}>
        <Text style={styles(colors, font).text_header}>
          {lowerCase("About", global.theme)}
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
      <Text style={styles(colors, font).subheader}>Credits</Text>
        {credits.map((credit, key) => (
          <Text style={styles(colors, font).text} key={key}>
            {lowerCase(credit, global.theme)}
          </Text>
        ))}
        <Text>{"\n"}</Text>
        <Text style={styles(colors, font).subheader}>Disclaimer</Text>
        <Text style={styles(colors, font).text}>The purpose of this app is to help you gain a deeper understanding of the material covered in the UBC MDUP.</Text>
        <Text>{"\n"}</Text>
        <Text style={styles(colors, font).subheader}>{"Sources\n"}</Text>
        {citations.map((citation, key) => (
          <Text style={styles(colors, font).text} key={key}>
            {lowerCase(citation, global.theme)}
          </Text>
        ))}
      </ScrollView>
      <View style={{ flex: 0.2 }}>
        <BackButton page="Home" />
      </View>
    </View>
  );
}

const styles = (colors, font) =>
  StyleSheet.create({
    text_header: {
      color: colors.button_text,
      fontFamily: font.style,
      fontSize: 50 * font.scale * WINDOW.scale,
      alignSelf: "center",
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: 50,
    },
    text: {
      color: colors.button_text,
      fontFamily: font.style,
      fontSize: 27 * font.scale * WINDOW.scale,
      marginLeft: "7%",
      marginRight: "7%",
      padding: 5,
    },
    subheader: {
      color: colors.button_text,
      fontFamily: font.style,
      fontSize: 27 * font.scale * WINDOW.scale,
      marginLeft: "3%",
      fontWeight: "bold",
    },
  });
