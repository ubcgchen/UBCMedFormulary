/**
 * Main Formulary Screen
 * @author George Chen, UBC VFMP 2025
 */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { List, Searchbar } from "react-native-paper";
import BackButton from "../components/BackButton";
import DropDownPicker from "react-native-dropdown-picker";
import "react-native-vector-icons";
import Modal from "react-native-modal";

import { WINDOW } from "../constants/Dimensions";
import * as DRUGS from "../data/formulary/drugs";

import { drugClass } from "../data/formulary/maps/drug-class";

export default function FormularyScreen() {
  const navigation = useNavigation();
  const { colors, font } = useTheme();

  // #region Dropdown Menu

  const handleSetAllDrugs = (label) => {
    let temp_allDrugs = [];
    for (const key in label) {
      temp_allDrugs.push.apply(temp_allDrugs, label[key]);
    }
    return temp_allDrugs;
  };

  /**
   * Convert the backend variable names to text format to be displayed
   * @param {String} label
   * @returns textified label
   */
  const textify = (label) => {
    const res = Object.keys(label).map(function (x) {
      x = x.replace(/___/g, " - "); // Replace 3 underlines with spaces + dash to convert variable names to text
      x = x.replace(/__/g, "-"); // Replace 2 underlines with dash to convert variable names to text
      x = x.replace(/_/g, " "); // Replace 1 underline with spaces to convert variable names to text
      return x;
    });
    return res;
  };
  /**
   * Convert the text format to backend variable names. Does the opposite of textify
   * @param {String} label
   * @returns un_textified label
   */
  const un_textify = (label) => {
    label = label.replace(" - ", "___");
    label = label.replace("-", "__");
    label = label.replace(/ /g, "_");
    return label;
  };

  const drugClassText = textify(drugClass);

  // Drug Class is the entry sort order
  const defaultText = drugClassText;
  const defaultLabel = drugClass;
  const defaultTitle = "Formulary";
  const [sortOrder, setSortOrder] = useState(defaultText);
  const [sortLabel, setSortLabel] = useState(defaultLabel);
  const [title, setTitle] = useState(defaultTitle);
  const [allDrugs, setAllDrugs] = useState(handleSetAllDrugs(defaultLabel));
  const [filteredDrugs, setFilteredDrugs] = useState(
    handleSetAllDrugs(defaultLabel)
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeValuePress = (value) => {
    // Nothing needs to be done
  };

  // Dropdown hooks
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("drugName");
  const [items, setItems] = useState([
    { label: "Name", value: "drugName" },
    { label: "Class", value: "drugClass" },
  ]);

  // #endregion

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearchName = (query) => {
    if (value == "drugName") {
      setSearchQuery(query);
      let temp_filteredDrugs = allDrugs.filter((drug) =>
        drug.toLowerCase().startsWith(query.toLowerCase())
      );
      setFilteredDrugs(temp_filteredDrugs);
    } else {
      setSearchQuery(query);
      let temp_filteredClasses = drugClassText.filter((drugClass) =>
        drugClass.toLowerCase().startsWith(query.toLowerCase())
      );
      let temp_filteredDrugs = [];
      temp_filteredClasses.forEach((filteredClass, key) => {
        temp_filteredDrugs.push.apply(
          temp_filteredDrugs,
          drugClass[un_textify(filteredClass)]
        );
      });
      setFilteredDrugs(temp_filteredDrugs);
    }
  };

  const isBucketEmpty = (label) => {
    return (
      drugClass[label].filter((x) => filteredDrugs.includes(x)).length != 0
    );
  };

  /**
   * Navigates to appropriate drugInfo screen
   * @param {string} drug name of drug to navigate to
   */
  const handleDrugPress = (drug) => {
    let drug_file = drug;
    if (!isNaN(drug_file.charAt(0))) drug_file = "_" + drug_file;
    const drug_info =
      DRUGS[drug_file.toLowerCase().replace(/\s/g, "_").replace(/-/g, "_")];

    if (drug_info !== undefined) {
      navigation.navigate("DrugInfo", { drug_info: drug_info, drug: drug });
    } else {
      setModalVisible(true);
    }
  };

  function handleBackdropPress() {
    setModalVisible(false);
  }

  return (
    <KeyboardAvoidingView style={styles(colors, font, null).container}>
      <Modal
        animationType="fade"
        isVisible={modalVisible}
        transparent={true}
        onBackdropPress={handleBackdropPress}
      >
        <View style={styles(colors, font, null).modal}>
          <Text>More drug info coming soon!</Text>
        </View>
      </Modal>
      <Text style={styles(colors, font, null).title}>{title}</Text>
      <View style={{ flexDirection: "row", zIndex: 500 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearchName}
          value={searchQuery}
          icon="pill"
          style={styles(colors, font, open).searchbar}
          inputStyle={{ color: colors.text }}
          placeholderTextColor={colors.text}
          placeholderStyle={{ font: font }}
          iconColor={colors.text}
        />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          defaultValue={value}
          listItemLabelStyle={{
            fontFamily: font.style,
            color: colors.text,
            fontSize: 15 * font.scale,
          }}
          selectedItemLabelStyle={{ fontWeight: "bold" }}
          dropDownContainerStyle={{
            borderColor: colors.formulary_header,
            backgroundColor: colors.formulary_header,
            width: "36%",
            zIndex: 500,
          }}
          placeholder="Name"
          placeholderStyle={{
            fontFamily: font.style,
            color: colors.text,
            fontSize: 15 * font.scale,
          }}
          textDecorationColor={colors.text}
          style={styles(colors, font, null).dropdown_menu}
          onChangeValue={(value) => {
            handleChangeValuePress(value);
          }}
          dropdownIconColor={colors.text}
        />
      </View>
      <KeyboardAvoidingView style={{ marginBottom: 200 }}>
        <ScrollView>
          <List.Section titleStyle={styles(colors, font, null).accordion}>
            {sortOrder
              .filter((label) =>
                isBucketEmpty(
                  label
                    .replace(/ - /g, "___")
                    .replace(/-/g, "__")
                    .replace(/ /g, "_")
                )
              )
              .map((label, key) => (
                <List.Accordion
                  key={key}
                  title={label}
                  left={(props) => <List.Icon {...props} />}
                  style={{ backgroundColor: colors.background }}
                  titleStyle={{
                    color: colors.text,
                    fontFamily: font.style,
                    fontSize: 17 * font.scale,
                  }}
                  // titleNumberOfLines={-1}
                  titleNumberOfLines={0}
                  theme={{ colors: { text: colors.text } }}
                >
                  {sortLabel[
                    label
                      .replace(/ - /g, "___")
                      .replace(/-/g, "__")
                      .replace(/ /g, "_")
                  ]
                    .filter((drug) => filteredDrugs.includes(drug))
                    .map((drug, key) => (
                      <List.Item
                        key={key}
                        title={drug}
                        titleStyle={{
                          color: colors.text,
                          fontSize: 15 * font.scale,
                          fontFamily: font.style,
                        }}
                        style={{ backgroundColor: colors.button }}
                        button
                        onPress={() => {
                          handleDrugPress(drug);
                        }}
                      />
                    ))}
                </List.Accordion>
              ))}
          </List.Section>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackButton page="Home" />
    </KeyboardAvoidingView>
  );
}

const styles = (colors, font, open) =>
  StyleSheet.create({
    accordion: {
      fontFamily: font.style,
      fontSize: 30 * WINDOW.scale,
      fontWeight: "normal",
      color: colors.text,
      zIndex: -1,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 40,
    },
    dropdown_menu: {
      width: "30%",
      borderRadius: 25,
      backgroundColor: colors.formulary_header,
      borderWidth: 0,
      shadowColor: colors.shadow,
      shadowOpacity: 0.8,
      shadowRadius: 4,
      shadowOffset: {
        height: 3,
        width: 1,
      },
      zIndex: 500,
    },
    modal: {
      flexDirection: "column",
      padding: 30,
      alignSelf: "center",
      borderRadius: 25,
      backgroundColor: colors.background,
    },
    searchbar: {
      width: "55%",
      alignSelf: "center",
      borderRadius: 30,
      marginBottom: Platform.OS === "ios" ? 25 : open ? 200 : 25,
      marginRight: "4.5%",
      marginLeft: "5%",
      zIndex: 500,
      backgroundColor: colors.formulary_header,
      textDecorationColor: colors.text,
    },
    text: {
      alignSelf: "center",
      fontSize: 25 * WINDOW.scale,
      fontFamily: font.style,
    },
    title: {
      fontSize: 35 * WINDOW.scale,
      alignSelf: "flex-start",
      marginTop: "3%",
      marginLeft: "5%",
      marginBottom: 20,
      fontFamily: font.style,
      color: colors.text,
    },
  });
