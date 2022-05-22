import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { Checkbox } from 'react-native-paper';

import { WINDOW } from '../constants/Dimensions';
import { m411Midterm, m411Final } from '../data/weeks';

const file_mappings = {
  "MEDD 411 Midterm": m411Midterm,
  "MEDD 411 Final": m411Final
}

export default function QuizSelectionScreen({route}){
  const { exam, randomize, numQuestions } = route.params;
  const weeks = file_mappings[exam]
  const { colors, font } = useTheme()
  
  const navigation = useNavigation();

  let week_mappings = {}
  let week_mappings_all_selected = {}

  weeks.forEach((item) => {
    week_mappings[item] = false
    week_mappings_all_selected[item] = true
  });

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

  const handleSelectAll = () => {
    setSelectedWeeks(week_mappings_all_selected)
    setDisableStart(false)
  }

  const handleDeselectAll = () => {
    setSelectedWeeks(week_mappings)
    setDisableStart(true)
  }
  
  return (
    <View style={styles(null, colors, font).container}>
      {/* Title */}
      <View>
        <Text style={styles(null, colors, font).text_header}>
          {exam} Quizzes
        </Text>
        <Text style={styles(null, colors, font).text_blurb}>
          Improve your pharmacology knowledge! Select the CBL cases you want to be quizzed on
        </Text>
      </View>

      <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={() => {handleSelectAll()}} style = {styles(null, colors, font).button}>
          <Text style = {{color: colors.text, fontFamily: font.style, fontSize: 15* font.scale}}>Select All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {handleDeselectAll()}} style = {styles(null, colors, font).button}>
          <Text style = {{color: colors.text, fontFamily: font.style, fontSize: 15* font.scale}}>De-select All</Text>
        </TouchableOpacity>
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
              labelStyle = {{color: colors.text, fontFamily: font.style, fontSize: 15* font.scale}}
              style = {{backgroundColor: selectedWeeks[week] ? colors.button : colors.background}}/>
          ))
        }

      </ScrollView>

      {/* Bottom Buttons */}
      <View style = {{flex: 0.11}}>
        <BackButton page="Learn"/>
        <TouchableOpacity style={styles(null, colors, font).button_start} onPress={() => navigation.navigate('QuizQuestion', {selectedWeeks: selectedWeeks, exam: exam, randomize:randomize, numQuestions: numQuestions})} disabled={disableStart}>
          <Text style={styles(disableStart, colors, font).text_buttons}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
}


const styles = (disableStart, colors, font) => StyleSheet.create({
    button:{
      backgroundColor: colors.button,
      padding: 10,
      marginLeft:20,
      marginTop: 10,
      marginBottom: 10,
      borderRadius:10
    },
    button_start: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      padding: 10,
    },
    container:{
      flex: 1,
      backgroundColor: colors.background,
    },
    text_blurb:{
        alignSelf: "center",
        fontSize: 15* font.scale,
        marginBottom: WINDOW.height*0.02,
        color: colors.text,
        fontFamily: font.style
    },
    text_buttons: {
      fontSize: 18* font.scale,
      fontFamily: font.style, // Determine font based on platform
      color: disableStart ? colors.text_disabled : colors.text
    },
    text_header:{
      alignSelf: "center",
      fontFamily: font.style, // Determine font based on platform
      fontSize: 25* font.scale,
      marginBottom: WINDOW.height*0.02,
      marginTop: WINDOW.height*0.07,
      color: colors.text
    },
    text_subheader: {
        fontSize: 18* font.scale,
        marginLeft: WINDOW.width*0.02,
        marginTop: WINDOW.height*0.02,
        marginBottom: 5,
        color: colors.text,
        textDecorationLine: 'underline',
        fontFamily: font.style, // Determine font based on platform
      },
  });