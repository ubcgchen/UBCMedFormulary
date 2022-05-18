import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../components/NavButton';
import BackButton from '../components/BackButton';
import { WINDOW } from '../constants/Dimensions';
import { DEFAULT_STYLE } from '../constants/Styles';
import { Switch, TextInput } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const thisStyle = DEFAULT_STYLE

export default function LearnPharmacologyScreen() {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = React.useState("");

    const [isRandomOn, setisRandomOn] = useState(false);
    const [isRandomDisabled, setIsRandomDisabled] = useState(false);
    const toggleSwitch = () => setisRandomOn(previousState => !previousState);

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
      <View style={styles.container}>
        <Modal animationType="slide" visible={modalVisible}>
          <MaterialCommunityIcons name='close' size={25} onPress={() => {setModalVisible(false)}} style = {{padding: 30, marginTop: 20, marginLeft: 5}}/>
          <Text style={styles.text_header}>Quiz Settings</Text>
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
                <Text style = {{padding: 5, fontSize: 17, marginLeft: "1%"}}>Randomize Questions</Text>
              </View>
            </View>

            <View style = {{flexDirection: "row", marginTop:"3%"}}>
              <View style = {{width: "50%"}}>
                <TextInput
                  label="#"
                  value={text}
                  onChangeText={text => filterInput(text)}
                  style={{marginLeft:"70%", width: "20%", height: 50}}
                />
              </View>
              <View style = {{width: "50%"}}>
                <Text style = {{padding: 12, fontSize: 17}}>Max Questions (turns randomize on)</Text>
              </View>
            </View>
        </Modal>

        {/* Title */}
        <View style={styles.horizontalview}>
          <Image style={styles.clipart} source={require('../assets/books.png')} />
          <Text style={styles.text_header}>Learn Pharmacology</Text>
        </View>

        <View>
          <NavButton label="MEDD 411 Midterm" page="QuizSelect" param={{exam: "MEDD 411 Midterm", randomize:isRandomOn, numQuestions: text}}/>
          <NavButton label="MEDD 411 Final" page="QuizSelect" param={{exam: "MEDD 411 Final", randomize:isRandomOn, numQuestions: text}}/>

          {/*NOT IMPLEMENTED*/}
          <NavButton label="MEDD 412 Midterm" page="QuizSelect" param={{exam: "MEDD 411 Midterm", randomize:isRandomOn, numQuestions: text}}/>
          <NavButton label="MEDD 412 Final" page="QuizSelect" param={{exam: "MEDD 411 Final", randomize:isRandomOn, numQuestions: text}}/>
        </View>

        <BackButton page="Home"/>

        <TouchableOpacity style={styles.quiz_settings} onPress={() => handleQuizSettings()}>
          <MaterialCommunityIcons name="cog" style={{color: "#000", fontSize: 20}} />
          <Text style={styles.text_buttons}> Quiz Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
    quiz_settings: {
      flexDirection: "row",
      padding: 20
    },
    clipart: {
      width: 57,
      height: 61,
    },
    container: {
      flex: 1,
      backgroundColor: thisStyle.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text_header:{
      fontSize: 45 * WINDOW.scale,
      fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform

      padding: "2%",
      alignSelf: "center",
    },
    horizontalview: {
      flexDirection: "row",
      alignItems:'center',
      padding: "2%"
    },
  });