import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BackButton({ page }) {

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.button_back} onPress={() => {navigation.navigate(page)}}>
          <Text style={styles.text_buttons}>Back</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button_back: {
        position: 'absolute',
        left: 20,
        bottom: 20,
    },
    text_buttons: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
    },
});

export default BackButton;