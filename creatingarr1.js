let groItemsList = ["milk", "butter", "jam", "bread", "peanut butter"];
let pricesList = [3.99, 4, 2.99, 3.49, 3];

console.log("Grocery List :",groItemsList);
console.log("Prices:",pricesList);
console.log("Grocery Item 4 is :" ,groItemsList[4],",Grocery Item 0 is :",groItemsList[0],",Grocery Item 2 is :",groItemsList[2]);
console.log("Price of Item 4 is :$",pricesList[4],",Price of Item 0 is :$",pricesList[0],",Price of Item 2 is :$",pricesList[2]);

//Trying using for loop
for(let i=0 ; i<groItemsList.length; i++)
{
    console.log("Grocery Items "+ [i] + " : "+ groItemsList[i]);
}
for(let i=0 ; i<pricesList.length; i++)
{
    console.log("Prices List "+ [i] + " : "+ "$" + pricesList[i]);
}

