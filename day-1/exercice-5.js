import { my_size_alpha } from "./exercice-4.js";

export const my_array_alpha = (str) => {
  let arrayAlpha = [];

  for (let i = 0; i < my_size_alpha(str); i++) {
    arrayAlpha[i] = str[i];
  }

  return arrayAlpha;
};
