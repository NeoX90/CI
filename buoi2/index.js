class Person {
    name;
    age;
    address;
    gender;
    constructor(name,age, address,gender){
        // console.log(`this is new person`);
        this.name= name ;
        this.age= age ;
        this.address= address ;
        this.gender= gender ;
        // console.log(this)
    }
    speak(){
        console.log(`
        hello , i'm ${this.name}.
        I'm ${this.age}
        My address: ${this.address}
        My gender : ${this.gender}`)
    }
}
const duyet =new Person('Duyet', 20 ,'Ha noi','male')
const abc =new Person('Abc', 22 ,'Ha noi','female')
// duyet.speak()

// console.log(duyet)
class Animal{
    species;
    name;
    color;
    numberOfLeg;
    gender;
    constructor(species,name,color,numberOfLeg,gender){
        console.log(`this is new animal`);
        this.species= species ;
        this.name= name ;
        this.color= color ;
        this.numberOfLeg= numberOfLeg ;
        this.gender= gender ;
        // console.log(this)
    }
    eat(){
        console.log(`con ${this.name} dang an`);
    }
    speak(){
        console.log(`con ${this.name} dang keu`);
    }
    isDangerrouse(){
        // if((this.numberOfLeg>=4 )||(this.numberOfLeg==0)){
        //     console.log(`la loai dong vat nguy hiem`)
        // }
        // else{
        //     console.log(`la loai dong vat ko nguy hiem`)
        // }

        // c2
        const message = ((this.numberOfLeg>=4 )||(this.numberOfLeg==0) ? 'nguy hiem' : 'ko nguy hiem')
        console.log(message)
    }
}
const tiger = new Animal('cat','Hello','black red',4,'female');
tiger.eat();
tiger.speak();
tiger.isDangerrouse();

//static method : phương thức tĩnh (bao gồm cả Math.ceil,Math. ....)
class MyMath{
    static sum(a,b){
        return a+b;
    }
    static div(a,b){
        return a/b;
    }
}
console.log(MyMath.sum(1,2))

// kế thừa
class Employee extends Person{
    salary;
    constructor(name,age,address,gender,salary) {
        super(name,age,address,gender),
        this.salary = salary;
    }
    speak() {
        console.log(`Make America great again`)
    }
    showOf() {
        console.log(`my salary is ${this.salary}`)
    }
}
const myEmployee = new Employee(`Trump`, 76 , `New Yorks`, `Male`,`1m$`)
// console.log(myEmployee)
console.log(myEmployee.speak())
console.log(myEmployee.salary())