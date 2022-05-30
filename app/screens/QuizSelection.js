/**
 * Quiz Selection Screen
 * @author George Chen, UBC VFMP 2025
 */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { Checkbox } from "react-native-paper";

import { WINDOW } from "../constants/Dimensions";
import { m411Midterm, m411Final } from "../data/weeks";
import { lowerCase } from "../utils/LowerCase";

const file_mappings = {
  "MEDD 411 Midterm": m411Midterm,
  "MEDD 411 Final": m411Final,
};

export default function QuizSelectionScreen({ route }) {
  /**
   * exam: one of "MEDD 411 Midterm", "MEDD 411 Final", "MEDD 412 Midterm", "MEDD 412 Final". To be used with file_mappings
   * randomize: {bool} should the quiz questions be randomized?
   * numQuestions: {int} max number of questions given to the user
   * [String] List of weeks included in the selected exam
   */
  const { exam, randomize, numQuestions } = route.params;
  const weeks = file_mappings[exam];

  const { colors, font } = useTheme();
  const navigation = useNavigation();

  /**
   * week_mappings: {Object} Maps weeks to whether or not they are selected. Example:
   *    {
   *      "Diabetes Mellitus": false,
   *      "Electrolyte Disturbance": true,
   *      ...
   *    }
   */
  let week_mappings = {};
  weeks.forEach((item) => {
    week_mappings[item] = false;
  });

  const [selectedWeeks, setSelectedWeeks] = useState(week_mappings);
  const [disableStart, setDisableStart] = useState(true);

  /**
   * Updates selectedWeeks based on user input
   * @param {String} label name of the week that was just toggled
   */
  const handleSelection = (label) => {
    let updated_value = selectedWeeks;
    updated_value[label] = !updated_value[label]; // true -> false, false -> true

    // Update selectedWeeks
    setSelectedWeeks((selectedWeeks) => {
      return { ...selectedWeeks, ...updated_value };
    });

    // If the user has not selected any weeks, disable the Start Quiz Button
    let allFalse = Object.values(selectedWeeks).every(
      (value) => value === false
    );
    if (allFalse) {
      setDisableStart(true);
    } else {
      setDisableStart(false);
    }
  };

  /**
   * Handles the "blanket" buttons Select All and De-select All.
   * @param {bool} isSelectAllPressed did the user press Select All?
   */
  const handleBlanketButton = (isSelectAllPressed) => {
    let temp = week_mappings;
    Object.keys(temp).forEach((v) => (temp[v] = isSelectAllPressed));
    setSelectedWeeks(temp);
    setDisableStart(!isSelectAllPressed);
  };

  return (
    <View style={styles(null, colors, font).container}>
      {/* Title */}
      <View>
        <Text style={styles(null, colors, font).text_header}>
          {lowerCase(exam + " Quizzes", global.theme)}
        </Text>
        <Text style={styles(null, colors, font).text_blurb}>
          Improve your pharmacology knowledge! Select the CBL cases you want to
          be quizzed on
        </Text>
      </View>

      {/* Select All and De-select All buttons */}
      <View style={{ flexDirection: "row" }}>
        {/* Select All */}
        <TouchableOpacity
          onPress={() => {
            handleBlanketButton(true);
          }}
          style={styles(null, colors, font).button}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: font.style,
              fontSize: 15 * font.scale,
            }}
          >
            {lowerCase("Select All", global.theme)}
          </Text>
        </TouchableOpacity>

        {/* De-select All */}
        <TouchableOpacity
          onPress={() => {
            handleBlanketButton(false);
          }}
          style={styles(null, colors, font).button}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: font.style,
              fontSize: 15 * font.scale,
            }}
          >
            {lowerCase("De-select All", global.theme)}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quiz Selection */}
      <ScrollView style={{ flex: 1 }}>
        {weeks.map((week, key) => (
          <Checkbox.Item
            key={key}
            label={lowerCase(week, global.theme)}
            status={selectedWeeks[week] ? "checked" : "unchecked"}
            onPress={() => {
              handleSelection(week);
            }}
            labelStyle={{
              color: colors.text,
              fontFamily: font.style,
              fontSize: 15 * font.scale,
            }}
            style={{
              backgroundColor: selectedWeeks[week]
                ? colors.button
                : colors.background,
            }}
          />
        ))}
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={{ flex: 0.11 }}>
        <BackButton page="Learn" />
        <TouchableOpacity
          style={styles(null, colors, font).button_start}
          onPress={() =>
            navigation.navigate("QuizQuestion", {
              selectedWeeks: selectedWeeks,
              exam: exam,
              randomize: randomize,
              numQuestions: numQuestions,
            })
          }
          disabled={disableStart}
        >
          <Text style={styles(disableStart, colors, font).text_buttons}>
            {lowerCase("Start Quiz", global.theme)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = (disableStart, colors, font) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.button,
      padding: 10,
      marginLeft: 20,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 10,
    },
    button_start: {
      position: "absolute",
      right: 20,
      bottom: 20,
      padding: 10,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    text_blurb: {
      alignSelf: "center",
      fontSize: 15 * font.scale,
      marginBottom: WINDOW.height * 0.02,
      marginLeft: 25 * WINDOW.scale,
      marginRight: 25 * WINDOW.scale,
      color: colors.text,
      fontFamily: font.style,
    },
    text_buttons: {
      fontSize: 18 * font.scale,
      fontFamily: font.style,
      color: disableStart ? colors.text_disabled : colors.text,
    },
    text_header: {
      alignSelf: "center",
      fontFamily: font.style,
      fontSize: 35 * font.scale * WINDOW.scale,
      marginBottom: WINDOW.height * 0.02,
      marginTop: WINDOW.height * 0.07,
      color: colors.text,
    },
  });
