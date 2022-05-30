import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { DarkTheme, List, Provider, Searchbar, Menu, Button, Divider } from 'react-native-paper';
import BackButton from '../components/BackButton';
import DropDownPicker from 'react-native-dropdown-picker';
import 'react-native-vector-icons'

import { WINDOW } from '../constants/Dimensions';

import { drugClass } from '../data/formulary/maps/drug-class'
import { contraindication } from "../data/formulary/maps/contraindication"

// NOT IMPLEMENTED YET
import { indication } from "../data/formulary/maps/indication"
import { sideEffect } from "../data/formulary/maps/side-effect"
import { cblCase } from "../data/formulary/maps/cbl-case"

export default function FormularyScreen() {

    const navigation = useNavigation();
    const {colors, font} = useTheme()

    // #region Dropdown Menu

    const handleSetAllDrugs = (label) => {
      let temp_allDrugs = []
      for (const key in label) {
        temp_allDrugs.push.apply(temp_allDrugs, label[key])
      }
      return(temp_allDrugs)
    }

    // Convert the backend variable names to text format to be displayed
    const textify = (label) => {
      const res = Object.keys(label).map(function(x) {
        x = x.replace("_"," "); // Replace underlines with spaces to convert variable names to text
        return x
      })
      return res
    }
    const drugClassText = textify(drugClass)
    const contraindicationsText = textify(contraindication)
    const indicationText = textify(indication)
    const sideEffectText = textify(sideEffect)
    const cblCaseText = textify(cblCase)

    // Drug Class is the entry sort order
    const defaultText = drugClassText
    const defaultLabel = drugClass
    const defaultTitle = "Drug Class"
    const [sortOrder, setSortOrder] = useState(defaultText)
    const [sortLabel, setSortLabel] = useState(defaultLabel)
    const [title, setTitle] = useState(defaultTitle)
    const [allDrugs, setAllDrugs] = useState([])
    const [filteredDrugs, setFilteredDrugs] = useState(handleSetAllDrugs(defaultLabel))

    // Update sort order
    const handleChangeValuePress = (value, dict_text, dict_values) => {
      setSortOrder(dict_text[value])
      setSortLabel(dict_values[value])
      setTitle(dict_titles[value])
      setAllDrugs(handleSetAllDrugs(dict_values[value]))
    }

    // Mappings. 
    // TODO: Try refactoring to backend
    var dict_text = {
      drugClass: drugClassText,
      contraindication: contraindicationsText,
      indication: indicationText,
      sideEffect: sideEffectText,
      cblCase: cblCaseText,
    };
    var dict_values = {
      drugClass: drugClass,
      contraindication: contraindication,
      indication: indication,
      sideEffect: sideEffect,
      cblCase: cblCase,
    };
    var dict_titles = {
      drugClass: "Drug Class",
      contraindication: "Contraindications",
      indication: "Indications",
      sideEffect: "Side Effects",
      cblCase: "CBL Case",
    }

    // Dropdown hooks
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: "Drug Class", value: 'drugClass'},
      {label: "Contraindication", value: 'contraindication'},
      {label: "Indication", value: 'indication'},
      {label: "Side Effect", value: 'sideEffect'},
      {label: "CBL Case", value: 'cblCase'},
    ]);

    // #endregion

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => {
      setSearchQuery(query);

      let temp_filteredDrugs = allDrugs.filter(drug => drug.startsWith(query))
      setFilteredDrugs(temp_filteredDrugs)
    }

    /**
     * Navigates to appropriate drugInfo screen
     * @param {string} drug name of drug to navigate to
     */
    const handleDrugPress = (drug) => {
        navigation.navigate("DrugInfo", {drug: drug})
    }

    return (
        <View style={styles(colors, font, null).container}>
            <Text style={styles(colors, font, null).title}>{title}</Text>
            <View style={{flexDirection:"row", zIndex: 500}}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                icon="pill"
                style = {styles(colors, font, open).searchbar}
                inputStyle= {{color: colors.text}}
                placeholderTextColor={colors.text}
                placeholderStyle={{font: font}}
                iconColor = {colors.text}
              />
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              listItemLabelStyle={{fontFamily: font.style, color: colors.text, fontSize: 15 * font.scale}}
              selectedItemLabelStyle={{fontWeight: "bold"}}
              dropDownContainerStyle={{borderColor: colors.formulary_header, backgroundColor: colors.formulary_header, width:"36%", zIndex: 500}}
              placeholder="Browse By"
              textDecorationColor={colors.text}
              style={styles(colors, font, null).dropdown_menu}
              placeholderStyle={{
                fontSize: 15 * font.scale,
                fontFamily: font.style,
                color: colors.text
              }}
              onChangeValue={(value) => {handleChangeValuePress(value, dict_text, dict_values)}}
              dropdownIconColor= {colors.text}
            />
          </View>
          <ScrollView>
            <List.Section titleStyle={styles(colors, font, null).accordion}>
                {
                sortOrder.map((label, key) => (
                    <List.Accordion
                        key={key}
                        title={label}
                        left={props => <List.Icon {...props}/>}
                        style={{backgroundColor: colors.background}}
                        titleStyle = {{color:colors.text, fontFamily: font.style, fontSize: 17 * font.scale}}
                        theme={{colors: {text: colors.text}}}>
                        {
                            sortLabel[label.replace(" ", "_")].filter(drug => filteredDrugs.includes(drug)).map((drug, key) => (
                                <List.Item key={key} title={drug} titleStyle = {{color:colors.text, fontSize: 15 * font.scale, fontFamily:font.style}} style={{backgroundColor: colors.button}} button onPress={() => {handleDrugPress(drug)}}/>
                            ))
                        }
                    </List.Accordion>
                ))
                }
            </List.Section>
          </ScrollView>

      
          <BackButton page="Home"/>
        </View>
    );
  }

const styles = (colors, font, open) => StyleSheet.create({
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
      paddingTop: 40
    },
    dropdown_menu: {
      width: "36%",
      borderRadius: 25,
      backgroundColor: colors.formulary_header,
      borderWidth: 0,
      shadowColor: colors.shadow,
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
          height: 3,
          width: 1
      },
      zIndex: 500
    },
    searchbar: {
      width: '50%',
      alignSelf: 'center',
      borderRadius: 30,
      marginBottom: Platform.OS === 'ios' ? 25 :
                    open ? 200 : 25,
      marginRight: "4.5%",
      marginLeft: "5%",
      zIndex: 500,
      backgroundColor: colors.formulary_header,
      textDecorationColor: colors.text
    },
    text: {
      alignSelf: "center",
      fontSize: 25* WINDOW.scale,
      fontFamily: font.style
    },
    title: {
      fontSize: 35 * WINDOW.scale,
      alignSelf: 'flex-start',
      marginLeft: "3%",
      marginBottom: 20,
      fontFamily: font.style,
      color: colors.text
    }
  });