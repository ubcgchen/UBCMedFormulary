{/* Imports */}
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import * as DRUGS from '../data/formulary/drugs'
import { STRINGS } from '../constants/Strings';
import { WINDOW } from '../constants/Dimensions';
import DottedLine from '../components/DottedLine';


export default function DrugInfoScreen({route}) {
  const { drug } = route.params;
  console.log(drug.toLowerCase().replace(/\s/g, ''))
  const drug_info = DRUGS[drug.toLowerCase().replace(/\s/g, '')];
  const navigation = useNavigation();
  const fields = Object.keys(drug_info);
  const { colors, font } = useTheme()

  return (
    <View style={styles(colors, font). container}>
    <View style = {{flexDirection: 'row'}}>
    <View style={{flex: 1, alignSelf: 'flex-start'}}>
        <TouchableOpacity style={styles(colors, font). button_quizexit} onPress={() => {navigation.navigate(STRINGS.formulary_page)}}>
                <Text style={styles(colors, font). text_exitquiz}>{'<'}</Text>
        </TouchableOpacity>
    </View>
    <View style={{flex: 5, alignSelf: 'center'}}>
        <Text style={styles(colors, font). title}>{drug}</Text>
    </View>
    <View style={{flex: 1}}></View>
    </View>
      <ScrollView style={styles(colors, font). data} contentContainerStyle={{paddingBottom: 30, paddingTop: 20}}>
          {
              fields.map((field, key) => (
                  <View key = {key}>
                      <View style={{flexDirection:"row"}}>
                          {/* formatting: split and capitalize words */}
                          <Text style={{color: colors.text, fontWeight:"bold", flex: 0.9/(Math.pow(WINDOW.scale,2)), marginLeft: "7%", fontFamily: font.style, fontSize: 15*font.scale}}>{field.replace("-", " ").replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</Text>
                          {/* conditional formatting: is the child an object or an array? */}
                          {
                              typeof drug_info[field][0] == 'object' ?
                              <View style={{flex:4.5, marginRight: "7%"}}>
                                  {
                                      Object.keys(drug_info[field][0]).map(system => (
                                      <View style={{flexDirection:"row"}}>
                                          <Text style={{color: colors.text, fontWeight:"bold", fontFamily: font.style, fontSize: 15*font.scale}}>{system}: </Text>
                                          <Text style={{color: colors.text, marginRight: "7%", fontFamily: font.style, fontSize: 15*font.scale}}>{drug_info[field][0][system].join(', ')}</Text>
                                      </View>
                                      ))
                                  }
                              </View> :
                              <Text style={{color: colors.text, flex: 4.5, marginRight: "7%", fontFamily: font.style, fontSize: 15*font.scale}}>{drug_info[field].join('\n\n')}</Text>
                          }
                      </View>
                      <DottedLine/>
                  </View>
              ))
          }
          </ScrollView>
    </View>
  );
}

const styles = (colors, font) => StyleSheet.create({
  button_quizexit: {
      marginLeft: WINDOW.width * 0.02,
      marginBottom: WINDOW.height * 0.01,
      fontFamily: font.style,
      padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,   
    paddingTop: 40,
  },
  data:{
    fontSize: 15,
    flex: 1,
  },
  title: {
    fontSize: 50 * WINDOW.scale * font.scale,
    color: colors.text,
    fontFamily: font.style,
    marginBottom: 20,
    textDecorationLine: "underline",
    alignSelf:'center'
  },
  text_exitquiz: {
      fontSize: WINDOW.scale * 35 * font.scale, 
      color: colors.text, 
      fontFamily: font.style
  }
});