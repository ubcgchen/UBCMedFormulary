{/* Imports */}
import React, { useState } from "react";
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import NavButton from './app/components/NavButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';

{/* Screens */}
import LearnPharmacologyScreen from './app/screens/LearnPharmacology';
import QuizSelectionScreen from './app/screens/QuizSelection';
import QuizQuestionScreen from './app/screens/QuizQuestion';
import ResultsScreen from './app/screens/Results';
import FormularyScreen from './app/screens/Formulary';
import DrugInfoScreen from './app/screens/DrugInfo';
import { STRINGS } from './app/constants/Strings';

const Stack = createNativeStackNavigator();

  const Light = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',

      text: 'rgb(28, 28, 30)',
      text_disabled: '#777',

      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',

      button: '#ebebeb',
      button_disabled: '#fafafa',
      button_outline: "#000",
      button_text: '#986c55',

      correct_outline: "#5fb25f",
      incorrect_outline: "#b24141",
      selected_outline: "#5bbce4",
      correct: "#88FF88",
      incorrect: "#d79191",
      selected: "#87CEEB",
      text_submitted: "#000",
      shadow: "#a9a9a9",
      
      //Formulary
      formulary_header: "#FFF"
    },
    font: {
      style: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform
      scale: 1,
    },
    logo: require('./app/assets/logos/ubc-logo.png')
  };

  const Dark = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: '#393939',
      card: 'rgb(255, 255, 255)',

      text: '#FFF',
      text_disabled: 'rgb(100, 100, 100)',

      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',

      button: '#3d4a52',
      button_disabled: '#636e74',
      button_outline: "#000",
      button_text: '#986c55',

      correct_outline: "#5fb25f",
      incorrect_outline: "#b24141",
      selected_outline: "#5bbce4",
      correct: "#88FF88",
      incorrect: "#d79191",
      selected: "#87CEEB",
      text_submitted: "#000",
      shadow: "#2d2d2d",

      //Formulary
      formulary_header: "#2d2d2d"
    },
    font: {
      style: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform
      scale: 1,
    },
    logo: require('./app/assets/logos/ubc-logo_darkmode.png')
  };

  const Cute = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: '#fdf7e8',
      card: 'rgb(255, 255, 255)',

      text: '#716e6e',
      text_disabled: 'rgb(100, 100, 100)',

      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',

      button: '#ffedef',
      button_disabled: '#636e74',
      button_outline: "#000",
      button_text: '#986c55',

      correct_outline: "#5fb25f",
      incorrect_outline: "#b24141",
      selected_outline: "#5bbce4",
      correct: "#88FF88",
      incorrect: "#d79191",
      selected: "#87CEEB",
      text_submitted: "#000",
      shadow: "#2d2d2d",

      //Formulary
      formulary_header: "#daeaf6"
    },
    font: {
      style: 'Hynings',
      scale: 1.3,
    },
    logo: require('./app/assets/logos/ubc-logo.png')
  };

  const Pending = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: '#f5ede5',
      card: 'rgb(255, 255, 255)',

      text: '#986c55',
      text_disabled: 'rgb(100, 100, 100)',

      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',

      button: '#eedfd9',
      button_disabled: '#636e74',
      button_text: '#000',

      correct_outline: "#5fb25f",
      incorrect_outline: "#b24141",
      selected_outline: "#5bbce4",
      correct: "#88FF88",
      incorrect: "#d79191",
      selected: "#87CEEB",
      text_submitted: "#000",
      shadow: "#2d2d2d",

      //Formulary
      formulary_header: "#acb4af"
    },
    font: {
      style: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform
      scale: 1,
    },
    logo: require('./app/assets/logos/ubc-logo.png')
  };

  const theme_map = {
    "Light" : Light,
    "Dark" : Dark,
    "Cute" : Cute,
    "Pending" : Pending
  }

export const ThemeContext = React.createContext();

function HomeScreen() {
  const { setTheme, theme } = React.useContext(ThemeContext);
  const { colors, font, logo } = useTheme();

  return (
    <View style={styles(colors, font).container}>
      <View style={{flex: 0.2}}>
        {
          theme == 'Light' ? <MaterialCommunityIcons name='emoticon-happy' style={{ color: "rgb(200, 200, 200)", marginTop: 25, marginLeft: "90%"}} size={50} onPress={() => setTheme(theme === 'Light' ? 'Cute' : 'Light')}/> :
                            <MaterialCommunityIcons name='emoticon-cool' style={{ color: "#acb4af", marginTop: 25, marginLeft: "90%"}} size={50} onPress={() => setTheme(theme === 'Light' ? 'Cute' : 'Light')}/>
        }
      </View>

      <View style={{alignItems: "center", justifyContent: "center", flex: 1, marginBottom: "15%"}}>
        {/* Title */}
        <View style={styles(colors, font).horizontalview}>
        <Image style={styles(colors, font).logo} source={logo} />
          <Text style={styles(colors, font).text_title}>UBC Med Formulary</Text>
          {/* <Text style={styles(colors, font).text_title}>ubc med formulary</Text> */}
        </View>
        
        {/* Nav Buttons */}
        <NavButton label="Learn Pharmacology" page="Learn"/>
        <NavButton label="Formulary" page={STRINGS.formulary_page}/>
        {/* <NavButton label="learn pharmacology" page="Learn"/>
        <NavButton label="formulary" page={STRINGS.formulary_page}/> */}
      </View>
      
      {/* About Button */}
      <TouchableOpacity style={styles(colors, font).button_about}>
          <Text style={styles(colors, font).text_buttons}>About</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const [loaded] = useFonts({
    Grimnotes: require('./assets/fonts/Grimnotes.ttf'),
    Hynings: require('./assets/fonts/HyningsHandwritingV2-Regular.ttf')
  })
  const [theme, setTheme] = useState('Light');
  const themeData = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={theme_map[theme]}>

        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Learn" component={LearnPharmacologyScreen}/>
          <Stack.Screen name={STRINGS.formulary_page} component={FormularyScreen} />
          <Stack.Screen name="QuizSelect" component={QuizSelectionScreen} />
          <Stack.Screen name="QuizQuestion" component={QuizQuestionScreen} />
          <Stack.Screen name="Results" component={ResultsScreen} />
          <Stack.Screen name="DrugInfo" component={DrugInfoScreen} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = (colors, font) => StyleSheet.create({
  button_about: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,   
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
    fontSize: 18 * font.scale,
    color: colors.button_text,
    fontFamily: font.style
  },
  text_title: {
    marginLeft: 50,
    marginRight: 15,
    fontSize: 40 * font.scale,
    color: colors.text,
    fontFamily: font.style
  },
});