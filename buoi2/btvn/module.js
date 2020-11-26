class StudentColection{
    listStudent;
    current;
    constructor() {
        this.listStudent =[];
        this.current = 0;
    }
    addStudent(student){
        this.listStudent.push(student)
        
    }

    show() {
        document.querySelector(`#app`).innerHTML =  this.listStudent.map((student) => student.toHtml())        
    }
    searchName(name) {
        return  this.listStudent.filter(student => student.name.includes(name)) //includes check ab co nam trong name :abcd ko va tra ve gia tri true
    }
    searchAge(age) {
        return  this.listStudent.filter(student => student.age === age) 
    }
    searchSth(age,homeTown){
        return this.listStudent.filter(student => student.age === age) && this.listStudent.filter(student => student.age === age)
    }
}
export{StudentColection}