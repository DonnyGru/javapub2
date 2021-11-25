const age = 18;
const isFemale = true;
const driverStatus = bob;
const firstName = Bram;
const totalAmount = 50;
//age check
if (age >= 18){
    console.log("You are allowed in!");
} else{
    console.log("You are too young!");
}
//age discount
if (age >= 18 && age<=25){
    console.log("You get 50% off!");
} else{
    console.log("Welcome!");
}
//woman allowed
if (isFemale){
    console.log("You are a woman! Come in!");
} else {
    console.log("Sorry, only woman are allowed to go in!");
}
//driving allowed
if (driverStatus == bob) {
    console.log("You can drive!");
} else {
    console.log("You cannot drive!");
}
//lucky name
if (firstName === "Bram" || firstName === "Sarah"){
    console.log("You get a free beer!");
}else{
    console.log ("Sorry, free beer is for Bram and Sarah only!");
}
//total amount
if (totalAmount > 50){
    console.log("You get a free portion of nachos!");
} else if (totalAmount >50){
    console.log("You get a free (veggie) bitterballen!(If only drinks in the order exceeds amount)");
} else if (totalAmount >100){
    console.log("You get a free bottle of champagne!");
}else{
    console.log("See you next time!");
}
