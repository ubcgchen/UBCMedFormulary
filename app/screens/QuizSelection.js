import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '../components/CheckBox';
import BackButton from '../components/BackButton';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

export default function QuizSelectionScreen(){

    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>

        {/* Title */}
        <View>
          <Text style={styles.text_header}>
            Quizzes
          </Text>
          <Text style={styles.text_blurb}>
            Improve your pharmacology knowledge! Select the CBL cases you want to be quizzed on
          </Text>
        </View>

        {/* Quiz Selection */}
        <ScrollView style={{flex: 1}}>
          <Text style={styles.text_subheader}>Cardiology</Text>
          <CheckBox label="Hypertension (Week 9)" onPress={null}/>
          <CheckBox label="Heart Murmurs (Week 10)" onPress={null}/>
          <Text style={styles.text_subheader}>Endocrinology</Text>
          <CheckBox label="Diabetes Mellitus (Week 13)" onPress={null}/>
          <Text style={styles.text_subheader}>Gastroenterology</Text>
          <CheckBox label="Upper Gastrointestinal Tract (Week 11)" onPress={null}/>
          <CheckBox label="Nutrient Malabsorption (Week 12)" onPress={null}/>
          <CheckBox label="Lower Gastrointestinal Tract (Week 14)" onPress={null}/>
          <Text style={styles.text_subheader}>Immunology & Diseases</Text>
          <CheckBox label="Immunology & Allergy (Week 5)" onPress={null}/>
          <CheckBox label="Pneumonia/Cough (Week 6)" onPress={null}/>
          <Text style={styles.text_subheader}>Nephrology & Electrolytes</Text>
          <CheckBox label="Electrolyte Disturbance (Week 8)" onPress={null}/>
          <Text style={styles.text_subheader}>OB/GYN</Text>
          <CheckBox label="Fetal Development (Week 3)" onPress={null}/>
          <CheckBox label="Infertility and Pregnancy (Week 15-16)" onPress={null}/>
          <Text style={styles.text_subheader}>Oncology</Text>
          <CheckBox label="Breast Mass (Week 4)" onPress={null}/>
          <Text style={styles.text_subheader}>Pulmonology</Text>
          <CheckBox label="Chronic Obstructive Pulmonary Disease (COPD) (Week 7)" onPress={null}/>
        </ScrollView>

        {/* Bottom Buttons */}
        <View style = {{flex: 0.11}}>
          <BackButton page="Learn"/>
          <TouchableOpacity style={styles.button_start} onPress={() => navigation.navigate('QuizQuestion')}>
            <Text style={styles.text_buttons}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  
}


const styles = StyleSheet.create({
    button_start: {
      position: 'absolute',
      right: 20,
      bottom: 20,
    },
    container:{
      flex: 1,
      backgroundColor: '#fff',
    },
    text_blurb:{
        alignSelf: "center",
        fontSize: 15,
        marginBottom: deviceHeight*0.02,
    },
    text_buttons: {
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
    },
    text_header:{
      alignSelf: "center",
      fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform
      fontSize: 25,
      marginBottom: deviceHeight*0.02,
      marginTop: deviceHeight*0.07,
      textDecorationLine: 'underline',
    },
    text_subheader: {
        fontSize: 18,
        marginLeft: deviceWidth*0.02,
        marginTop: deviceHeight*0.02,
        marginBottom: 5,
        textDecorationLine: 'underline',
        fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform
      },
  });