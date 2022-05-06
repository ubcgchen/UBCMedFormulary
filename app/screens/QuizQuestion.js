import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { data } from '../data/Quiz/Foundations';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { WINDOW } from '../constants/Dimensions';
import { COLORS } from '../constants/Colours';
import Dialog from "react-native-dialog";
import { useNavigation } from '@react-navigation/native';

export default function QuizQuestionScreen() {

  const questions = data;
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
  
  const renderQuestion = () => {
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
          <Text style={styles(null, null, null, null, null).text_numbering}>{currentQuestionIndex+1} / {questions.length}</Text>
        </View>

        {/* Question Prompt */}
        <Text style={styles(null, null, null, null, null).text_prompt}>
          {questions[currentQuestionIndex]?.prompt}
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
      <View>
        {
          questions[currentQuestionIndex]?.choices.map(choice => (
            <TouchableOpacity onPress={()=> highlightChoice(choice)} 
                              style = {styles(choice, correctOption, currentOptionSelected, answerSubmitted).button_choice}
                              activeOpacity={1}
                              disabled={isOptionsDisabled}>
              <Text style={styles.text_choice}>{choice}</Text>
              {
                choice==correctOption && answerSubmitted ? (
                    <View style={{
                        width: 30, height: 30, borderRadius: 30/2,
                        backgroundColor: COLORS.correct_outline,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <MaterialCommunityIcons name="check" style={{color: "#000", fontSize: 20}} />
                    </View>
                ): choice == currentOptionSelected && answerSubmitted ? (
                    <View style={{
                        width: 30, height: 30, borderRadius: 30/2,
                        backgroundColor: COLORS.incorrect_outline,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <MaterialCommunityIcons name="close" style={{color: "#FFF", fontSize: 20}} />
                    </View>
                ) : null
              }
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }

  const handleSubmit = () => {
      setAnswerSubmitted(true);
      validateAnswer();
      setSubmitDisabled(true);
  }

  const handleNext = () => {
      if (currentQuestionIndex +1 == questions.length) {
          navigation.navigate("Results", {points: score, total: questions.length})
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
      backgroundColor: isSubmitDisabled? "#fafafa" : COLORS.button,
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
    color: isSubmitDisabled? "#bbb" : COLORS.text_primary,
    fontSize: 25 * WINDOW.scale,
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
  },
  text_next: {
    textAlign: "center",
    color: COLORS.text_primary,
    fontSize: 25 * WINDOW.scale,
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
  },
  button_quizexit: {
    marginLeft: WINDOW.width * 0.02,
    marginBottom: WINDOW.height * 0.01,
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: COLORS.background,
    position: "relative"
  },
  button_choice: {
    borderWidth: 2, 
    borderColor: answerSubmitted?   choice == correctOption ? 
                                    COLORS.correct_outline : choice == currentOptionSelected ? 
                                    COLORS.incorrect_outline : 
                                    COLORS.text_primary
                                :   choice == currentOptionSelected ? 
                                    "#5bbce4" : 
                                    COLORS.text_primary,
    backgroundColor: answerSubmitted?    choice == correctOption ? 
                                        COLORS.correct : choice == currentOptionSelected ? 
                                        COLORS.incorrect : 
                                        COLORS.button
                                    :   choice == currentOptionSelected ? 
                                        "#87CEEB" : 
                                        COLORS.button,
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
    color: COLORS.text_primary,
    fontSize: WINDOW.scale * 20,
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
  },
  text_numbering: {
    color: COLORS.text_secondary, 
    fontSize: WINDOW.scale * 25,
    marginLeft: 25,
    marginBottom: WINDOW.height * 0.005,
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
  },
  text_prompt: {
    color: COLORS.text_primary, 
    fontSize: WINDOW.scale * 30,
    marginLeft: WINDOW.width * 0.056,
    marginRight: WINDOW.width * 0.05,
    marginBottom: WINDOW.height * 0.03,
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
  },
  text_exitquiz: {
    fontSize: WINDOW.scale * 30, 
    color: COLORS.text_primary, 
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
  }
});
