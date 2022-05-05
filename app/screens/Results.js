{/* Imports */}
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../components/NavButton';
import BackButton from '../components/BackButton';
import { WINDOW } from '../constants/Dimensions';
import { COLORS } from '../constants/Colours';

export default function ResultsScreen({route}) {
  const navigation = useNavigation();
  const { points, total } = route.params;
  let incorrect = total-points
  let score = points/total * 100

  return (
    <View style={styles.container}>
        <View style = {{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style = {{ flex: 1 }}>
                <TouchableOpacity style={styles.button_quizexit} onPress={() => navigation.navigate("Learn")}>
                    <Text style={styles.text_exitquiz}>{'<'}</Text>
                </TouchableOpacity>
            </View>
            <View style = {{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
                <Text style={styles.text_title}>Quiz Summary</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
        <View style = {{flex: 1, flexDirection: "row"}}>
            <View style = {{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
                <Text style = {styles.text_result}>{points}/{total}{"\n"}Correct</Text>
            </View>
            <View style = {{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
                <Text style = {styles.text_result}>{incorrect}/{total}{"\n"}Incorrect</Text>
            </View>
            <View style = {{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
                <Text style = {styles.text_result}>{score}%{"\n"}Score</Text>
            </View>
        </View>
        <View style = {{flex: 1, flexDirection: "row", justifyContent: "center"}}>
            <NavButton label="Take another quiz" page="QuizSelect"/>
        </View>
      <BackButton page="QuizSelect"/>
    </View>
  );
}


const styles = StyleSheet.create({
  button_quizexit: {
    marginLeft: WINDOW.width * 0.02,
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: COLORS.background,
    position: "relative"
  },
  text_exitquiz: {
    fontSize: WINDOW.scale * 30, 
    color: COLORS.text_primary, 
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
  },
  text_title: {
    fontSize: WINDOW.scale * 40,
    color: "black",
    fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform
  },
  text_result:{
      fontSize: WINDOW.scale * 20,
      fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform
    },
});