import "../../showCard.js"
import "../../AddMember.js"
import {getDataFromDoc,getDataFromDocs} from "../../utils.js";
import { StudentColection } from "../../buoi3/btvn/classAdd.js";
getManyDocument();
class Student{
    Class;
    name;
    age;
    homeTown;
    imgStu;
    constructor(imgStu,Class,name,age,homeTown){
        this.imgStu =imgStu;
        this.Class =Class;
        this.name =name;
        this.age =age;
        this.homeTown =homeTown;

    }
    toHtml(){
        return`
        <card-container imgSrc = "${this.imgStu}" titlesrc="${'Name: '+this.name +' Class: '+ this.Class}" desSrc="${'Age : '+this.age+' Home Town : '+this.homeTown}"> </card-container>
        `
    }
    
}
const studentArr =[];
async function getManyDocument() {
    const getData = await firebase.firestore().collection('student').get()
    const student = getDataFromDocs(getData)
    const studentColection = new StudentColection()
    for (let i = 0; i < student.length; i++) {
        student[i] = new Student(`${student[i].img}`,`${student[i].Class}`,`${student[i].Name}`,`${student[i].Age}`,`${student[i].HomeTown}`)   
        studentArr.push(student[i])
        
    }
    // console.log(studentArr)
    studentArr.map((student) => studentColection.addStudent(student))
    studentColection.show()

}




