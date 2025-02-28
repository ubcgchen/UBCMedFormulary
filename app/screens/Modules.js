import React from "react";
import {
    FlatList,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { WINDOW } from "../constants/Dimensions";
import { useNavigation, useTheme } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { MODULES } from "../constants/ModuleList";


// TODO:
// 1. Add progress bar
// 2. Click picture -> expand
// 3. Bullet points

export default function ModuleScreen({ route }) {
    const { colors, font } = useTheme();
    const navigation = useNavigation();

    const handleModulePress = (module_name) => {
        // Navigate to the module details or perform another action
        navigation.navigate("ModuleDetails", { colors, font, module_name });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles(colors, font).item} 
            onPress={() => handleModulePress(item)}
        >
            <Text style={styles(colors, font).title}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles(colors, font).container}>
            <Text style={styles(colors, font).text_header}>
                Pharmacology Modules
            </Text>
            <FlatList
                data={MODULES}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles(colors, font).modules_list}
            />
            <BackButton page="Home" />
        </View>
    );
}

const styles = (colors, font) =>
  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center",
    },
    item: {
        backgroundColor: colors.button,
        padding: 25 * WINDOW.scale,
        marginVertical: 8,
        borderRadius: 10,
        width: 500 * WINDOW.scale,
    },
    modules_list: {
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        paddingHorizontal: 20, // Optional for better spacing
        paddingVertical:0,
    },
    text_header: {
        fontSize: 45 * WINDOW.scale * font.scale,
        fontFamily: font.style,
        color: colors.text,
        paddingBottom: 20,      // Add spacing between header and list
        paddingTop: 100 * WINDOW.scale,
        textAlign: 'center',
    },
    title: {
        fontSize: 27 * font.scale * WINDOW.scale,
        color: colors.button_text,
        fontFamily: font.style,
        textAlign: 'center',
    },
  });
