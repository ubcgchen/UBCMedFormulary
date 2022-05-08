{/* Imports */}
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../components/NavButton';
import { STRINGS } from '../constants/Strings';
import { DEFAULT_STYLE } from '../constants/Styles';

const thisStyle = DEFAULT_STYLE

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.horizontalview}>
      <Image style={styles.logo} source={require('../assets/logos/ubc-logo.png')} />
        <Text style={styles.text_title}>UBC Med Formulary</Text>
      </View>
      
      {/* Nav Buttons */}
      <NavButton label="Learn Pharmacology" page="Learn"/>
      <NavButton label="Formulary" page={STRINGS.formulary_page}/>

      {/* About Button */}
      <TouchableOpacity style={styles.button_about}>
        <Text style={styles.text_buttons}>About</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  button_about: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: thisStyle.background,   
    alignItems: 'center',      
    justifyContent: 'center',
  },
  horizontalview: {
    flexDirection: "row",
    alignItems:'center',
    padding: "2%"
  },
  logo: {
    width: 70,
    height: 97,
  },
  text_buttons: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
  },
  text_title: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 40,
    color: thisStyle.text_primary,
    fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
  },
});