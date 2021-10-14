import { my_size_alpha } from "./exercice-4.js";
import { my_array_alpha } from "./exercice-5.js";

export const my_length_array = (arr) => {
  let count = 0;
  while (!!arr[count]) {
    count++;
  }
  return count;
};
