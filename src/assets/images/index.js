// src/assets/images/index.js
// You need to import all your images here
import macAndCheese from "./mac-and-cheese.jpg";
import margheritaPizza from "./margherita-pizza.jpg";
// import the rest of your images

// Export an object that maps filenames to their respective imports
const imagePathMapper = {
  "mac-and-cheese.jpg": macAndCheese,
  "margherita-pizza.jpg": margheritaPizza,
  // map the rest of your filenames to imports
};

export default imagePathMapper;
