/**
 * Learn Pharmacology Screen
 * @author George Chen, UBC VFMP 2025
 */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import NavButton from "../components/NavButton";
import BackButton from "../components/BackButton";
import { WINDOW } from "../constants/Dimensions";
import { Switch, TextInput } from "react-native-paper";
import { lowerCase } from "../utils/LowerCase";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function LearnPharmacologyScreen() {
  const { colors, font } = useTheme();

  // Hooks and handlers for Quiz Settings modal
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = React.useState("");
  const [isRandomOn, setisRandomOn] = useState(false);
  const [isRandomDisabled, setIsRandomDisabled] = useState(false);

  /**
   * Displays modal when Quiz Settings button is pressed.
   */
  const handleQuizSettings = () => {
    setModalVisible(true);
  };

  /**
   * Handler for Randomize Questions switch.
   * Turns switch on and off.
   * @returns
   */
  const toggleSwitch = () => setisRandomOn((previousState) => !previousState);

  /**
   * Handler for Max Questions field.
   * Takes input text and filters all non-numerical characters.
   * @param {string} temp_text text to be filtered
   */
  const filterInput = (temp_text) => {
    temp_text = temp_text.replace(/[^0-9]/g, "");
    setText(temp_text);
    if (temp_text.length != 0 && Number(temp_text) > 0) {
      setisRandomOn(true);
      setIsRandomDisabled(true);
    } else {
      setIsRandomDisabled(false);
    }
  };

  return (
    <View style={styles(colors, font).container}>
      {/* Quiz Settings */}
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles(colors, font).modal}>
          {/* Close Quiz Settings */}
          <MaterialCommunityIcons
            name="close"
            size={40 * WINDOW.scale}
            onPress={() => {
              setModalVisible(false);
            }}
            style={{
              padding: 20 * WINDOW.scale,
              marginTop: 20 * WINDOW.scale,
              marginLeft: 20 * WINDOW.scale,
              color: colors.text,
            }}
          />

          {/* Title */}
          <Text style={styles(colors, font).text_header}>
            {lowerCase("Quiz Settings", global.theme)}
          </Text>

          {/* Randomize Questions Switch */}
          <View
            style={{
              flexDirection: "row",
              marginTop: "10%",
            }}
          >
            <View style={{ width: "50%" }}>
              <Switch
                color="blue"
                onValueChange={toggleSwitch}
                value={isRandomOn}
                style={{ marginLeft: "70%" }}
                disabled={isRandomDisabled}
              />
            </View>

            {/* Randomize Questions Label */}
            <View style={{ width: "50%", justifyContent: "center" }}>
              <Text
                style={{
                  padding: 5,
                  fontSize: 25 * font.scale * WINDOW.scale,
                  marginLeft: "1%",
                  color: colors.text,
                  fontFamily: font.style,
                }}
              >
                {lowerCase("Randomize Questions", global.theme)}
              </Text>
            </View>
          </View>

          {/* Max Questions Input Field */}
          <View style={{ flexDirection: "row", marginTop: "3%" }}>
            <View style={{ width: "50%" }}>
              <TextInput
                label="#"
                value={text}
                inputStyle={{ color: colors.text }}
                onChangeText={(text) => filterInput(text)}
                style={{
                  marginLeft: "70%",
                  width: "20%",
                  height: 50,
                  backgroundColor: colors.formulary_header,
                }}
              />
            </View>

            {/* Max Questions Label */}
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  padding: 12,
                  fontSize: 25 * font.scale * WINDOW.scale,
                  color: colors.text,
                  fontFamily: font.style,
                }}
              >
                {lowerCase("Max Questions (turns randomize on)", global.theme)}
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* Learn Pharmacology Title */}
      <View style={styles(colors, font).horizontalview}>
        <Image
          style={styles(colors, font).clipart}
          source={require("../assets/books.png")}
        />
        <Text style={styles(colors, font).text_header}>
          {lowerCase("Learn Pharmacology", global.theme)}
        </Text>
      </View>

      {/* Nav Buttons to various quizzes */}
      <View>
        <NavButton
          label={lowerCase("MEDD 411 Midterm", global.theme)}
          page="QuizSelect"
          param={{
            exam: "MEDD 411 Midterm",
            randomize: isRandomOn,
            numQuestions: text,
          }}
        />
        <NavButton
          label={lowerCase("MEDD 411 Final", global.theme)}
          page="QuizSelect"
          param={{
            exam: "MEDD 411 Final",
            randomize: isRandomOn,
            numQuestions: text,
          }}
        />

        <NavButton
          label={lowerCase("MEDD 412 Midterm", global.theme)}
          page="QuizSelect"
          param={{
            exam: "MEDD 412 Midterm",
            randomize: isRandomOn,
            numQuestions: text,
          }}
        />
        <NavButton
          label={lowerCase("MEDD 412 Final", global.theme)}
          page="QuizSelect"
          param={{
            exam: "MEDD 412 Final",
            randomize: isRandomOn,
            numQuestions: text,
          }}
        />
      </View>

      {/* Back Button */}
      <BackButton page="Home" />

      {/* Quiz Settings Button */}
      <TouchableOpacity
        style={styles(colors, font).quiz_settings}
        onPress={() => handleQuizSettings()}
      >
        <MaterialCommunityIcons
          name="cog"
          style={{ color: colors.text, fontSize: 20 * font.scale }}
        />
        <Text style={styles(colors, font).text_button}>
          {lowerCase(" Quiz Settings", global.theme)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (colors, font) =>
  StyleSheet.create({
    quiz_settings: {
      flexDirection: "row",
      padding: 20,
      color: colors.text,
    },
    clipart: {
      width: 57,
      height: 61,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    text_header: {
      fontSize: 45 * WINDOW.scale * font.scale,
      fontFamily: font.style,
      color: colors.text,
      padding: "2%",
      alignSelf: "center",
    },
    text_button: {
      color: colors.text,
      fontFamily: font.style,
      fontSize: 22 * font.scale * WINDOW.scale,
      alignSelf: "center",
    },
    horizontalview: {
      flexDirection: "row",
      alignItems: "center",
      padding: "2%",
    },
    modal: {
      backgroundColor: colors.background,
      minHeight: "100%",
    },
  });
