{/* Imports */}
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as DRUGS from '../data/formulary/drugs'
import { STRINGS } from '../constants/Strings';
import { WINDOW } from '../constants/Dimensions';
import { DEFAULT_STYLE } from '../constants/Styles';
import DottedLine from '../components/DottedLine';

const thisStyle = DEFAULT_STYLE

export default function DrugInfoScreen({route}) {
    const { drug } = route.params;
    const drug_info = DRUGS[drug.toLowerCase()];
    const navigation = useNavigation();
    const fields = Object.keys(drug_info)

    console.log(typeof drug_info[STRINGS.sideEffects][0] == 'object') 
    console.log(fields)
    
    return(
        <View style={styles.container}>
            <View style = {{flexDirection: 'row'}}>
            <View style={{flex: 1, alignSelf: 'flex-start'}}>
                <TouchableOpacity style={styles.button_quizexit} onPress={() => {navigation.navigate(STRINGS.formulary_page)}}>
                        <Text style={styles.text_exitquiz}>{'<'}</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 5, alignSelf: 'center'}}>
                <Text style={styles.title}>{drug}</Text>
            </View>
            <View style={{flex: 1}}></View>
          </View>
            <ScrollView style={styles.data} contentContainerStyle={{paddingBottom: 30, paddingTop: 20}}>
                {
                    fields.map(field => (
                        <View>
                            <View style={{flexDirection:"row"}}>
                                {/* formatting: split and capitalize words */}
                                <Text style={{fontWeight:"bold", flex: 0.9/(Math.pow(WINDOW.scale,2)), marginLeft: "7%"}}>{field.replace("-", " ").replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</Text>
                                {/* conditional formatting: is the child an object or an array? */}
                                {
                                    typeof drug_info[field][0] == 'object' ?
                                    <View style={{flex:4.5, marginRight: "7%"}}>
                                        {
                                            Object.keys(drug_info[field][0]).map(system => (
                                            <View style={{flexDirection:"row"}}>
                                                <Text style={{fontWeight:"bold"}}>{system}: </Text>
                                                <Text style={{marginRight: "7%"}}>{drug_info[field][0][system].join(', ')}</Text>
                                            </View>
                                            ))
                                        }
                                    </View> :
                                    <Text style={{flex: 4.5, marginRight: "7%"}}>{drug_info[field].join(', ')}</Text>
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

    const styles = StyleSheet.create({
        button_quizexit: {
            marginLeft: WINDOW.width * 0.02,
            marginBottom: WINDOW.height * 0.01,
            fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
            padding: 10
        },
        container: {
          flex: 1,
          backgroundColor: thisStyle.background,   
          paddingTop: 40,
        },
        data:{
          fontSize: 15,
          flex: 1,
        },
        title: {
          fontSize: 50 * WINDOW.scale,
          fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android, // Determine font based on platform
          marginBottom: 20,
          textDecorationLine: "underline",
          alignSelf:'center'
        },
        text_exitquiz: {
            fontSize: WINDOW.scale * 35, 
            color: thisStyle.text_primary, 
            fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android // Determine font based on platform
        }
      });