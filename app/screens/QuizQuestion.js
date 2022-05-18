import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { WINDOW } from '../constants/Dimensions';
import { DEFAULT_STYLE } from '../constants/Styles';
import Dialog from "react-native-dialog";
import { useNavigation } from '@react-navigation/native';

import { shuffle } from '../utils/Shuffle';

import * as quizzes from '../data/quiz'

const thisStyle = DEFAULT_STYLE

export default function QuizQuestionScreen({route}) {
  const { selectedWeeks, exam, randomize, numQuestions } = route.params;
  
  let week_mappings = {
    "Intro to Pharmacodynamics": quizzes.pharmacodynamics,
    "Intro to Pharmacokinetics": quizzes.pharmacokinetics,
    "Fetal Development": quizzes.fetalDevelopment,
    "Breast Mass": quizzes.breastMass,
    "Immunology & Allergy": quizzes.immunologyAndAllergy,
    "Pneumonia and Cough": quizzes.pneumoniaAndCough,
    "Chronic Obstructive Pulmonary Disease (COPD)": quizzes.COPD,
    "Electrolyte Disturbance": quizzes.electrolyteDisturbance,
    "Hypertension": quizzes.hypertension,
    "Heart Murmurs": quizzes.heartMurmur,
    "Upper Gastrointestinal Tract": quizzes.upperGI,
    "Nutrient Malabsorption": quizzes.nutrientMalabsorption,
    "Diabetes Mellitus": quizzes.diabetesMellitus,
    "Lower Gastrointestinal Tract": quizzes.lowerGI,
    "Infertility": quizzes.infertility,
    "Pregnancy": quizzes.pregnancy
  }

  const questions = [];

  for (const key in selectedWeeks) {
    if (selectedWeeks[key]) {
      questions.push.apply(questions, week_mappings[key])
    }
  }

  const questionsLength = questions.length
  if (numQuestions == 0) numQuestions = questionsLength
  const defaultOrder = [...Array(questionsLength).keys()]
  const [questionOrder, setQuestionOrder] = randomize ? useState(shuffle(defaultOrder)) : useState(defaultOrder)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0)
  const [visible, setVisible] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const navigation = useNavigation();

  const renderHeader = () => {
    return(
      <View>
        {/* Question Counter, Exit Button */}
        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles(null, null, null, null, null).button_quizexit} onPress={() => {setVisible(true)}}>
            <Text style={styles(null, null, null, null, null).text_exitquiz}>{'<'}</Text>
          </TouchableOpacity>
          <Dialog.Container visible={visible} onBackdropPress={() => setVisible(false)}>
                <Dialog.Title>Exit Quiz</Dialog.Title>
                <Dialog.Description>
                    Would you like to leave your current quiz? All progress will be lost.
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
                <Dialog.Button label="Leave" onPress={() => navigation.navigate("Learn")} />
          </Dialog.Container>
          <Text style={styles(null, null, null, null, null).text_numbering}>{currentQuestionIndex+1} / {numQuestions}</Text>
        </View>

        {/* Question Prompt */}
      </View>
    );
  }
  
  const renderQuestion = () => {
    return(
      <View>
        <Text style={styles(null, null, null, null, null).text_prompt}>
          {questions[questionOrder[currentQuestionIndex]]?.prompt}
        </Text>
      </View>
    );
  }

  const highlightChoice = (selectedOption) => {
    let correct_option = questions[currentQuestionIndex]["correct"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setShowSubmitButton(true);
  }

  const validateAnswer = () => {
    setIsOptionsDisabled(true);
    if (currentOptionSelected == correctOption) {
      setScore(score+1)
    }
    setShowNextButton(true)
  }

  const renderChoices = () => {
    return(
      <ScrollView>
        {
          questions[currentQuestionIndex]?.choices.map((choice, key) => (
            <TouchableOpacity key = {key}
                              onPress={()=> highlightChoice(choice)} 
                              style = {styles(choice, correctOption, currentOptionSelected, answerSubmitted, null).button_choice}
                              activeOpacity={1}
                              disabled={isOptionsDisabled}>
              <Text style={styles(null, null, null, null, null).text_choice}>{choice}</Text>
              {
                choice==correctOption && answerSubmitted ? (
                    <View style={{
                        width: 30, height: 30, borderRadius: 30/2,
                        backgroundColor: thisStyle.correct_outline,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <MaterialCommunityIcons name="check" style={{color: "#000", fontSize: 20}} />
                    </View>
                ): choice == currentOptionSelected && answerSubmitted ? (
                    <View style={{
                        width: 30, height: 30, borderRadius: 30/2,
                        backgroundColor: thisStyle.incorrect_outline,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <MaterialCommunityIcons name="close" style={{color: "#FFF", fontSize: 20}} />
                    </View>
                ) : null
              }
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    );
  }

  const handleSubmit = () => {
      setAnswerSubmitted(true);
      validateAnswer();
      setSubmitDisabled(true);
  }

  const handleNext = () => {
      if (currentQuestionIndex + 1 == numQuestions) {
          navigation.navigate("Results", {points: score, total: numQuestions, exam: exam, randomize:randomize, numQuestions: numQuestions})
      } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
          setCurrentOptionSelected(null)
          setIsOptionsDisabled(false)
          setShowNextButton(false)
          setShowSubmitButton(false)
          setAnswerSubmitted(false)
          setSubmitDisabled(false)
      }
  }

  const renderNextButton = () => {
      if (showNextButton) {
          return (
              <TouchableOpacity style={styles(null, null, null, null, null).button_next} onPress={() => {handleNext()}}>
                  <Text style={styles(null, null, null, null, null).text_next}>Next {'>>'}</Text>
              </TouchableOpacity>
          )
      } else {
          return null
      }
  }

  const renderSubmitButton = () => {
      if (showSubmitButton) {
          return (
            <TouchableOpacity style={styles(null, null, null, null, isSubmitDisabled).button_submit} 
                              onPress={() => {handleSubmit()}} disabled={isSubmitDisabled}
                              activeOpacity = {1}>
                <Text style={styles(null, null, null, null, isSubmitDisabled).text_submit}>Submit</Text>
            </TouchableOpacity>
          )
      } else {
          return null
      }
  }

  return (
    <View style={{flex:1}}>
      <View style={styles(null, null, null, null, null).container}>
        {renderHeader()}        
        {renderQuestion()}
        {renderChoices()}
        {renderSubmitButton()}
        {renderNextButton()}
      </View>
    </View>
  );
}

const styles = (choice, correctOption, currentOptionSelected, answerSubmitted, isSubmitDisabled) => StyleSheet.create({
  button_submit: {
      backgroundColor: isSubmitDisabled? thisStyle.button_disabled : thisStyle.button,
      alignSelf: "center",
      justifyContent: "center",
      width: 250,
      height: 50,
      borderRadius: 20,
      marginTop: 20
  },
  button_next: {
      justifyContent: "center",
      width: 100,
      height: 50,
      alignSelf: "flex-end",
      marginRight: 30
  },
  text_submit: {
    textAlign: "center",
    color: isSubmitDisabled? thisStyle.text_disabled : thisStyle.text_primary,
    fontSize: 25 * WINDOW.scale,
    fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android // Determine font based on platform
  },
  text_next: {
    textAlign: "center",
    color: thisStyle.text_primary,
    fontSize: 25 * WINDOW.scale,
    fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android // Determine font based on platform
  },
  button_quizexit: {
    marginLeft: WINDOW.width * 0.02,
    marginBottom: WINDOW.height * 0.01,
    fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
    padding: 10
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: thisStyle.background,
    position: "relative"
  },
  button_choice: {
    borderWidth: 2, 
    borderColor: answerSubmitted?   choice == correctOption ? 
                                    thisStyle.correct_outline : choice == currentOptionSelected ? 
                                    thisStyle.incorrect_outline : 
                                    thisStyle.text_primary
                                :   choice == currentOptionSelected ? 
                                    thisStyle.selected_outline : 
                                    thisStyle.text_primary,
    backgroundColor: answerSubmitted?    choice == correctOption ? 
                                        thisStyle.correct : choice == currentOptionSelected ? 
                                        thisStyle.incorrect : 
                                        thisStyle.button
                                    :   choice == currentOptionSelected ? 
                                        thisStyle.selected : 
                                        thisStyle.button,
    borderRadius: 50,
    height: WINDOW.height * 0.08,

    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',

    paddingHorizontal: 20, 

    marginVertical: WINDOW.height * 0.015, 
    marginLeft: WINDOW.width * 0.02,
    marginRight: WINDOW.width * 0.02,
  },
  text_choice: {
    color: thisStyle.text_primary,
    fontSize: WINDOW.scale * 20,
    fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android // Determine font based on platform
  },
  text_numbering: {
    color: thisStyle.text_secondary, 
    fontSize: WINDOW.scale * 30,
    marginLeft: 7,
    marginBottom: 7,
    fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android // Determine font based on platform
  },
  text_prompt: {
    color: thisStyle.text_primary, 
    fontSize: WINDOW.scale * 30,
    marginLeft: WINDOW.width * 0.056,
    marginRight: WINDOW.width * 0.05,
    marginBottom: WINDOW.height * 0.03,
    fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android // Determine font based on platform
  },
  text_exitquiz: {
    fontSize: WINDOW.scale * 35, 
    color: thisStyle.text_primary, 
    fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android // Determine font based on platform
  }
});