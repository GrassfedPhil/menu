import coke from "../images/coke.jpg";
import pepsi from "../images/pepsi.jpg";
import drinkImage from "../images/coke.jpg";
import cheeseburger from "../images/cheeseburger.png";
import fries from "../images/fries.png";


export default {

    drinks: {
        items: {
            1: {itemName: "Coke", description: "Refreshing Coke", image: coke},
            2: {itemName: "Pepsi", description: "Tasty Pepsi", image: pepsi}
        },
        image: drinkImage
    },
    food: {
        items: {
            1: {itemName: "Cheeseburger", description: "Tasty Cheeseburger", image: cheeseburger},
            2: {itemName: "Fries", description: "Tasty Fries", image: fries}
        },
        image: cheeseburger
    }

};