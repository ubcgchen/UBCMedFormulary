import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import { DEFAULT_STYLE } from "../constants/Styles";

function BackButton({ page }) {
  const navigation = useNavigation();
  const { colors, font } = useTheme();

  return (
    <TouchableOpacity
      style={styles(colors, font).button_back}
      onPress={() => {
        navigation.navigate(page);
      }}
      hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
    >
      <Text style={styles(colors, font).text_buttons}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = (colors, font) =>
  StyleSheet.create({
    button_back: {
      position: "absolute",
      left: 10,
      bottom: 10,
      padding: 20,
      backgroundColor: colors.background,
      borderRadius: 15,
    },
    text_buttons: {
      color: colors.button_text,
      fontSize: 18 * font.scale,
      fontFamily: font.style,
    },
  });

export default BackButton;
