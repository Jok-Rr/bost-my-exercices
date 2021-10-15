export const my_display_combv2 = () => {
  let array = [];
  let loop = 0;

  for (let i = 0; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 3; k <= 9; k++) {
        (i != j && j != k && i != k) && (array[loop] = i + " " + j + " " + k, loop++);

        if (i == 7 && j == 8 && k == 9) {
          return array;
        }
      }
    }
  }
  return array;
};
