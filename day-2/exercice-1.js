import { my_size_alpha } from "../day-1/exercice-4.js";

export const my_alpha_reverse = (str) => {
  let alphaResult = "";

  if (typeof str == "string") {
    for (let i = my_size_alpha(str) - 1; i > -1; i--) {
      alphaResult += str[i];
    }
  }
  return alphaResult;
};

