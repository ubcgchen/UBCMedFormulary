/**
 * App entry point and home screen
 * @author George Chen, UBC VFMP 2025
 */

// Imports
import React, { useState } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
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
import { TextInput } from "react-native-paper";

const ThemeContext = React.createContext();
const Stack = createNativeStackNavigator(); // For navigation between screens

const iconSize = 50 * WINDOW.scale;

// Global variables
global.theme;

/**
 * Home screen
 * @returns JSX expression for the home screen
 */
function HomeScreen() {
  const { setTheme, theme } = React.useContext(ThemeContext);
  const { colors, font, logo } = useTheme();
  const [themeIndex, setThemeIndex] = useState(themeMapKeys.indexOf(theme));
  const [text, setText] = useState("");

  global.theme = theme;

  const [modalVisible, setModalVisible] = useState(false); // About modal
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
    setModalVisible(true);
  };

  const handleReport = () => {
    setReportModalVisible(true);
  };

  function handleBackdropPress() {
    setModalVisible(false);
    setReportModalVisible(false);
  }

  return (
    <View style={styles(colors, font).container}>
      <Modal
        animationType="fade"
        isVisible={modalVisible}
        transparent={true}
        onBackdropPress={handleBackdropPress}
      >
        <View style={styles(colors, font).modal}>
          <MaterialCommunityIcons
            name="close"
            size={25}
            onPress={() => {
              setModalVisible(false);
            }}
            style={{
              padding: 30,
              color: colors.text,
            }}
          />
          <View
            style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}
          >
            <Text style={styles(colors, font).text_aboutTitle}>
              {lowerCase("About this App", theme)}
            </Text>
          </View>

          <View style={{ flex: 3, marginLeft: "5%", marginRight: "5%" }}>
            <Text style={styles(colors, font).text_about}>
              Project Supervisor: Dr. Jennifer Shabbits {"\n"}
            </Text>
            <Text style={styles(colors, font).text_about}>
              Software Developer: George Chen, VFMP 2025 {"\n"}
            </Text>
            <Text style={styles(colors, font).text_about}>
              Content Developer: Michael Gong, VFMP 2025 {"\n"}
            </Text>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        isVisible={reportModalVisible}
        transparent={true}
        onBackdropPress={handleBackdropPress}
        avoidKeyboard={true}
      >
        <View style={styles(colors, font).modal_report}>
          <MaterialCommunityIcons
            name="close"
            size={25}
            onPress={() => {
              setReportModalVisible(false);
            }}
            style={{
              padding: 30,
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
            <View>
              <Text style={styles(colors, font).text_report}>
                {lowerCase("Bugs & Suggestions?", theme)}
              </Text>
            </View>
            <View>
              <Text style={styles(colors, font).text_report_subheader}>
                {lowerCase(
                  "Leave your suggestions here to make this app better! If you are reporting a bug, let us know the actions leading up to the bug as well :)",
                  theme
                )}
              </Text>
            </View>
            <View>
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
            page="Learn"
          />
          <NavButton label={lowerCase("Formulary", theme)} page="Formulary" />
        </View>
      </View>

      {/* Report Button*/}
      <TouchableOpacity
        style={styles(colors, font).button_report}
        onPress={() => handleReport()}
      >
        <Text style={styles(colors, font).text_about}>
          {lowerCase("Report a Problem", theme)}
        </Text>
      </TouchableOpacity>

      {/* About Button */}
      <TouchableOpacity
        style={styles(colors, font).button_about}
        onPress={() => handleAbout()}
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
          <Stack.Screen name="Learn" component={LearnPharmacologyScreen} />
          <Stack.Screen name="Formulary" component={FormularyScreen} />
          <Stack.Screen name="QuizSelect" component={QuizSelectionScreen} />
          <Stack.Screen name="QuizQuestion" component={QuizQuestionScreen} />
          <Stack.Screen name="DrugInfo" component={DrugInfoScreen} />
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
      height: WINDOW.height * 0.5,
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
