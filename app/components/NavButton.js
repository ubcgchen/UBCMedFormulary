/**
 * Navigation Button component
 * @author George Chen, UBC VFMP 2025
 */

import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { WINDOW } from "../constants/Dimensions";

/**
 *
 * @param {*} param0
 * @returns
 */
function NavButton({ label, page, param }) {
  const navigation = useNavigation();
  const { colors, font } = useTheme();

  return (
    <TouchableOpacity
      style={styles(colors, font).button_nav}
      onPress={() => {
        navigation.navigate(page, param);
      }}
    >
      <Text style={styles(colors, font).text_buttons}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = (colors, font) =>
  StyleSheet.create({
    button_nav: {
      alignItems: "center",
      backgroundColor: colors.button,
      padding: 16 * WINDOW.scale,
      borderColor: colors.border,
      borderWidth: 1.5,
      borderRadius: 50,
      marginBottom: 25 * WINDOW.scale,
      marginTop: 20,
      width: 400 * WINDOW.scale,
      height: 75 * WINDOW.scale,
    },
    text_buttons: {
      fontSize: 27 * font.scale * WINDOW.scale,
      color: colors.button_text,
      fontFamily: font.style,
    },
  });

export default NavButton;
