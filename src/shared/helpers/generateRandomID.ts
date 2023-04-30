const pad = (number: number, length: number) => {
  let str = number.toString();
  while (str.length < length) {
    str = '0' + str;
  }
  return `tt${str}`;
};

export const generateRandomID = () => pad(Math.floor(Math.random() * 2155529 + 1), 7);
