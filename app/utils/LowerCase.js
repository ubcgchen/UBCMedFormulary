/**
 * @author George Chen, UBC VFMP 2025
 */

/**
 * Sets all letters of string to be lower case if theme is set to "Cute"
 * @param {String} string the string to be processed
 * @param {String} theme the name of the current theme
 * @returns the processed string
 */
export function lowerCase(string, theme) {
  if (theme == "Cute") return string.toLowerCase();
  return string;
}
