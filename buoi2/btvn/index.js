

let className = document.querySelector(`#className`)
let NameStudent = document.querySelector(`#NameStudent`)
let StudentAge = document.querySelector(`#StudentAge`)
let StudentHT = document.querySelector(`#StudentHT`)
let btnAdd = document.querySelector(`#add`)
let searchD = document.querySelector(`#search`)
let btnSearch = document.querySelector(`#btnSearch`) 
class Student {
    Class;
    name;
    age;
    homeTown;
    constructor(Class,name,age,homeTown){
        this.Class =Class;
        this.name = name;
        this.age = age;
        this.homeTown = homeTown;
    }
    toHtml() {
        return `
        <table>
            <tr>
                <th>Class</th>
                <th>Name</th>
                <th>Age</th>
                <th>Home Town</th>
            </tr>
            <tr>
                <td>${this.Class}</td>
                <td>${this.name}</td>
                <td>${this.age}</td>
                <td>${this.homeTown}</td>
            </tr>
        </table>
        `
    }
} 

import{StudentColection} from './module.js'
//hoac su dung import * as --name-- from ...
// them data
const studentColection = new StudentColection()
const student1 = new Student(`th1`,`nam`,20,`ha noi`) 
const student2 = new Student(`th2`,`lili`,21,`hong kong`) 
const student3 = new Student(`th3`,`jame`,13,`seoul`) 
const student4 = new Student(`th4`,`dave`,9,`new york`) 
// show student
const studentArr = [student1,student2,student3,student4];
studentArr.map((student) => studentColection.addStudent(student))
studentColection.show()

console.log(`search age + home Town`)
console.log(studentColection.searchSth(20,'ha noi'))
console.log(`search name`)
console.log( studentColection.searchName('jame'))
console.log(`search age`)
console.log( studentColection.searchAge(9))
// lam them
function add(){
    const student5 = new Student(className.value,NameStudent.value,StudentAge.value,StudentHT.value)
    // document.querySelector(`#app`).innerHTML = " ";
    studentArr.push(student5)
    studentArr.map((student) => studentColection.addStudent(student))
    console.log(studentArr)
    studentColection.show() 
}
// function search() {
// function searchNameStudent(){
//     this.listStudent.filter(student => student.name === searchD)
//     studentColection.show()
// }
//
// }
