export const my_display_comb = () => {
  let array = [];
  let loop = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 1; j < 100; j++) {
      array[loop] = i + ' ' + j;
      loop++;
    }
  }
  return array;
};