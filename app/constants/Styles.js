export const Light = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#FFF",
    text_input_background: "#f5f5f5",
    card: "rgb(255, 255, 255)",

    text: "rgb(28, 28, 30)",
    text_disabled: "#777",

    border: "#000",
    notification: "rgb(255, 69, 58)",

    button: "#ebebeb",
    button_disabled: "#fafafa",
    button_outline: "#000",
    button_text: "rgb(28, 28, 30)",

    correct_outline: "#5fb25f",
    incorrect_outline: "#b24141",
    selected_outline: "#5bbce4",
    correct: "#88FF88",
    incorrect: "#d79191",
    selected: "#87CEEB",
    text_submitted: "#000",
    shadow: "#a9a9a9",

    //Formulary
    formulary_header: "#FFF",
  },
  font: {
    style: Platform.OS === "ios" ? "DamascusLight" : "sans-serif", // Dynamically determine font based on platform
    scale: 1,
  },
  logo: require("../assets/logos/ubc-logo.png"),
};

export const Dark = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#393939",
    text_input_background: "#535353",
    card: "rgb(255, 255, 255)",

    text: "#FFF",
    text_disabled: "#ababab",

    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",

    button: "#3d4a52",
    button_disabled: "#636e74",
    button_outline: "#000",
    button_text: "#FFF",

    correct_outline: "#5fb25f",
    incorrect_outline: "#b24141",
    selected_outline: "#4896b6",
    correct: "#6ccc6c",
    incorrect: "#ac7474",
    selected: "#6ca4bc",
    text_submitted: "#000",
    shadow: "#2d2d2d",

    formulary_header: "#2d2d2d",
  },
  font: {
    style: Platform.OS === "ios" ? "DamascusLight" : "sans-serif",
    scale: 1,
  },
  logo: require("../assets/logos/ubc-logo_darkmode.png"),
};

export const Cute = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#fdf7e8",
    text_input_background: "#fbf1d6",
    card: "rgb(255, 255, 255)",

    text: "#939393",
    text_disabled: "#d3d3d3",

    border: "#b3b3b3",
    notification: "rgb(255, 69, 58)",

    button: "#ffedef",
    button_disabled: "#fbf1f2",
    button_outline: "#000",
    button_text: "#848484",

    correct_outline: "#5fb25f",
    incorrect_outline: "#b24141",
    selected_outline: "#5bbce4",
    correct: "#88FF88",
    incorrect: "#d79191",
    selected: "#87CEEB",
    text_submitted: "#000",
    shadow: "#a2a2a2",

    formulary_header: "#daeaf6",
  },
  font: {
    style: "Hynings",
    scale: 1.3,
  },
  logo: require("../assets/logos/ubc-logo_cute.png"),
};

export const Coffee = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#f5ede5",
    text_input_background: "#f0e3d7",
    card: "rgb(255, 255, 255)",

    text: "#986c55",
    text_disabled: "#c1a699",

    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",

    button: "#eedfd9",
    button_disabled: "#f3e8e4",
    button_text: "#986c55",

    correct_outline: "#5fb25f",
    incorrect_outline: "#b24141",
    selected_outline: "#5bbce4",
    correct: "#88FF88",
    incorrect: "#d79191",
    selected: "#87CEEB",
    text_submitted: "#000",
    shadow: "#a2a2a2",

    formulary_header: "#acb4af",
  },
  font: {
    style: Platform.OS === "ios" ? "DamascusLight" : "sans-serif",
    scale: 1,
  },
  logo: require("../assets/logos/ubc-logo.png"),
};

// The order of this list is the order that the themes will rotate in the app
export const themeMap = {
  Light: {
    theme: Light,
    icon: "white-balance-sunny",
    color: "rgb(200, 200, 200)", // icon colour
  },
  Dark: {
    theme: Dark,
    icon: "weather-night",
    color: "rgb(255, 255, 255)",
  },
  Coffee: {
    theme: Coffee,
    icon: "coffee",
    color: "#acb4af",
  },
  Cute: {
    theme: Cute,
    icon: "candycane",
    color: "#daeaf6",
  },
};
export const themeMapKeys = Object.keys(themeMap);
