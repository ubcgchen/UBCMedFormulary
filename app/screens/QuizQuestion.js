import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { data } from '../data/Foundations';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { WINDOW } from '../constants/Dimensions';
import { COLORS } from '../constants/Colours';
import Dialog from "react-native-dialog";
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native-paper';

export default function QuizQuestionScreen() {

  const questions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0)
  const [visible, setVisible] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigation = useNavigation();
  
  const renderQuestion = () => {
    return(
      <View>
        {/* Question Counter, Exit Button */}
        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles(null, null, null).button_quizexit} onPress={() => {setVisible(true)}}>
            <Text style={styles(null, null, null).text_exitquiz}>{'<'}</Text>
          </TouchableOpacity>
          <Dialog.Container visible={visible} onBackdropPress={() => setVisible(false)}>
                <Dialog.Title>Exit Quiz</Dialog.Title>
                <Dialog.Description>
                    Would you like to leave your current quiz? All progress will be lost.
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
                <Dialog.Button label="Leave" onPress={() => navigation.navigate("Learn")} />
          </Dialog.Container>
          <Text style={styles(null, null, null).text_numbering}>{currentQuestionIndex+1} / {questions.length}</Text>
        </View>

        {/* Question Prompt */}
        <Text style={styles(null, null, null).text_prompt}>
          {questions[currentQuestionIndex]?.prompt}
        </Text>
      </View>
    );
  }

  const validateAnswer = (selectedOption) => {
    let correct_option = questions[currentQuestionIndex]["correct"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      setScore(score+1)
    }
    setShowNextButton(true)
  }

  const renderChoices = () => {
    return(
      <View>
        {
          questions[currentQuestionIndex]?.choices.map(choice => (
            <TouchableOpacity onPress={()=> validateAnswer(choice)} 
                              style = {styles(choice, correctOption, currentOptionSelected).button_choice}
                              activeOpacity={1}
                              disabled={isOptionsDisabled}>
              <Text style={styles.text_choice}>{choice}</Text>
              {
                choice==correctOption ? (
                    <View style={{
                        width: 30, height: 30, borderRadius: 30/2,
                        backgroundColor: COLORS.correct_outline,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <MaterialCommunityIcons name="check" style={{color: "#000", fontSize: 20}} />
                    </View>
                ): choice == currentOptionSelected ? (
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

  const handleNext = () => {

      if (currentQuestionIndex +1 == questions.length) {
          navigation.navigate("Results", {points: score, total: questions.length})
      } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
          setCurrentOptionSelected(null)
          setIsOptionsDisabled(false)
          setShowNextButton(false)
      }
  }

  const renderNextButton = () => {
      if (showNextButton) {
          return (
              <TouchableOpacity style={styles(null, null, null).button_next} onPress={() => {handleNext()}}>
                  <Text style={styles(null, null, null).text_next}>Next {'>>'}</Text>
              </TouchableOpacity>
          )
      } else {
          return null
      }
  }

  return (
    <View style={{flex:1}}>
      <View style={styles(null, null, null).container}>        
        {renderQuestion()}
        {renderChoices()}
        {renderNextButton()}
      </View>
    </View>
  );
}

const styles = (choice, correctOption, currentOptionSelected) => StyleSheet.create({
  text_next: {
    marginTop: 45,
    marginLeft: 1040,
    color: COLORS.text_primary,
    fontSize: 25,
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
    borderColor: choice == correctOption ? 
                            COLORS.correct_outline : choice == currentOptionSelected ? 
                            COLORS.incorrect_outline : 
                            COLORS.text_primary, 
    backgroundColor: choice == correctOption ? 
                            COLORS.correct : choice == currentOptionSelected ? 
                            COLORS.incorrect : 
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
