import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { Checkbox } from 'react-native-paper';

import { WINDOW } from '../constants/Dimensions';
import { DEFAULT_STYLE } from '../constants/Styles';

import { m411Midterm, m411Final } from '../data/weeks';

const thisStyle = DEFAULT_STYLE
const file_mappings = {
  "MEDD 411 Midterm": m411Midterm,
  "MEDD 411 Final": m411Final
}

export default function QuizSelectionScreen({route}){
  const { exam, randomize, numQuestions } = route.params;
  const weeks = file_mappings[exam]
  
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
    <View style={styles(null).container}>
      {/* Title */}
      <View>
        <Text style={styles(null).text_header}>
          {exam} Quizzes
        </Text>
        <Text style={styles(null).text_blurb}>
          Improve your pharmacology knowledge! Select the CBL cases you want to be quizzed on
        </Text>
      </View>

      <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={() => {handleSelectAll()}} style = {styles(null).button}>
          <Text>Select All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {handleDeselectAll()}} style = {styles(null).button}>
          <Text>De-select All</Text>
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
              style = {{backgroundColor: selectedWeeks[week] ? thisStyle.button: "white", 
                        color: "black",}}/>
          ))
        }

      </ScrollView>

      {/* Bottom Buttons */}
      <View style = {{flex: 0.11}}>
        <BackButton page="Learn"/>
        <TouchableOpacity style={styles(null).button_start} onPress={() => navigation.navigate('QuizQuestion', {selectedWeeks: selectedWeeks, exam: exam, randomize:randomize, numQuestions: numQuestions})} disabled={disableStart}>
          <Text style={styles(disableStart).text_buttons}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
}


const styles = (disableStart) => StyleSheet.create({
    button:{
      backgroundColor: thisStyle.button,
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