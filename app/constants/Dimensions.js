import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
// const scale = (width+height)/2250
const scale = (2*(width+height)-width)/3500

export const WINDOW = {
    width,
    height,
    scale
}