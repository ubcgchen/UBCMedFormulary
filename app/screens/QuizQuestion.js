/**
 * Quiz Question Screen
 * @author George Chen, UBC VFMP 2025
 */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { WINDOW } from "../constants/Dimensions";
import Dialog from "react-native-dialog";
import { useNavigation, useTheme } from "@react-navigation/native";
import ConfettiCannon from "react-native-confetti-cannon";

import { shuffle } from "../utils/Shuffle";

import * as quizzes from "../data/quiz";

export default function QuizQuestionScreen({ route }) {
  const { selectedWeeks, randomize, numQuestions } = route.params;
  const { colors, font } = useTheme();

  let week_mappings = {
    "Intro to Pharmacodynamics": quizzes.pharmacodynamics,
    "Intro to Pharmacokinetics": quizzes.pharmacokinetics,
    "Fetal Development": quizzes.fetalDevelopment,
    "Breast Mass": quizzes.breastMass,
    "Immunology & Allergy": quizzes.immunologyAndAllergy,
    "Pneumonia and Cough": quizzes.pneumoniaAndCough,
    "Chronic Obstructive Pulmonary Disease (COPD)": quizzes.COPD,
    "Electrolyte Disturbance": quizzes.electrolyteDisturbance,
    Hypertension: quizzes.hypertension,
    "Heart Murmurs": quizzes.heartMurmur,
    "Upper Gastrointestinal Tract": quizzes.upperGI,
    "Nutrient Malabsorption": quizzes.nutrientMalabsorption,
    "Diabetes Mellitus": quizzes.diabetesMellitus,
    "Lower Gastrointestinal Tract": quizzes.lowerGI,
    Infertility: quizzes.infertility,
    Pregnancy: quizzes.pregnancy,
  };

  const questions = [];

  for (const key in selectedWeeks) {
    if (selectedWeeks[key]) {
      questions.push.apply(questions, week_mappings[key]);
    }
  }

  const questionsLength = questions.length;
  let numQuestions_filtered = numQuestions;
  if (numQuestions == 0 || numQuestions > questionsLength)
    numQuestions_filtered = questionsLength;
  const defaultOrder = [...Array(questionsLength).keys()];
  const [questionOrder, setQuestionOrder] = randomize
    ? useState(shuffle(defaultOrder))
    : useState(defaultOrder);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const navigation = useNavigation();

  const [userAnswers, setUserAnswers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [incorrect, setIncorrect] = useState(0);
  const [percent, setPercent] = useState(0);
  const [confettiCount, setConfettiCount] = useState(0);

  const [quizOver, setQuizOver] = useState(false);
  const [backButtonDisabled, setBackButtonDisabled] = useState(false);

  const renderHeader = () => {
    const [visible, setVisible] = React.useState(false);

    return (
      <View>
        {/* Question Counter, Exit Button */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={
              styles(colors, font, null, null, null, null, null).button_quizexit
            }
            onPress={() => {
              setVisible(true);
            }}
            hitSlop={{ top: 200, bottom: 50, left: 200, right: 50 }}
          >
            <Text
              style={
                styles(colors, font, null, null, null, null, null).text_exitquiz
              }
            >
              {"<"}
            </Text>
          </TouchableOpacity>
          <Dialog.Container
            visible={visible}
            onBackdropPress={() => setVisible(false)}
          >
            <Dialog.Title>
              <Text style={{ fontFamily: font.style }}>Exit Quiz</Text>
            </Dialog.Title>
            <Dialog.Description>
              <Text style={{ fontFamily: font.style }}>
                Would you like to leave the quiz? All data will be lost.
              </Text>
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
            <Dialog.Button
              label="Leave"
              onPress={() => {
                handleExitQuiz();
              }}
            />
          </Dialog.Container>
          <Text
            style={
              styles(colors, font, null, null, null, null, null).text_numbering
            }
          >
            {currentQuestionIndex + 1} / {numQuestions_filtered}
          </Text>
        </View>

        {/* Question Prompt */}
      </View>
    );
  };

  const handleExitQuiz = () => {
    navigation.navigate("Learn");
    setQuizOver(false);
  };

  const renderQuestion = () => {
    return (
      <View>
        <Text
          style={styles(colors, font, null, null, null, null, null).text_prompt}
        >
          {questions[questionOrder[currentQuestionIndex]]?.prompt}
        </Text>
      </View>
    );
  };

  const highlightChoice = (selectedOption) => {
    let correct_option =
      questions[questionOrder[currentQuestionIndex]]["correct"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setShowSubmitButton(true);
  };

  const validateAnswer = () => {
    setIsOptionsDisabled(true);
    if (currentOptionSelected == correctOption) {
      setScore(score + 1);
    }
    setShowNextButton(true);
  };

  const renderChoices = () => {
    return (
      <ScrollView>
        {questions[questionOrder[currentQuestionIndex]]?.choices.map(
          (choice, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => highlightChoice(choice)}
              style={
                styles(
                  colors,
                  font,
                  choice,
                  correctOption,
                  currentOptionSelected,
                  answerSubmitted,
                  null
                ).button_choice
              }
              activeOpacity={1}
              disabled={isOptionsDisabled}
            >
              <Text
                style={
                  styles(colors, font, null, null, null, null, null).text_choice
                }
              >
                {choice}
              </Text>
              {choice == correctOption && answerSubmitted ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: colors.correct_outline,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="check"
                    style={{ color: "#000", fontSize: 20 }}
                  />
                </View>
              ) : choice == currentOptionSelected && answerSubmitted ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: colors.incorrect_outline,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="close"
                    style={{ color: "#FFF", fontSize: 20 }}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          )
        )}
      </ScrollView>
    );
  };

  const handleSubmit = () => {
    setAnswerSubmitted(true);
    validateAnswer();
    setSubmitDisabled(true);
    let temp_userAnswers = userAnswers;
    temp_userAnswers.push(currentOptionSelected);

    setUserAnswers(temp_userAnswers);
    console.log(temp_userAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 == numQuestions_filtered) {
      setModalVisible(true);
      let temp_incorrect = numQuestions_filtered - score;
      setIncorrect(temp_incorrect);
      setPercent((score / numQuestions_filtered) * 100);
      if (temp_incorrect == 0) setConfettiCount(200);
      setQuizOver(true);
      setShowSubmitButton(false);
    } else if (!quizOver) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
      setShowSubmitButton(false);
      setAnswerSubmitted(false);
      setSubmitDisabled(false);
    } else {
      // Quiz is over
      setBackButtonDisabled(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(userAnswers[currentQuestionIndex + 1]);
      setAnswerSubmitted(true);
      setCorrectOption(questions[currentQuestionIndex + 1]["correct"]);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex == 0) {
      setBackButtonDisabled(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentOptionSelected(userAnswers[currentQuestionIndex - 1]);
      setCorrectOption(questions[currentQuestionIndex - 1]["correct"]);
      setAnswerSubmitted(true);
    }
  };

  const renderFooter = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        {quizOver && (
          <TouchableOpacity
            style={
              styles(colors, font, null, null, null, null, null).button_back
            }
            disabled={backButtonDisabled}
            onPress={() => {
              handleBack();
            }}
          >
            <Text
              style={
                styles(colors, font, null, null, null, null, null).text_next
              }
            >
              {"<<"} Back
            </Text>
          </TouchableOpacity>
        )}
        <View style={{ flex: 5 }}></View>
        {showNextButton && (
          <TouchableOpacity
            style={
              styles(colors, font, null, null, null, null, null).button_next
            }
            onPress={() => {
              handleNext();
            }}
          >
            <Text
              style={
                styles(colors, font, null, null, null, null, null).text_next
              }
            >
              Next {">>"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderSubmitButton = () => {
    if (showSubmitButton) {
      return (
        <TouchableOpacity
          style={
            styles(colors, font, null, null, null, null, isSubmitDisabled)
              .button_submit
          }
          onPress={() => {
            handleSubmit();
          }}
          disabled={isSubmitDisabled}
          activeOpacity={1}
        >
          <Text
            style={
              styles(colors, font, null, null, null, null, isSubmitDisabled)
                .text_submit
            }
          >
            Submit
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const renderResults = () => {
    return (
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles(colors, font).modal}>
          <ConfettiCannon
            count={confettiCount}
            origin={{ x: -10, y: 0 }}
            fadeOut={true}
            autoStartDelay={200}
          />
          <View
            style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}
          >
            <Text
              style={
                styles(colors, font, null, null, null, null, null).text_title
              }
            >
              Quiz Summary
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={
                  styles(colors, font, null, null, null, null, null).text_result
                }
              >
                {score}/{numQuestions_filtered}
                {"\n"}Correct
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={
                  styles(colors, font, null, null, null, null, null).text_result
                }
              >
                {incorrect}/{numQuestions_filtered}
                {"\n"}Incorrect
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={
                  styles(colors, font, null, null, null, null, null).text_result
                }
              >
                {percent}%{"\n"}Score
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <TouchableOpacity
              style={
                styles(colors, font, null, null, null, null, null).button_nav
              }
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text
                style={
                  styles(colors, font, null, null, null, null, null)
                    .text_buttons
                }
              >
                {"Review Quiz"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={styles(colors, font, null, null, null, null, null).container}
      >
        {renderHeader()}
        {renderQuestion()}
        {renderChoices()}
        {renderSubmitButton()}
        {renderFooter()}
        {renderResults()}
      </View>
    </View>
  );
}

const styles = (
  colors,
  font,
  choice,
  correctOption,
  currentOptionSelected,
  answerSubmitted,
  isSubmitDisabled
) =>
  StyleSheet.create({
    button_submit: {
      backgroundColor: isSubmitDisabled
        ? colors.button_disabled
        : colors.button,
      alignSelf: "center",
      justifyContent: "center",
      width: 250,
      height: 50,
      borderRadius: 20,
      marginTop: 20,
    },
    button_back: {
      flex: 1,
      justifyContent: "center",
      width: 100,
      height: 50,
      alignSelf: "flex-start",
      marginLeft: 30,
    },
    button_next: {
      flex: 1,
      justifyContent: "center",
      width: 100,
      height: 50,
      alignSelf: "flex-end",
      marginRight: 30,
    },
    text_submit: {
      textAlign: "center",
      color: isSubmitDisabled ? colors.text_disabled : colors.text,
      fontSize: 25 * WINDOW.scale * font.scale,
      fontFamily: font.style,
    },
    text_next: {
      textAlign: "center",
      color: colors.text,
      fontSize: 25 * WINDOW.scale * font.scale,
      fontFamily: font.style,
    },
    button_quizexit: {
      zIndex: 500,
      marginLeft: WINDOW.width * 0.02,
      marginBottom: WINDOW.height * 0.01,
      fontFamily: font.style,
      padding: 10,
    },
    container: {
      flex: 1,
      paddingVertical: 40,
      backgroundColor: colors.background,
      position: "relative",
    },
    button_choice: {
      borderWidth: 2,
      borderColor: answerSubmitted
        ? choice == correctOption
          ? colors.correct_outline
          : choice == currentOptionSelected
          ? colors.incorrect_outline
          : colors.button_outline
        : choice == currentOptionSelected
        ? colors.selected_outline
        : colors.button_outline,
      backgroundColor: answerSubmitted
        ? choice == correctOption
          ? colors.correct
          : choice == currentOptionSelected
          ? colors.incorrect
          : colors.button
        : choice == currentOptionSelected
        ? colors.selected
        : colors.button,
      borderRadius: 50,
      height: WINDOW.height * 0.08,

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      paddingHorizontal: 20,

      marginVertical: WINDOW.height * 0.015,
      marginLeft: WINDOW.width * 0.02,
      marginRight: WINDOW.width * 0.02,
    },
    modal: {
      backgroundColor: colors.background,
      minHeight: "100%",
    },
    text_choice: {
      color: answerSubmitted ? colors.text_submitted : colors.text,
      fontSize: WINDOW.scale * 21 * font.scale,
      fontFamily: font.style, // Determine font based on platform
    },
    text_numbering: {
      color: colors.text_disabled,
      fontSize: WINDOW.scale * 30 * font.scale,
      marginLeft: 7,
      marginBottom: 7,
      fontFamily: font.style,
    },
    text_prompt: {
      color: colors.text,
      fontSize: WINDOW.scale * 28 * font.scale,
      marginLeft: WINDOW.width * 0.056,
      marginRight: WINDOW.width * 0.05,
      marginBottom: WINDOW.height * 0.03,
      fontFamily: font.style,
    },
    text_exitquiz: {
      fontSize: WINDOW.scale * 35 * font.scale,
      color: colors.text,
      fontFamily: font.style,
    },
    text_title: {
      marginTop: "10%",
      fontSize: WINDOW.scale * 40 * font.scale,
      color: colors.text,
      fontFamily: font.style,
    },
    text_result: {
      fontSize: WINDOW.scale * 25 * font.scale,
      fontFamily: font.style,
      color: colors.text,
    },
    button_nav: {
      alignItems: "center",
      backgroundColor: colors.button,
      padding: 12,
      borderColor: colors.button_outline,
      borderWidth: 1.5,
      borderRadius: 50,
      marginBottom: 20,
      marginTop: 20,
      width: 275,
      height: 50,
    },
    text_buttons: {
      fontSize: 18 * font.scale,
      fontFamily: font.style,
      color: colors.text,
    },
  });
