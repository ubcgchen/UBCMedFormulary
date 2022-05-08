{/* Imports */}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{/* Screens */}
import HomeScreen from './app/screens/Home';
import LearnPharmacologyScreen from './app/screens/LearnPharmacology';
import QuizSelectionScreen from './app/screens/QuizSelection';
import QuizQuestionScreen from './app/screens/QuizQuestion';
import ResultsScreen from './app/screens/Results';
import FormularyScreen from './app/screens/Formulary';
import DrugInfoScreen from './app/screens/DrugInfo';
import { STRINGS } from './app/constants/Strings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Learn" component={LearnPharmacologyScreen}/>
        <Stack.Screen name={STRINGS.formulary_page} component={FormularyScreen} />
        <Stack.Screen name="QuizSelect" component={QuizSelectionScreen} />
        <Stack.Screen name="QuizQuestion" component={QuizQuestionScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="DrugInfo" component={DrugInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}