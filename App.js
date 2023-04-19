/**
 * App entry point and home screen
 * @author George Chen, UBC VFMP 2025
 */

// Imports
import React, { useState } from "react";
import {
  useNavigation,
  NavigationContainer,
  useTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import NavButton from "./app/components/NavButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import { themeMap, themeMapKeys } from "./app/constants/Styles";
import { WINDOW } from "./app/constants/Dimensions";
import { lowerCase } from "./app/utils/LowerCase";
import { Settings } from "./app/Settings";

// Screens
import LearnPharmacologyScreen from "./app/screens/LearnPharmacology";
import QuizSelectionScreen from "./app/screens/QuizSelection";
import QuizQuestionScreen from "./app/screens/QuizQuestion";
import FormularyScreen from "./app/screens/Formulary";
import DrugInfoScreen from "./app/screens/DrugInfo";
import AboutScreen from "./app/screens/About";
import YearSelectionScreen from "./app/screens/YearSelection";

// Firestore + feedback
import { collection, addDoc } from "firebase/firestore";
import * as firebase from "./firebaseConfig";
import { Slider } from "@miblanchard/react-native-slider";

const ThemeContext = React.createContext();
const Stack = createNativeStackNavigator(); // For navigation between screens

const iconSize = 50 * WINDOW.scale;

// Global variables
global.theme; // makes sure theme is "seen" throughout the app

/**
 * Home screen
 * @returns JSX expression for the home screen
 */
function HomeScreen() {
  const { setTheme, theme } = React.useContext(ThemeContext);
  const { colors, font, logo } = useTheme();
  const [themeIndex, setThemeIndex] = useState(themeMapKeys.indexOf(theme));
  const navigation = useNavigation();
  const [feedback, onChangeFeedback] = useState(""); // feedback hooks
  const [feedbackSent, setFeedbackSent] = useState(false); // has the feedback been sent?

  global.theme = theme;

  const [reportModalVisible, setReportModalVisible] = useState(false); // Report modal

  /**
   * "Advance" the theme every time the icon is pressed
   */
  const handleSetThemeIndex = () => {
    let temp_themeIndex = (themeIndex + 1) % themeMapKeys.length;
    setThemeIndex(temp_themeIndex);
    setTheme(themeMapKeys[temp_themeIndex]);
    Settings[theme] = themeMapKeys[temp_themeIndex];
  };

  const handleAbout = () => {
    navigation.navigate("About", { colors, font });
  };

  const handleReport = () => {
    setReportModalVisible(true);
  };

  function handleCloseModal() {
    setReportModalVisible(false);
    setFeedbackSent(false);
    onChangeFeedback("");
  }

  async function submitReport() {
    if (feedback.match(/^ *$/) !== null) {
      // do nothing if feedback field is empty
    } else {
      setFeedbackSent(true);
      try {
        const docRef = await addDoc(collection(firebase.db, "feedback"), {
          feedback: feedback,
          rating: 5,
          user_friendliness: 5,
          developer_cuteness: 10,
          developer_girlfriend_cuteness: 11,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  return (
    <View style={styles(colors, font).container}>
      <Modal // Report modal
        animationType="fade"
        isVisible={reportModalVisible}
        transparent={true}
        onBackdropPress={handleCloseModal}
        avoidKeyboard={true}
      >
        <View style={styles(colors, font).modal_report}>
          <MaterialCommunityIcons // Close button
            name="close"
            size={25}
            onPress={() => handleCloseModal()}
            style={{
              padding: 20,
              color: colors.text,
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <View // Text + link to form
            >
              <Text style={styles(colors, font).text_report}>
                {lowerCase("Bugs & Suggestions?", theme)}
              </Text>
            </View>
            <View>
              <Text style={styles(colors, font).text_report_subheader}>
                {lowerCase(
                  "If you are reporting a bug, let us know the actions leading up to the bug :)",
                  theme
                )}
              </Text>
            </View>
            <TextInput
              style={styles(colors, font).input}
              onChangeText={onChangeFeedback}
              value={feedback}
              multiline={true}
              placeholder="Type here"
              placeholderTextColor={colors.text}
              selectionColor={colors.text}
              editable={!feedbackSent}
              selectTextOnFocus={!feedbackSent}
            />
            {/* <Slider
              value={0}
              minimumValue={0}
              maximumValue={5}
              step={1}
              onValueChange={() => {
                console.log("hi");
              }}
            /> */}
            <TouchableOpacity
              style={{
                marginTop: "1%",
                marginBottom: "10%",
                padding: 5,
                borderRadius: 5,
                borderColor: feedbackSent
                  ? colors.text_disabled
                  : colors.border,
                backgroundColor: feedbackSent
                  ? colors.button_disabled
                  : colors.button,
                borderWidth: 1.5,
              }}
              onPress={() => submitReport()}
              disabled={feedbackSent}
            >
              <Text
                style={{
                  color: feedbackSent
                    ? colors.text_disabled
                    : colors.button_text,
                  fontFamily: font.style,
                }}
              >
                {feedbackSent
                  ? lowerCase("Thank you!", theme)
                  : lowerCase("Send Feedback", theme)}
              </Text>
            </TouchableOpacity>
            <View>
              <Text style={styles(colors, font).text_report_subheader}>
                {lowerCase(
                  "We'd really appreciate it if you provided a few more thoughts about our app (~3 mins)",
                  theme
                )}
                :
              </Text>
              <Text
                style={styles(colors, font).link}
                onPress={() =>
                  Linking.openURL("https://forms.gle/h7ErJSQ82x2nJBsR8")
                }
              >
                {lowerCase("https://forms.gle/h7ErJSQ82x2nJBsR8", theme)}
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* Theme icon */}
      <View style={styles(colors, font).icon_view}>
        <MaterialCommunityIcons
          name={themeMap[themeMapKeys[themeIndex]]["icon"]}
          style={[
            styles(colors, font).icon_position,
            { color: themeMap[themeMapKeys[themeIndex]]["color"] },
          ]}
          size={iconSize}
          onPress={() => handleSetThemeIndex()}
        />
      </View>

      <View style={styles(colors, font).content_view}>
        {/* Title */}
        <View style={styles(colors, font).horizontal_view}>
          <Image style={styles(colors, font).logo} source={logo} />
          <Text style={styles(colors, font).text_title}>
            {lowerCase("UBC Med Formulary", theme)}
          </Text>
        </View>

        {/* Nav Buttons */}
        <View>
          <NavButton
            label={lowerCase("Learn Pharmacology", theme)}
            page="Year"
          />
          <NavButton label={lowerCase("Formulary", theme)} page="Formulary" />
        </View>
      </View>

      {/* Report Button*/}
      <TouchableOpacity
        style={styles(colors, font).button_report}
        onPress={() => handleReport()}
        hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
      >
        <Text style={styles(colors, font).text_about}>
          {lowerCase("Report a Problem", theme)}
        </Text>
      </TouchableOpacity>

      {/* About Button */}
      <TouchableOpacity
        style={styles(colors, font).button_about}
        onPress={() => handleAbout()}
        hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
      >
        <Text style={styles(colors, font).text_about}>
          {lowerCase("About", theme)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Entry point for the formulary
 * @returns
 */
export default function App() {
  const [loaded] = useFonts({
    Grimnotes: require("./assets/fonts/Grimnotes.ttf"),
    Hynings: require("./assets/fonts/HyningsHandwritingV2-Regular.ttf"),
  });
  const [theme, setTheme] = useState("Light");
  const themeData = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={themeMap[theme].theme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Year" component={YearSelectionScreen} />
          <Stack.Screen name="Learn" component={LearnPharmacologyScreen} />
          <Stack.Screen name="Formulary" component={FormularyScreen} />
          <Stack.Screen name="QuizSelect" component={QuizSelectionScreen} />
          <Stack.Screen name="QuizQuestion" component={QuizQuestionScreen} />
          <Stack.Screen name="DrugInfo" component={DrugInfoScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = (colors, font) =>
  StyleSheet.create({
    button_about: {
      bottom: "3%",
      position: "absolute",
      right: 30,
    },
    button_feedback_submit: {
      marginTop: "1%",
      marginBottom: "10%",
      padding: 5,
      borderRadius: 5,
      borderColor: colors.border,
      backgroundColor: colors.button,
      borderWidth: 1.5,
    },
    button_report: {
      bottom: "3%",
      position: "absolute",
      left: 30,
    },
    container: {
      alignItems: "center",
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: "center",
    },
    content_view: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
      marginBottom: "15%",
    },
    horizontal_view: {
      alignItems: "center",
      flexDirection: "row",
      padding: "2%",
    },
    icon_position: {
      marginLeft: "87%",
      marginTop: 40,
    },
    icon_view: {
      flex: 0.2,
    },
    input: {
      height: WINDOW.height * 0.1,
      width: WINDOW.width * 0.8,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: colors.text,
      color: colors.text,
      textAlignVertical: "top",
      backgroundColor: colors.text_input_background,
    },
    link: {
      color: "#89cff0",
      fontFamily: font.style,
      fontSize: 20 * font.scale * WINDOW.scale,
      alignSelf: "center",
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "5%",
    },
    logo: {
      height: 116 * WINDOW.scale,
      width: 84 * WINDOW.scale,
    },
    modal: {
      backgroundColor: "#fff",
      width:
        WINDOW.width > WINDOW.height ? WINDOW.width * 0.5 : WINDOW.width * 0.8,
      height: WINDOW.height * 0.6,
      alignSelf: "center",
      borderRadius: 25,
      backgroundColor: colors.background,
    },
    modal_report: {
      backgroundColor: "#fff",
      width:
        WINDOW.width * 0.5 > WINDOW.height * 0.5
          ? WINDOW.width * 0.5
          : WINDOW.width * 0.9,
      height: WINDOW.height * 0.5,
      alignSelf: "center",
      borderRadius: 25,
      backgroundColor: colors.background,
    },
    text_about: {
      color: colors.button_text,
      fontFamily: font.style,
      fontSize: 27 * font.scale * WINDOW.scale,
    },
    text_aboutTitle: {
      color: colors.button_text,
      fontFamily: font.style,
      fontSize: 35 * font.scale * WINDOW.scale,
      textDecorationLine: "underline",
    },
    text_feedback_submit: {
      color: colors.button_text,
      fontFamily: font.style,
    },
    text_report: {
      color: colors.button_text,
      fontFamily: font.style,
      fontSize: 35 * font.scale * WINDOW.scale,
    },
    text_report_subheader: {
      color: colors.button_text,
      fontFamily: font.style,
      fontSize: 20 * font.scale * WINDOW.scale,
      alignSelf: "center",
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "2%",
    },
    text_title: {
      color: colors.text,
      fontFamily: font.style,
      fontSize: 50 * font.scale * WINDOW.scale,
      marginLeft: "5%",
    },
  });
