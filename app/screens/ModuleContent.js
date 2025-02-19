import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { WINDOW } from "../constants/Dimensions";
import { useTheme } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { ANSPages, ABXPages } from "../data/Modules";
import { MODULES_MAP } from "../constants/ModuleList";

export default function ModuleDetails({ route }) {
    const [textLength, setTextLength] = useState(0);
    const { colors, font } = useTheme();
    const { module_name } = route.params;
    const [currentPageID, setCurrentPageID] = useState(1); // Start at pageID: 1

    const module = MODULES_MAP[module_name]

    const currentPage = module.find((page) => page.pageID === currentPageID);

    const handleNext = () => {
        if (currentPageID < module.length) {
            setCurrentPageID(currentPageID + 1);
        }
    };

    const handleBack = () => {
        if (currentPageID > 1) {
            setCurrentPageID(currentPageID - 1);
        }
    };

    // Helper function to parse text and replace placeholders with components
    const renderContent = (text, images) => {
        const content = [];
        const parts = text.split(/\[IMAGE_(\d+)\]/); // Split by placeholders like [IMAGE_1], [IMAGE_2]

        parts.forEach((part, index) => {
            const imageIndex = parseInt(part, 10) - 1; // Convert placeholder number to index
            if (!isNaN(imageIndex) && images && images[imageIndex]) {
                content.push(
                    <Image
                        key={`image-${index}`}
                        source={images[imageIndex]}
                        style={styles(colors, font).image}
                        resizeMode="contain"
                        onError={(error) => console.log("Image load error: ", error.nativeEvent)}
                    />
                );
            } else {
                content.push(
                    <Text key={`text-${index}`} style={styles(colors, font).text}>
                        {part}
                    </Text>
                );
            }
        });

        return content;
    };

    return (
        <View style={styles(colors, font).container}>
            <Text style={styles(colors, font).sub_header}>{module_name}</Text>
            <View
                style={[styles(colors, font).horizontalLine, { width: textLength }]} // Dynamic line width
            />
            <Text style={styles(colors, font).text_header} 
                  onLayout={(event) => setTextLength(event.nativeEvent.layout.width)}>
                    {currentPage.pageTitle}
            </Text>

            <ScrollView style={styles(colors, font).scroll}>
                {currentPage && renderContent(currentPage.text, currentPage.images)}
            </ScrollView>

            <View style={styles(colors, font).buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles(colors, font).navButton,
                        currentPageID === 1 && styles(colors, font).disabledButton,
                    ]}
                    onPress={handleBack}
                    disabled={currentPageID === 1}
                >
                    <Text style={styles(colors, font).buttonText}>Previous</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles(colors, font).navButton,
                        currentPageID === module.length &&
                            styles(colors, font).disabledButton,
                    ]}
                    onPress={handleNext}
                    disabled={currentPageID === module.length}
                >
                    <Text style={styles(colors, font).buttonText}>Next</Text>
                </TouchableOpacity>
            </View>

            <BackButton page="Modules" />
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
            padding: 20,
        },
        text_header: {
            fontSize: 45 * WINDOW.scale * font.scale,
            fontFamily: font.style,
            color: colors.text,
            paddingBottom: 20,
            textAlign: "center",
        },
        text_content: {
            fontSize: 20 * WINDOW.scale * font.scale,
            fontFamily: font.style,
            color: colors.text,
            textAlign: "center",
            marginBottom: 20,
        },
        image: {
            width: "100%",
            height: 300 * WINDOW.scale,
            marginVertical: 20,
        },
        buttonContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "60%",
            paddingVertical: 20,
        },
        navButton: {
            backgroundColor: colors.button,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            width: "40%",
        },
        disabledButton: {
            backgroundColor: colors.disabled,
        },
        buttonText: {
            color: colors.button_text,
            fontSize: 16 * font.scale,
            fontFamily: font.style,
        },
        scroll: {
            maxHeight: WINDOW.height * 0.65, // Limit the height to 60% of the screen
            width: "100%", // Ensure it spans the width of the screen
        },
        sub_header: {
            fontSize: 30 * WINDOW.scale * font.scale,
            fontFamily: font.style,
        },
        horizontalLine: {
            height: 1,
            backgroundColor: 'black',
            marginBottom: 5, // Spacing between line and text
            marginTop: 7,
        },
    });