export const my_is_posi_neg = (nbr) => {
  switch (true) {
    case nbr < 0:
      return "NEGATIF";
    case nbr > 0 || nbr === null || nbr === undefined:
      return "POSITIF";
    case nbr === 0:
      return "NEUTRAL";
  }
};
