import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { Checkbox } from 'react-native-paper';

import { WINDOW } from '../constants/Dimensions';
import { DEFAULT_STYLE } from '../constants/Styles';

import { weeks } from '../data/weeks';

const thisStyle = DEFAULT_STYLE

export default function QuizSelectionScreen(){
  
  const navigation = useNavigation();

  let week_mappings = {
    "Intro to Pharmacodynamics": false,
    "Intro to Pharmacokinetics": false,
    "Fetal Development": false,
    "Breast Mass": false,
    "Immunology & Allergy": false,
    "Pneumonia and Cough": false,
    "Chronic Obstructive Pulmonary Disease (COPD)": false,
    "Electrolyte Disturbance": false,
    "Hypertension": false,
    "Heart Murmurs": false,
    "Upper Gastrointestinal Tract": false,
    "Nutrient Malabsorption": false,
    "Diabetes Mellitus": false,
    "Lower Gastrointestinal Tract": false,
    "Infertility": false,
    "Pregnancy": false
  }

  const [selectedWeeks, setSelectedWeeks] = useState(week_mappings)
  const [disableStart, setDisableStart] = useState(true)

  const handleSelection = (label) => {
    let updated_value = selectedWeeks
    updated_value[label] = !updated_value[label]
    setSelectedWeeks(selectedWeeks => {
      return {...selectedWeeks, ...updated_value};
    })

    let allFalse = Object.values(selectedWeeks).every(
      value => value === false
    );

    if (allFalse) {
      setDisableStart(true)
    } else {
      setDisableStart(false)
    }
  }
  
  return (
    <View style={styles(null).container}>
      {/* Title */}
      <View>
        <Text style={styles(null).text_header}>
          Quizzes
        </Text>
        <Text style={styles(null).text_blurb}>
          Improve your pharmacology knowledge! Select the CBL cases you want to be quizzed on
        </Text>
      </View>

      {/* Quiz Selection */}
      <ScrollView style={{flex: 1}}>
        {
          weeks.map((week, key) => (
            <Checkbox.Item 
              key = {key}
              label={week} 
              status={selectedWeeks[week] ? 'checked' : 'unchecked'} 
              onPress={() => {handleSelection(week)}} 
              style = {{backgroundColor: selectedWeeks[week] ? thisStyle.button: "white", 
                        color: "black",}}/>
          ))
        }

      </ScrollView>

      {/* Bottom Buttons */}
      <View style = {{flex: 0.11}}>
        <BackButton page="Learn"/>
        <TouchableOpacity style={styles(null).button_start} onPress={() => navigation.navigate('QuizQuestion', {selectedWeeks: selectedWeeks})} disabled={disableStart}>
          <Text style={styles(disableStart).text_buttons}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
}


const styles = (disableStart) => StyleSheet.create({
    button_start: {
      position: 'absolute',
      right: 20,
      bottom: 20,
    },
    container:{
      flex: 1,
      backgroundColor: thisStyle.background,
    },
    text_blurb:{
        alignSelf: "center",
        fontSize: 15,
        marginBottom: WINDOW.height*0.02,
    },
    text_buttons: {
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
      color: disableStart? thisStyle.text_disabled : thisStyle.text_primary
    },
    text_header:{
      alignSelf: "center",
      fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
      fontSize: 25,
      marginBottom: WINDOW.height*0.02,
      marginTop: WINDOW.height*0.07,
      textDecorationLine: 'underline',
    },
    text_subheader: {
        fontSize: 18,
        marginLeft: WINDOW.width*0.02,
        marginTop: WINDOW.height*0.02,
        marginBottom: 5,
        textDecorationLine: 'underline',
        fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
      },
  });