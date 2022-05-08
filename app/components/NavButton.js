import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DEFAULT_STYLE } from '../constants/Styles';

const thisStyle = DEFAULT_STYLE

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
        backgroundColor: thisStyle.button,
        padding: 12,
        borderColor: thisStyle.button_outline,
        borderWidth: 1.5,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 20,
        width: 275,
        height: 50
    },
    text_buttons: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? thisStyle.font_ios : thisStyle.font_android // Determine font based on platform
    },
});

export default NavButton;