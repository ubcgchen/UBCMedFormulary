import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../components/NavButton';
import BackButton from '../components/BackButton';
import { WINDOW } from '../constants/Dimensions';

export default function LearnPharmacologyScreen() {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        {/* Title */}
        <View style={styles.horizontalview}>
          <Image style={styles.clipart} source={require('../assets/books.png')} />
          <Text style={styles.text_header}>Learn Pharmacology</Text>
      </View>

        <NavButton label="Pharmacology Quizzes" page="QuizSelect"/>
        <NavButton label="Summary Sheets" page="Learn"/>       
        <NavButton label="Lectures" page="Learn"/>              

        <BackButton page="Home"/>
      </View>
    );
  }


const styles = StyleSheet.create({
    clipart: {
      width: 57,
      height: 61,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text_header:{
      fontSize: 45 * WINDOW.scale,
      fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform

      padding: "2%",
      alignSelf: "center",
    },
    horizontalview: {
      flexDirection: "row",
      alignItems:'center',
      padding: "2%"
    },
  });