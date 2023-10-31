Question 1: Class-Movie

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating = rating;
    }
}
 
const movie1 = new Movie("Casino Royale","Eon Productions");
const movie2 = new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);
console.log(movie2.rating);

Question 2:Circle - class

class Circle{
    constructor(radius,color){
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
        return `"Circle[radius=${this.radius},color=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI* this.radius*this.radius;
    }
    get circumferenceCircle(){
        return 2* Math.PI*this.radius;

    }
}
var obj1 = new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2;
console.log(obj1.radiusCircle);
console.log(obj1.colorCircle);
obj1.colorCircle ="Blue";
console.log(obj1.colorCircle);
console.log(obj1.toString);
console.log(obj1.areaCircle);
console.log(obj1.circumferenceCircle)

3.Write a “person” class to hold all the details.
class Person{
    constructor (names,age,year,salary){
        this.names = names;
        this.age = age;
        this.year = year;
        this.salary = salary;
    }
}
var person1 = new Person("Ram",21,2001,20000);
console.log(person1.names);
console.log(person1.age);
console.log(person1.year);
console.log(person1.salary);
4.write a class to calculate the uber price.

class Uber{
    constructor(price){
        this.price = price;

        }
        set price(n){
            return `${this.price*n}`
        }
        get price(){
            return `$(this.price)`
        }
    }
    var uber1 = new Uber(10);
    console.log(uber1.price);