import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DarkTheme, List, Provider, Searchbar, Menu, Button, Divider } from 'react-native-paper';
import BackButton from '../components/BackButton';
import DropDownPicker from 'react-native-dropdown-picker';
import 'react-native-vector-icons'

import { DEFAULT_STYLE } from '../constants/Styles';
import { WINDOW } from '../constants/Dimensions';
import { DRUG_CLASS } from '../data/formulary/maps/drug-class'
import { CONTRAINDICATIONS } from "../data/formulary/maps/contraindication";

const thisStyle = DEFAULT_STYLE

export default function FormularyScreen() {

    const navigation = useNavigation();

    // TODO: REFACTOR INTO HELPER
    const drug_classes = Object.keys(DRUG_CLASS).map(function(drug_class) {
        drug_class = drug_class.replace("_"," "); // Replace underlines with spaces to convert variable names to text
        return drug_class
    });
    const contraindications = Object.keys(CONTRAINDICATIONS).map(function(contraindication) {
      contraindication = contraindication.replace("_"," "); // Replace underlines with spaces to convert variable names to text
      return contraindication
    });
    //

    const handleChangeValuePress = (value, dict, dict1, sorts) => {
      console.log(sorts["sort_order"])
      sorts["sort_order"] = dict[value]
      sorts["sort_labels"] = dict1[value]
      console.log(sorts["sort_order"])
    }

    // TODO: REFACTOR TO BACKEND
    var dict = {
      drugClass: drug_classes,
      contraindication: contraindications,
      indication: drug_classes,
      sideEffect: contraindications,
      cblCase: drug_classes,
      bodySystem : contraindications
    };
    var dict1 = {
      drugClass: DRUG_CLASS,
      contraindication: CONTRAINDICATIONS,
      indication: DRUG_CLASS,
      sideEffect: CONTRAINDICATIONS,
      cblCase: DRUG_CLASS,
      bodySystem : CONTRAINDICATIONS
    };
    //

    const current_sort_order = "Drug Class"
    let sorts = {
      sort_order: drug_classes,
      sort_labels: DRUG_CLASS
    }

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const handleDrugPress = (drug) => {
        navigation.navigate("DrugInfo", {drug: drug})
    }

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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{current_sort_order}</Text>
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
              onChangeValue={(value) => {handleChangeValuePress(value, dict, dict1, sorts)}}
            />
          </View>
          <List.Section titleStyle={styles.accordion}>
              {
              sorts.sort_order.map((drug_class, key) => (
                  <List.Accordion
                      key={key}
                      title={drug_class}
                      left={props => <List.Icon {...props}/>}>
                      {
                          sorts.sort_labels[drug_class.replace(" ", "_")].map((drug, key) => (
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