import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { DEFAULT_STYLE } from '../constants/Styles';

function NavButton({ label, page, param }) {

    const navigation = useNavigation();
    const { colors, font } = useTheme()

    return(
        <TouchableOpacity style={styles(colors, font).button_nav} onPress={() => {navigation.navigate(page, param)}}>
          <Text style={styles(colors, font).text_buttons}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = (colors, font) => StyleSheet.create({
    button_nav: {
        alignItems: "center",
        backgroundColor: colors.button,
        padding: 12,
        borderColor: colors.border,
        borderWidth: 1.5,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 20,
        width: 275,
        height: 50
    },
    text_buttons: {
        fontSize: 18 * font.scale,
        color: colors.button_text,
        fontFamily: font.style
    },
});

export default NavButton;