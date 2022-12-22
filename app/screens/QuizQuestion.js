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
} from "react-native";
import { WINDOW } from "../constants/Dimensions";
import Dialog from "react-native-dialog";
import { useNavigation, useTheme } from "@react-navigation/native";
import ConfettiCannon from "react-native-confetti-cannon";
import Modal from "react-native-modal";

import { shuffle } from "../utils/Shuffle";
import { week_mappings } from "../data/quiz/mappings";

export default function QuizQuestionScreen({ route }) {
  /**
   * exam: one of "MEDD 411 Midterm", "MEDD 411 Final", "MEDD 412 Midterm", "MEDD 412 Final".
   * randomize: {bool} should the quiz questions be randomized?
   * numQuestions: {int} max number of questions given to the user
   * selectedWeeks: [String] list of weeks to be included in the quiz
   */
  const { selectedWeeks, randomize, numQuestions, exam } = route.params;
  const { colors, font } = useTheme();

  // Build array of questions based on which weeks are selected by the user
  const questions = [];
  for (const key in selectedWeeks) {
    if (selectedWeeks[key]) {
      questions.push.apply(questions, week_mappings[key]);
    }
  }

  const questionsLength = questions.length;
  let numQuestions_filtered = numQuestions;
  if (numQuestions == 0 || numQuestions > questionsLength)
    // Control for crazy user inputs
    numQuestions_filtered = questionsLength;
  const defaultOrder = [...Array(questionsLength).keys()]; // Question order. Shuffle if randomize is set to true.
  const [questionOrder, setQuestionOrder] = randomize
    ? useState(shuffle(defaultOrder))
    : useState(defaultOrder);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // keeps track of user's current question
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null); // keeps track of user's current selected choice
  const [correctOption, setCorrectOption] = useState(null); // keeps track of current correct choice
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false); // choices should be disabled after user submits
  const [score, setScore] = useState(0); // keeps track of user's current score
  const [showNextButton, setShowNextButton] = useState(false); // next button should be shown after user submits
  const [answerSubmitted, setAnswerSubmitted] = useState(false); // keeps track of if user submitted
  const [showSubmitButton, setShowSubmitButton] = useState(false); // submit button should be shown once a choice is clicked
  const [isSubmitDisabled, setSubmitDisabled] = useState(false); // submit button should be disabled after user submits
  const navigation = useNavigation();

  const [userAnswers, setUserAnswers] = useState([]); // keeps track of all the user's answers for review
  const [modalVisible, setModalVisible] = useState(false); // results modal should be visible if user clicks next on the last question

  const [incorrect, setIncorrect] = useState(0); // keeps track of number of incorrect questions
  const [percent, setPercent] = useState(0); // keeps track of user's percent score
  const [confettiCount, setConfettiCount] = useState(0); // confetti should be displayed if user gets perfect

  const [quizOver, setQuizOver] = useState(false); // quiz review mode once quiz is over
  const [backButtonDisabled, setBackButtonDisabled] = useState(false); // back button should be disabled

  const [explainModalVisible, setExplainModalVisible] = useState(false); // explainModal should be visible if the "Explanation" button is clicked

  const renderHeader = () => {
    const [visible, setVisible] = useState(false); // keeps track of visibility of exit quiz dialog

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
      </View>
    );
  };

  const renderQuestion = () => {
    return (
      <View>
        {/* Question Prompt */}
        <Text
          style={styles(colors, font, null, null, null, null, null).text_prompt}
        >
          {questions[questionOrder[currentQuestionIndex]]?.prompt}
        </Text>
      </View>
    );
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
            </TouchableOpacity>
          )
        )}
      </ScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{ flexDirection: "row", paddingTop: "3%" }}>
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
        <View style={{ flex: 2.5 }}></View>
        {showNextButton &&
          questions[currentQuestionIndex].hasOwnProperty("explain") && (
            <TouchableOpacity
              style={
                styles(colors, font, null, null, null, null, null)
                  .button_explain
              }
              onPress={() => {
                handleExplain();
              }}
            >
              <Text
                style={
                  styles(colors, font, null, null, null, null, null).text_next
                }
              >
                Explanation
              </Text>
            </TouchableOpacity>
          )}
        <View style={{ flex: 2.5 }}></View>
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
      <Modal
        animationType="slide"
        isVisible={modalVisible}
        backdropColor={colors.background}
        backdropOpacity={1}
      >
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
                {parseInt(percent)}%{"\n"}Score
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

  function handleBackdropPress() {
    setExplainModalVisible(false);
  }

  const renderExplanation = () => {
    return (
      <Modal
        animationType="fade"
        isVisible={explainModalVisible}
        transparent={true}
        onBackdropPress={handleBackdropPress}
        avoidKeyboard={true}
      >
        <ScrollView
          style={
            styles(colors, font, null, null, null, null, null).explain_modal
          }
        >
          <View style={{ padding: 20 }}>
            <Text
              style={
                styles(colors, font, null, null, null, null, null).text_choice
              }
            >
              {questions[currentQuestionIndex]["explain"]}
            </Text>
          </View>
        </ScrollView>
      </Modal>
    );
  };

  const handleExitQuiz = () => {
    navigation.navigate("QuizSelect", {
      exam: exam,
      randomize: randomize,
      numQuestions: numQuestions,
    });
    setQuizOver(false);
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

  const handleSubmit = () => {
    setAnswerSubmitted(true);
    validateAnswer();
    // setSubmitDisabled(true);
    setShowSubmitButton(false);
    let temp_userAnswers = userAnswers;
    temp_userAnswers.push(currentOptionSelected);

    setUserAnswers(temp_userAnswers);
  };

  const handleExplain = () => {
    setExplainModalVisible(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 == numQuestions_filtered) {
      // User reaches end of quiz
      setModalVisible(true);
      let temp_incorrect = numQuestions_filtered - score;
      setIncorrect(temp_incorrect);
      setPercent((score / numQuestions_filtered) * 100);
      if (temp_incorrect == 0) setConfettiCount(200);
      setQuizOver(true);
      setShowSubmitButton(false);
    } else if (!quizOver) {
      // Quiz is not over, advance question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
      setShowSubmitButton(false);
      setAnswerSubmitted(false);
      setSubmitDisabled(false);
    } else {
      // Quiz is over, advance question (during question review)
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
        {renderExplanation()}
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
    button_explain: {
      flex: 2.5,
      alignSelf: "center",
      backgroundColor: colors.button,
      borderRadius: 10,
      padding: 10,
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
      height: WINDOW.height * 0.075,

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      paddingHorizontal: 20,

      marginVertical: WINDOW.height * 0.01,
      marginLeft: WINDOW.width * 0.02,
      marginRight: WINDOW.width * 0.02,
    },
    modal: {
      backgroundColor: colors.background,
      minHeight: "100%",
    },
    text_choice: {
      color: answerSubmitted ? colors.text_submitted : colors.text,
      fontSize: WINDOW.scale * 20 * font.scale,
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
      fontSize: WINDOW.scale * 26 * font.scale,
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
      marginTop: "15%",
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
    explain_modal: {
      flexDirection: "column",
      width:
        WINDOW.width > WINDOW.height ? WINDOW.width * 0.5 : WINDOW.width * 0.8,
      alignSelf: "center",
      borderRadius: 25,
      backgroundColor: colors.background,
      maxHeight: "30%",
    },
    text_buttons: {
      fontSize: 18 * font.scale,
      fontFamily: font.style,
      color: colors.text,
    },
  });
