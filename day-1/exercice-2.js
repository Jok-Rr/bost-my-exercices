import { my_display_alpha } from "./exercice-1.js";
import { my_size_alpha } from "./exercice-4.js";

export const my_display_alpha_reverse = () => {
  let alphaResult = "";

  for (let i = my_size_alpha(my_display_alpha()); i > -1; i--) {
    alphaResult += my_display_alpha()[i];
  }
  return alphaResult;
};

console.log(my_display_alpha_reverse());
