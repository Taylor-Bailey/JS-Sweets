console.log("hello main.js");

let sweetspot = document.getElementById("sweetspot");

// inventory.forEach(function(item, index) {
//     console.log("sweet item", item, index);
//     sweetspot.innerHTML += `<li class = "fancy">${item.name}: ${item.kind}: ${item.flavor}: ${item.topcolor}: ${item.topping}`
// });

inventory.forEach((item, index) => {
    console.log("sweet item", item, index);
    sweetspot.innerHTML += `<li class = "fancy">${item.name}: ${item.kind}: ${item.flavor}: ${item.topcolor}: ${item.topping}`;
});

let getFancy = document.getElementsByClassName("fancy");
console.log("fancy class stuff", getFancy);
console.log("fancy item", getFancy[0].innerHTML);

const howManySweets = () => {
    return inventory.length;
}

// function howManySweets2 () {
//     return inventory.length;
// }

const getHowManySweets = () => {
    return inventory.length;
}

const totalNumberSweets = () => {
    var count = getHowManySweets ();
    console.log("howmany:", count);
}


let btnGetTotalAmount = document.getElementById("btn-getTotalSweets");
// btnGetTotalAmount.addEventListener("click", totalNumberSweets);

let btnGetTotalAmounts = document.getElementById("btn-getTotalSweets").addEventListener("click", totalNumberSweets);


function Sweet (name, kind, flavor, topping, topcolor){
    this.name = name;
    this.kind = kind;
    this.flavor = flavor;
    this.topping = topping;
    this.topcolor = topcolor;
    this.bake = function(){
        let ovenTemp = 300;
        if (this.kind === "cake"){
            ovenTemp = 350;
        }else if(this.kind === "brownie"){
            ovenTemp = 375;
        }
        return ovenTemp;
    }
}

function addGreenOne (){
    inventory.push(new Sweet("Christmas Tree", "cake", "vanilla", "none", "color"));
    console.log("new inventory", inventory);
}

let addGreenSweet = document.getElementById("btn-addGreenSweet").addEventListener("click", addGreenOne);

function makeSweetObject(name, kind, flavor, topping, topcolor){
    return new Sweet(name, kind, flavor, topping, topcolor);
}

function addNewSweet(){
    inventory.push(makeSweetObject("Camper Tree", "cake", "chocolate", "sprinkles", "green"));
    console.log("new inventory is", inventory);
    showSweets();
}

function showSweets(){
    inventory.forEach( (item, index) => {
        document.getElementById("new-version").innerHTML += `<li>${item.name}: ${item.kind}: ${item.flavor}: ${item.topcolor}: ${item.topping}`;
    });
}
let btnAddSweet = document.getElementById("btn-addSweet").addEventListener("click", addNewSweet);

let newInventory = [];
function makeNewInventory(){
    inventory.forEach((item, index) => {
        newInventory.push(makeSweetObject(item.name, item.kind, item.flavor, item.topping, item.topping, item.topcolor))
    });
}

makeNewInventory();

const bakeSweet = () => {
    let item = newInventory[0];
    let ovenTemp = item.bake();
    console.log("ovenTemp", ovenTemp);
}

let btnBakeSweet = document.getElementById("btn-bakeSweet").addEventListener("click", bakeSweet);















































