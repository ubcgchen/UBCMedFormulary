import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List } from 'react-native-paper';
import BackButton from '../components/BackButton';

import { DEFAULT_STYLE } from '../constants/Styles';
import { WINDOW } from '../constants/Dimensions';
import { DRUG_CLASS } from '../data/formulary/maps/drug-class'

const thisStyle = DEFAULT_STYLE

export default function FormularyScreen() {

    const navigation = useNavigation();
    const drug_classes = Object.keys(DRUG_CLASS).map(function(drug_class) {
        drug_class = drug_class.replace("_"," "); // Replace underlines with spaces to convert variable names to text
        return drug_class
    });

    const handleDrugPress = (drug) => {
        navigation.navigate("DrugInfo", {drug: drug})
    }
  
    return (
      <View style={styles.container}>
        <List.Section title="Drug Class" titleStyle={styles.accordion}>
            {
            drug_classes.map((drug_class, key) => (
                <List.Accordion
                    key={key}
                    title={drug_class}
                    left={props => <List.Icon {...props}/>}>
                    {
                        DRUG_CLASS[drug_class.replace(" ", "_")].map((drug, key) => (
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
        color: thisStyle.text_primary,
        marginTop: 20
    },
    container: {
      flex: 1,
      backgroundColor: thisStyle.background,
    },
  });