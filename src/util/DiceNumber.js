const generateDiceNumber = () => {
  const min = 1;
  const max = 7;
  return Math.floor(Math.random() * (max - min) + min);
};

export default generateDiceNumber;
