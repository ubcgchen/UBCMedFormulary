/**
 * @author George Chen, UBC VFMP 2025
 */

/**
 * Takes an array and returns a shuffled version of it
 * @param {array} arr the array to be shuffled
 * @returns shuffled array arr
 */
export function shuffle(arr) {
  var i, i_rand, temp;
  for (i = arr.length - 1; i > 0; i--) {
    i_rand = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[i_rand];
    arr[i_rand] = temp;
  }
  return arr;
}
