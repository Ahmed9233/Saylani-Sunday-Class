//              OBJECTS

// var plan1 = {  //Manually object start with small letter
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10
// };

// plan1.discounMonth = [2, 5, 6]
// console.log(plan1.discounMonth[0]);

// New Chapter

// var plan1 = {
//     name: "Basic", //You can gives value in string, boolean, number, float, array & objects
//     price: let = {
//         priceone: 47,
//         pricetwo: 57,
//         pricethree: 67,

//     },
//     transfer: 1000,
//     space: 1.98,
//     transfer: true,
//     area: ["Streer no", 89, "Karachi", 8, "Pakistan"],
//     pages: 10
// };
// console.log(plan1.price.pricetwo);


// METHODS


// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [7, 4, 9],
//     calcAnnual: function (discRate) { // You can also pass a function as a value of a parameter
//         var bestPrice = this.price //    this. mean in this obj
//         var CurMonth = new Date().getMonth()
//         for (i = 0; i < plan1.discountMonths.length; i++) {
//             if (plan1.discountMonths[i] === CurMonth) {
//                 bestPrice = bestPrice * discRate / 100 //Short Cut of increment
//             } break;
//         }
//         return bestPrice * 12
//     }

// }
// console.log(plan1.calcAnnual(50));


//                  CLASS && CONSTRUCTOR FUNCTION
///     Start with Capital letter when you call this that show the name of
///     the class but in manually made objects there is no name of object



/// (Normal Way)                  CONSTRUCTOR FUNCTION


// function Obj(title, description, price, cost, expireInFiveDays, color) {
//     this.title = title;
//     this.description = description;
//     this.price = price;
//     this.cost = cost;
//     this.expiryDate = expireInFiveDays;
//     this.color = color
// }

// var product1 = new Obj("Dairy Milk", "Dark Choclate with Milk", 50, 20, false, "Dark Blue")
// var product2 = new Obj("Biscuit", "Choclate Biscuit with Milk", 20, 6, true, "Black")
// var product3 = new Obj("Juice", "Fresh Apple Juice", 90, 35, false, "red")
// console.log(product1, product2, product3);


/// (New Way)                  THROUGH CLASS


// class Obj1 {

//     constructor(title, description, amount, cost, expireInFiveDays, color) {
//         this.name = title,
//             this.description = description,
//             this.price = amount,
//             this.cost = cost,
//             this.expiryDate = expireInFiveDays,
//             this.color = color
//     }
// }

// const product1 = new Obj1("Dairy Milk", "Dark Choclate with Milk", 50, 20, false, "Dark Blue")
// const product2 = new Obj1("Biscuit", "Choclate Biscuit with Milk", 20, 6, true, "Black")
// const product3 = new Obj1("Juice", "Fresh Apple Juice", 90, 35, false, "red")

// product1.bigBuyer = "Imtiaz Store";        // You can store any other property outside
// console.log(product1, product2, product3); // The class or a constructor function



//              PROTOTYPE All additional information of objects are store in Prototype


// class Obj1 {

//     constructor(title, description, amount, cost, expireInFiveDays, color) {
//         this.name = title,
//             this.description = description,
//             this.price = amount,
//             this.cost = cost,
//             this.expiryDate = expireInFiveDays,
//             this.color = color,
//             this.manufacturing = "Made in Pakistan";
//     }
// }

// const product1 = new Obj1("Dairy Milk", "Dark Choclate with Milk", 50, 20, false, "Dark Blue")
// const product2 = new Obj1("Biscuit", "Choclate Biscuit with Milk", 20, 6, true, "Black")
// const product3 = new Obj1("Juice", "Fresh Apple Juice", 90, 35, false, "red")

// Obj1.prototype.bigBuyer = "Imtiaz Store";  // You can only apply prototype on constructor function or any class like below given example
// console.log(product1, product2, product3); // Now all new objects which will be create through this constructor function or through that class
//                                               Will copy that property in their prototype which will no occupy any space at all
//                                               and you can also add any method in prototype


///                                     For In Loop


///                                     Array Example
/// In array the variable key will return the index of array
/// This (for in) will run on the numbers of value or Qty in array have in this case it will run 6 times
/// In array the variable key will return the index of that array and if you write array[key] will return the values of that array


//const array = ["Ahmed", "Hamza", "Aslam", "Roohi", "Sumaiya", "Soaiyaba"]

//for (var key in array) {
            /// Index            Value
//    console.log(key + " " + array[key]);
//}

///                                     Object Example
/// This (for in) will run on the numbers of property an obj have in this case it will run 4 times
/// In object the variable key will return the keys of object and if you write obj[key] will return the values of the object

// const obj = {
//     name: "Ahmed",
//     rollNo: 12574,
//     id: "Black Zero",
//     goodDressing: true,

// }

// for (let key in obj) {
//     console.log(key + " " + obj[key]);
// }
//console.log(obj);