import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List } from 'react-native-paper';
import BackButton from '../components/BackButton';

import { COLORS } from '../constants/Colours';
import { WINDOW } from '../constants/Dimensions';

export default function FormularyScreen() {
    const navigation = useNavigation();
  
    const [expanded, setExpanded] = React.useState(true);
  
    const handlePress = () => setExpanded(!expanded);
  
    return (
      <View style={styles.container}>
        <List.Section title="Drug Class" titleStyle={styles.accordion}>
            <List.Accordion
                title="Analgesics"
                left={props => <List.Icon {...props}/>}>
                <List.Item title="Acetaminophen" />
                <List.Item title="Ibuprofen" />
            </List.Accordion>
    
            <List.Accordion
                title="Antibacterials"
                left={props => <List.Icon {...props}/>}>
                <List.Item title="Penicillin" />
                <List.Item title="Vancomycin" />
            </List.Accordion>
        </List.Section>
    
        <BackButton page="Home"/>
      </View>
    );
  }


const styles = StyleSheet.create({
    accordion: {
        fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light", // Determine font based on platform
        fontSize: 30 * WINDOW.scale,
        fontWeight: "normal",
        color: COLORS.text_primary,
        marginTop: 20
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });