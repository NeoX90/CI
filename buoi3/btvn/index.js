import './moduleShowCard.js'
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
import{StudentColection} from './classAdd.js'
const studentColection = new StudentColection()
const student1 =new Student('https://znews-photo.zadn.vn/w660/Uploaded/aohvtsw/2019_09_28/o91.jpg','th1','nam',20,'ha noi')
const student2 =new Student('https://znews-photo.zadn.vn/w660/Uploaded/aohvtsw/2019_09_28/o91.jpg','th1','namhh',20,'ha nam')
const student3 =new Student('https://znews-photo.zadn.vn/w660/Uploaded/aohvtsw/2019_09_28/o91.jpg','th1','nam',20,'ha noi')
const student4 =new Student('https://znews-photo.zadn.vn/w660/Uploaded/aohvtsw/2019_09_28/o91.jpg','th1','nam',20,'ha noi')

const studentArr = [student1,student2,student3,student4];
studentArr.map((student) => studentColection.addStudent(student))
studentColection.show()