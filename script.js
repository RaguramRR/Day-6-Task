//! Question 1 : https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


class Movie{
    constructor(title, studio, rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
const movie2 = new Movie("Casino Royale", "Eon Productions");


console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);

console.log(movie2.rating);



//! Question 2 : https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
            this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},colors=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj1 = new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

console.log(obj1.circumferenceCircle);

//! Question 3: write a "person" class to hold all details.

class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("Divya", "Bharathi", "2-06-1996" , "chennai");
var person2 = new Person("Swetha", "sekaran", "1-1-1998" , "chennai");
var person3 = new Person("Saratha", "Gokul", "9-10-1995" , "Salem");
var person4 = new Person("johnson", "George", "7-10-2001" , "Salem");
var person5 = new Person("Kumar", "Pandian", "8-7-1995" , "Ooty");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)



//! Question 4 : write a class to calculate the uber price.

class UberPriceCalculator {
    constructor() {
      this.baseFare = 90;
      this.costPerKilometer = 20;
      this.costPerMinute = 3.8;
      this.bookingFee = 40;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the fare based on distance and time
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
      // Calculate the total price
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 10; // Distance in kilometers
  const timeInMinutes = 20; // Time in minutes
  
  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);