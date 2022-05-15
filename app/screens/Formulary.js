import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DarkTheme, List, Provider, Searchbar, Menu, Button, Divider } from 'react-native-paper';
import BackButton from '../components/BackButton';
import DropDownPicker from 'react-native-dropdown-picker';
import 'react-native-vector-icons'

import { DEFAULT_STYLE } from '../constants/Styles';
import { WINDOW } from '../constants/Dimensions';

import { drugClass } from '../data/formulary/maps/drug-class'
import { contraindication } from "../data/formulary/maps/contraindication"

// NOT IMPLEMENTED YET
import { indication } from "../data/formulary/maps/indication"
import { sideEffect } from "../data/formulary/maps/side-effect"
import { bodySystem } from "../data/formulary/maps/body-system"
import { cblCase } from "../data/formulary/maps/cbl-case"


const thisStyle = DEFAULT_STYLE

export default function FormularyScreen() {

    const navigation = useNavigation();

    // #region Dropdown Menu

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
    const bodySystemText = textify(bodySystem)
    const cblCaseText = textify(cblCase)

    // Drug Class is the entry sort order
    const defaultText = drugClassText
    const defaultLabel = drugClass
    const defaultTitle = "Drug Class"
    const [sortOrder, setSortOrder] = useState(defaultText)
    const [sortLabel, setSortLabel] = useState(defaultLabel)
    const [title, setTitle] = useState(defaultTitle)

    // Update sort order
    const handleChangeValuePress = (value, dict_text, dict_values) => {
      setSortOrder(dict_text[value])
      setSortLabel(dict_values[value])
      setTitle(dict_titles[value])
    }

    // Mappings. 
    // TODO: Try refactoring to backend
    var dict_text = {
      drugClass: drugClassText,
      contraindication: contraindicationsText,
      indication: indicationText,
      sideEffect: sideEffectText,
      cblCase: cblCaseText,
      bodySystem : bodySystemText
    };
    var dict_values = {
      drugClass: drugClass,
      contraindication: contraindication,
      indication: indication,
      sideEffect: sideEffect,
      cblCase: cblCase,
      bodySystem : bodySystem
    };
    var dict_titles = {
      drugClass: "Drug Class",
      contraindication: "Contraindications",
      indication: "Indications",
      sideEffect: "Side Effects",
      cblCase: "CBL Case",
      bodySystem : "Body System"
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
      {label: "Body System", value: 'bodySystem'}
    ]);

    // #endregion

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const handleDrugPress = (drug) => {
        navigation.navigate("DrugInfo", {drug: drug})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection:"row", zIndex: 999}}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                icon="pill"
                style = {styles.searchbar}
                inputStyle= {{color: "#000"}}
              />
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              listItemLabelStyle={{fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android}}
              dropDownContainerStyle={{borderColor: "#fff", width:"36%"}}
              placeholder="Browse By"
              style={styles.dropdown_menu}
              placeholderStyle={{
                fontSize: 15,
                fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
              }}
              onChangeValue={(value) => {handleChangeValuePress(value, dict_text, dict_values)}}
            />
          </View>
          <List.Section titleStyle={styles.accordion}>
              {
              sortOrder.map((drug_class, key) => (
                  <List.Accordion
                      key={key}
                      title={drug_class}
                      left={props => <List.Icon {...props}/>}>
                      {
                          sortLabel[drug_class.replace(" ", "_")].map((drug, key) => (
                              <List.Item key={key} title={drug} button onPress={() => {handleDrugPress(drug)}}/>
                          ))
                      }
                  </List.Accordion>
              ))
              }
          </List.Section>
      
          <BackButton page="Home"/>
        </View>
    );
  }


const styles = StyleSheet.create({
    accordion: {
        fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
        fontSize: 30 * WINDOW.scale,
        fontWeight: "normal",
        color: thisStyle.text_primary
    },
    container: {
      flex: 1,
      backgroundColor: thisStyle.background,
      paddingTop: 40
    },
    dropdown_menu: {
      width: "36%",
      borderRadius: 25,
      borderWidth: 0,
      shadowColor: "#a9a9a9",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
          height: 3,
          width: 1
      }
    },
    searchbar: {
      width: '50%',
      alignSelf: 'center',
      borderRadius: 30,
      marginBottom: 10,
      marginRight: "4.5%",
      marginLeft: "5%",

    },
    text: {
      alignSelf: "center",
      fontSize: 25* WINDOW.scale,
      fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
    },
    title: {
      fontSize: 35 * WINDOW.scale,
      alignSelf: 'flex-start',
      marginLeft: "3%",
      marginBottom: 20,
      fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
    }
  });