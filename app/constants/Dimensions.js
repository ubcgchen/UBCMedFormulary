import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
const scale = height/1000

export const WINDOW = {
    width,
    height,
    scale
}