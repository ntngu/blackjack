const Card = () => {
  /**
   * 
   * @param {*} max Limit to highest value possible.
   * @returns Random integer.
   */
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  /**
   * Array that holds card values.
   */
  const cards = {
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: ["10", "J", "Q", "K"],
    11: "A",
  };
  /**
   * 
   * @returns A random card from 2 to A.
   */
  const getCard = () => {
    const number = getRandomInt(9) + 2;
    if (number === 10) {
      const faceCardNumber = getRandomInt(3);
      return cards[number][faceCardNumber];
    } else {
      return cards[number];
    }
  };

  return { getCard };
};

export default Card;