import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import four from "./img/4.png";
import five from "./img/5.png";
import six from "./img/6.png";
//this function will change the source of a dice image according to the number computed from the Math.random function.
const changeDices = (dice) => {
  switch (dice) {
    case 2:
      return two;
    case 3:
      return three;
    case 4:
      return four;
    case 5:
      return five;
    case 6:
      return six;
    default:
      return one;
  }
};

export default changeDices;
