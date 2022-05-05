import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NavButton({ label, page }) {

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.button_nav} onPress={() => {navigation.navigate(page)}}>
          <Text style={styles.text_buttons}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button_nav: {
        alignItems: "center",
        backgroundColor: "#ebebeb",
        padding: 12,
        borderColor: "black",
        borderWidth: 1.5,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 20,
        width: 275,
        height: 50
    },
    text_buttons: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? "DamascusLight" : "sans-serif-light" // Determine font based on platform
    },
});

export default NavButton;