import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useTheme } from '@react-navigation/native';
import NavButton from '../components/NavButton';
import BackButton from '../components/BackButton';
import { WINDOW } from '../constants/Dimensions';
import { Switch, TextInput } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LearnPharmacologyScreen() {
    const { colors, font } = useTheme()

    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = React.useState("");

    const [isRandomOn, setisRandomOn] = useState(false);
    const [isRandomDisabled, setIsRandomDisabled] = useState(false);
    const toggleSwitch = () => setisRandomOn(previousState => !previousState);

    const [showAnswer, setShowAnswer] = useState(false);
    const toggleShowAnswerSwitch = () => setShowAnswer(previousState => !previousState);

    const handleQuizSettings = () => {
      setModalVisible(true)
    }

    const filterInput = (temp_text) => {
        temp_text = temp_text.replace(/[^0-9]/g, '')
        setText(temp_text)
        if (temp_text.length != 0 && Number(temp_text) > 0) {
          setisRandomOn(true);
          setIsRandomDisabled(true);
        } else {
          setIsRandomDisabled(false);
        }
    }
  
    return (
      <View style={styles(colors, font).container}>
          <Modal animationType="slide" visible={modalVisible}>
          <View style={styles(colors, font).modal}>
            <MaterialCommunityIcons name='close' size={25} onPress={() => {setModalVisible(false)}} style = {{padding: 30, marginTop: 20, marginLeft: 5, color: colors.text}}/>
            <Text style={styles(colors, font).text_header}>Quiz Settings</Text>
              <View style = {{flexDirection: "row", marginTop:"1%"}}>
                <View style = {{width: "50%"}}>
                  <Switch
                    color = "blue"
                    onValueChange={toggleSwitch}
                    value={isRandomOn}
                    style={{marginLeft:"70%"}}
                    disabled={isRandomDisabled}
                  />
                  </View>
                <View style = {{width: "50%"}}>
                  <Text style = {{padding: 5, fontSize: 17 * font.scale, marginLeft: "1%", color: colors.text, fontFamily: font.style}}>Randomize Questions</Text>
                </View>
              </View>

              <View style = {{flexDirection: "row", marginTop:"3%"}}>
                <View style = {{width: "50%"}}>
                  <TextInput
                    label="#"
                    value={text}
                    inputStyle= {{color: colors.text}}
                    onChangeText={text => filterInput(text)}
                    style={{marginLeft:"70%", width: "20%", height: 50, backgroundColor: colors.formulary_header}}
                  />
                </View>
                <View style = {{width: "50%"}}>
                  <Text style = {{padding: 12, fontSize: 17 * font.scale, color: colors.text, fontFamily: font.style}}>Max Questions (turns randomize on)</Text>
                </View>
              </View>
          </View>
          </Modal>

        {/* Title */}
        <View style={styles(colors, font).horizontalview}>
          <Image style={styles(colors, font).clipart} source={require('../assets/books.png')} />
          <Text style={styles(colors, font).text_header}>Learn Pharmacology</Text>
        </View>

        <View>
          <NavButton label="MEDD 411 Midterm" page="QuizSelect" param={{exam: "MEDD 411 Midterm", randomize:isRandomOn, numQuestions: text, showAnswer: showAnswer}}/>
          <NavButton label="MEDD 411 Final" page="QuizSelect" param={{exam: "MEDD 411 Final", randomize:isRandomOn, numQuestions: text, showAnswer: showAnswer}}/>

          {/*NOT IMPLEMENTED*/}
          <NavButton label="MEDD 412 Midterm" page="QuizSelect" param={{exam: "MEDD 411 Midterm", randomize:isRandomOn, numQuestions: text, showAnswer: showAnswer}}/>
          <NavButton label="MEDD 412 Final" page="QuizSelect" param={{exam: "MEDD 411 Final", randomize:isRandomOn, numQuestions: text, showAnswer: showAnswer}}/>
        </View>

        <BackButton page="Home"/>

        <TouchableOpacity style={styles(colors, font).quiz_settings} onPress={() => handleQuizSettings()}>
          <MaterialCommunityIcons name="cog" style={{color: colors.text, fontSize: 20 * font.scale}} />
          <Text style={styles(colors, font).text_button}> Quiz Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }


const styles = (colors, font) => StyleSheet.create({
    quiz_settings: {
      flexDirection: "row",
      padding: 20,
      color: colors.text
    },
    clipart: {
      width: 57,
      height: 61,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text_header:{
      fontSize: 45 * WINDOW.scale * font.scale,
      fontFamily: font.style,
      color: colors.text,
      padding: "2%",
      alignSelf: "center",
    },
    text_button:{
      color: colors.text,
      fontFamily: font.style,
      fontSize: 16 * font.scale
    },
    horizontalview: {
      flexDirection: "row",
      alignItems:'center',
      padding: "2%"
    },
    modal: {
       backgroundColor: colors.background,
       minHeight: "100%" 
    }
  });