export const my_size_alpha = (str) => {
  if (!!str) {
    let count = 0;
    while (!!str[count]) {
      count++;
    }
    return count;
  } else {
    return 0;
  }
};
